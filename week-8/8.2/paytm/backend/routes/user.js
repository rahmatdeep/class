const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const { User } = require("../db");
const { authMiddleware } = require("../middleware");
const router = express.Router();

const signupSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

router.post("/signup", async (req, res) => {
  const { success } = signupSchema.safeParse(body);
  if (!success) {
    return res.status(411).json({
      message: "Email already taken/ Incorrect inputs",
    });
  }

  const exsistingUser = await User.findOne({
    username: req.body.username,
  });

  if (exsistingUser) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  const token = jwt.sign(
    {
      userId: user._id,
    },
    JWT_SECRET
  );

  res.json({
    message: "User created successfully",
    token: token,
  });
});

const singinSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
});

router.post("/signin", async (req, res) => {
  const { success } = singinSchema.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
    return;
  } else {
    res.status(411).json({
      message: "Error while loggin in",
    });
  }
});

const updateSchema = zod.Schema({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateSchema.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: "Error while updating information",
    });
  }

  const updatedFields = Object.keys(req.body);
  if(updatedFields.length === 0) {
    return res.status(411).json({
        message: "No fields provided for update",
    });
  }

  await User.updateOne({ _id: req.userId }, { $set: req.body });

  res.json({
    message: "Updated successfully",
  });
});

router.get("/bulk", authMiddleware, async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;

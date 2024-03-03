import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>().basePath("/api/v1");

// POST /api/v1/signup
// POST /api/v1/signin
// POST /api/v1/blog
// PUT /api/v1/blog
// GET /api/v1/blog/:id (specific)

app.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });

  const token = await sign({ id: user.id }, c.env.JWT_SECRET);

  return c.json({ jwt: token });
});

app.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
    select: {
      id: true,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({ error: "User not found" });
  }

  const token = await sign({ id: user.id }, c.env.JWT_SECRET);

  return c.json({ jwt: token });
});

app.post("/blog", (c) => {
  return c.text("blog POST route");
});

app.put("/blog", (c) => {
  return c.text("blog PUT route");
});

app.get("/blog/:id", (c) => {
  let id = c.req.param("id");
  return c.text("blog GET route where id is " + id);
});
export default app;

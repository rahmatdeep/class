import { PrismaClient } from "@prisma/client";
import { Sign } from "crypto";

const prisma = new PrismaClient();

interface insertUserSchema {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

async function insertUser({
  email,
  password,
  firstName,
  lastName,
}: insertUserSchema) {
  const res = await prisma.user.create({
    data: {
      email,
      password,
      firstName,
      lastName,
    },
    select: {
      id: true,
      password: true,
    },
  });
  console.log(res);
}

interface UpdateParams {
  firstName?: string;
  lastName?: string;
}

async function updateUser(
  email: string,
  { firstName, lastName }: UpdateParams
) {
  const res = await prisma.user.update({
    where: { email },
    data: {
      firstName,
      lastName,
    },
  });
  console.log(res);
}
async function getUser(email:string) {
    const res = await prisma.user.findFirst({
        where: {email}
    })
    console.log(res);
}


async function deleteUser(email:string) {
    const res = await prisma.user.delete({
        where: {
            email
        }
    })
    console.log(res);
}

getUser("harkirat@gmail.com")
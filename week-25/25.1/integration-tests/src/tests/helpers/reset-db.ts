import { PrismaClient } from "@prisma/client";

const primsa = new PrismaClient();

export default async () => {
  await primsa.$transaction([primsa.request.deleteMany()]);
};

/*
  Warnings:

  - A unique constraint covering the columns `[firstName]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[lastName]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_firstName_key" ON "User"("firstName");

-- CreateIndex
CREATE UNIQUE INDEX "User_lastName_key" ON "User"("lastName");

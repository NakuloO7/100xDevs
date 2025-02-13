-- CreateTable
CREATE TABLE "todoUser" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,

    CONSTRAINT "todoUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "todoTable" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "todoTable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "todoUser_username_key" ON "todoUser"("username");

-- CreateIndex
CREATE UNIQUE INDEX "todoTable_userId_key" ON "todoTable"("userId");

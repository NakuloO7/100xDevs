-- AddForeignKey
ALTER TABLE "todoTable" ADD CONSTRAINT "todoTable_userId_fkey" FOREIGN KEY ("userId") REFERENCES "todoUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `owner` on the `WorkItem` table. All the data in the column will be lost.
  - Added the required column `ownerId` to the `WorkItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WorkItem" DROP COLUMN "owner",
ADD COLUMN     "ownerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "WorkItem" ADD CONSTRAINT "WorkItem_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- DropForeignKey
ALTER TABLE "WorkItem" DROP CONSTRAINT "WorkItem_ownerId_fkey";

-- AlterTable
ALTER TABLE "WorkItem" ALTER COLUMN "ownerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "WorkItem" ADD CONSTRAINT "WorkItem_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_gameKey_fkey";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_gameKey_fkey" FOREIGN KEY ("gameKey") REFERENCES "Game"("code") ON DELETE SET NULL ON UPDATE CASCADE;

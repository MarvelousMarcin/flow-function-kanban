-- CreateTable
CREATE TABLE "WorkItem" (
    "id" TEXT NOT NULL,
    "table" TEXT NOT NULL,
    "blocker" INTEGER NOT NULL,
    "stage" INTEGER NOT NULL,
    "owner" TEXT NOT NULL,
    "start" INTEGER NOT NULL,
    "end" INTEGER NOT NULL,
    "lead_time" INTEGER NOT NULL,
    "game_id" TEXT NOT NULL,

    CONSTRAINT "WorkItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Enterprise" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "generalbg" TEXT,
    "generalcolor" TEXT,
    "highlightsbg" TEXT,
    "highlightscolor" TEXT,

    CONSTRAINT "Enterprise_pkey" PRIMARY KEY ("id")
);

/*
  Warnings:

  - A unique constraint covering the columns `[journalId]` on the table `JournalEntry` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `JournalEntry_journalId_key` ON `JournalEntry`(`journalId`);

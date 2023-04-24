/*
  Warnings:

  - The values [ARCHIVED] on the enum `UPDATE_STATUS` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[id,belongsToId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UPDATE_STATUS_new" AS ENUM ('IN_PROGRESS', 'LIVE', 'DEPRECATED');
ALTER TABLE "Update" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Update" ALTER COLUMN "status" TYPE "UPDATE_STATUS_new" USING ("status"::text::"UPDATE_STATUS_new");
ALTER TYPE "UPDATE_STATUS" RENAME TO "UPDATE_STATUS_old";
ALTER TYPE "UPDATE_STATUS_new" RENAME TO "UPDATE_STATUS";
DROP TYPE "UPDATE_STATUS_old";
ALTER TABLE "Update" ALTER COLUMN "status" SET DEFAULT 'IN_PROGRESS';
COMMIT;

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_belongsToId_key" ON "Product"("id", "belongsToId");

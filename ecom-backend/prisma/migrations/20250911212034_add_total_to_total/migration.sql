/*
  Warnings:

  - You are about to drop the column `Total` on the `Order` table. All the data in the column will be lost.
  - Added the required column `total` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Order" DROP COLUMN "Total",
ADD COLUMN     "total" TEXT NOT NULL;

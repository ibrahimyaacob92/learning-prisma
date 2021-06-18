-- AlterTable
ALTER TABLE "user" ADD COLUMN     "profession_id" INTEGER,
ALTER COLUMN "username" SET DEFAULT E'John';

-- CreateTable
CREATE TABLE "Profession" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profession.title_unique" ON "Profession"("title");

-- AddForeignKey
ALTER TABLE "user" ADD FOREIGN KEY ("profession_id") REFERENCES "Profession"("id") ON DELETE SET NULL ON UPDATE CASCADE;

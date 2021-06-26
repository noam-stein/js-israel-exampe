import {MigrationInterface, QueryRunner} from "typeorm";

export class firstCommit1624642137510 implements MigrationInterface {
    name = 'firstCommit1624642137510'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dog" ("id" BIGSERIAL NOT NULL, "ownerId" bigint, 
        CONSTRAINT "REL_2cd931b431fa086ee81e43ec5d" UNIQUE ("ownerId"), CONSTRAINT "PK_187826f37fd8e592a5711350db1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "dog" ADD CONSTRAINT "FK_2cd931b431fa086ee81e43ec5da" FOREIGN KEY ("ownerId") REFERENCES "person"("id") 
        ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dog" DROP CONSTRAINT "FK_2cd931b431fa086ee81e43ec5da"`);
        await queryRunner.query(`DROP TABLE "dog"`);
    }

}

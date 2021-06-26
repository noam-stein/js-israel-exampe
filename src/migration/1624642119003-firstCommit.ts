import {MigrationInterface, QueryRunner} from "typeorm";

export class firstCommit1624642119003 implements MigrationInterface {
    name = 'firstCommit1624642119003'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "actor" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "movies" text array, CONSTRAINT "PK_05b325494fcc996a44ae6928e5e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "person" ("id" BIGSERIAL NOT NULL, CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dogs" ("id" BIGSERIAL NOT NULL, "ownerId" bigint, CONSTRAINT "REL_1661fdbf2ed1ae0d748307e0e0" UNIQUE ("ownerId"), CONSTRAINT "PK_c0911b1d44db6cdd303c6d6afc9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" BIGSERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "dogs" ADD CONSTRAINT "FK_1661fdbf2ed1ae0d748307e0e01" FOREIGN KEY ("ownerId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dogs" DROP CONSTRAINT "FK_1661fdbf2ed1ae0d748307e0e01"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "dogs"`);
        await queryRunner.query(`DROP TABLE "person"`);
        await queryRunner.query(`DROP TABLE "actor"`);
    }

}

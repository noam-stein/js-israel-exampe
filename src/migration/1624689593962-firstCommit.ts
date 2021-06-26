import {MigrationInterface, QueryRunner} from "typeorm";

export class firstCommit1624689593962 implements MigrationInterface {
    name = 'firstCommit1624689593962'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "country" ("id" BIGSERIAL NOT NULL, CONSTRAINT "PK_bf6e37c231c4f4ea56dcd887269" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "city" ("id" BIGSERIAL NOT NULL, "countryId" bigint, CONSTRAINT "PK_b222f51ce26f7e5ca86944a6739" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "street" ("id" BIGSERIAL NOT NULL, "name" character varying NOT NULL, "cityId" bigint, CONSTRAINT "PK_5629a676c74c04f5845b964469c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "city" ADD CONSTRAINT "FK_990b8a57ab901cb812e2b52fcf0" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "street" ADD CONSTRAINT "FK_63e77aa35e560f5b1615f149a7f" FOREIGN KEY ("cityId") REFERENCES "city"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "street" DROP CONSTRAINT "FK_63e77aa35e560f5b1615f149a7f"`);
        await queryRunner.query(`ALTER TABLE "city" DROP CONSTRAINT "FK_990b8a57ab901cb812e2b52fcf0"`);
        await queryRunner.query(`DROP TABLE "street"`);
        await queryRunner.query(`DROP TABLE "city"`);
        await queryRunner.query(`DROP TABLE "country"`);
    }

}

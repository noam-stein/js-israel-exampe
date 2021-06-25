import {MigrationInterface, QueryRunner} from "typeorm";

export class firstCommit1624622720719 implements MigrationInterface {
    name = 'firstCommit1624622720719'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" BIGSERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dog" ("id" BIGSERIAL NOT NULL, "usersId" bigint, CONSTRAINT "REL_3d36240f3671c1e35f70dbff5c" UNIQUE ("usersId"), CONSTRAINT "PK_187826f37fd8e592a5711350db1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "dog" ADD CONSTRAINT "FK_3d36240f3671c1e35f70dbff5c1" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dog" DROP CONSTRAINT "FK_3d36240f3671c1e35f70dbff5c1"`);
        await queryRunner.query(`DROP TABLE "dog"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class firstCommit1624622649528 implements MigrationInterface {
    name = 'firstCommit1624622649528'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dog" DROP CONSTRAINT "FK_3d36240f3671c1e35f70dbff5c1"`);
        await queryRunner.query(`CREATE SEQUENCE "users_id_seq" OWNED BY "users"."id"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT nextval('users_id_seq')`);
        await queryRunner.query(`ALTER TABLE "dog" ADD CONSTRAINT "FK_3d36240f3671c1e35f70dbff5c1" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dog" DROP CONSTRAINT "FK_3d36240f3671c1e35f70dbff5c1"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "users_id_seq"`);
        await queryRunner.query(`ALTER TABLE "dog" ADD CONSTRAINT "FK_3d36240f3671c1e35f70dbff5c1" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}

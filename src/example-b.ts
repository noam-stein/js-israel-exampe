import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import { Actor } from "./entity/Actor";

let connection: Connection;

async function main() {
  connection = await createConnection();
  await buildJohnnyDepp();
}

async function buildJohnnyDepp() {
  const queryRunner = connection.createQueryRunner();
  await queryRunner.startTransaction();
  let actor = new Actor();
  actor.firstName = "Johnny";
  actor.lastName = "Depp";
  await addMovies(actor);
  await queryRunner.manager.save(actor);
  await queryRunner.commitTransaction();
  await queryRunner.release();
}

async function addMovies(actor: Actor) {
  actor.movies = await getMovieFromIMDB(actor.firstName, actor.lastName);
  await connection.manager.save(actor);
}

async function getMovieFromIMDB(firstName: string, lastName: string) {
  return ["1", "2"];
}

main().then();

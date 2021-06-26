import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import { Dog } from "./entity/Dog";
import { Person } from "./entity/Person ";
import { Users } from "./entity/User";

let connection: Connection;

async function main() {
  connection = await createConnection();
  await start();
  await connection.close();
}

async function start() {
  const dog = new Dog();
  const person = new Person();
  person.dog = dog;
  await connection.manager.save(person);
}

main();

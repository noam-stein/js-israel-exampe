import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import { Dog } from "./entity/Dog";
import { Person } from "./entity/Person ";
import { Users } from "./entity/User";

let connection: Connection;

async function main() {
  connection = await createConnection();
  await start();

  const person = await connection
    .getRepository(Person)
    .findOne({ where: { id: 1 }, relations: ["fog"] });

  await connection.close();
}

async function start() {
  const person = new Person();
  await connection.manager.save(person);

  let dog = new Dog();
  dog.owner = person;
  await connection.manager.save(dog);
}

main();

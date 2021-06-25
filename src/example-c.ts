import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import { Users } from "./entity/User";

let connection: Connection;

async function main() {
  connection = await createConnection();
  await createGameOfThronesUsers();
  await connection.close();
}

async function createGameOfThronesUsers() {
  for (const userInfo of [
    ["Robert", "Baratheon"],
    ["Jaime", "Lannister"],
    ["Catelyn", "Stark"],
    ["Cersei", "Lannister"],
    ["Daenerys", "Targaryen"],
    ["Jorah", "Mormont"],
    ["Viserys", "Targaryen"],
    ["Robb", "Stark"],
    ["Sansa", "Stark"],
    ["Arya", "Stark"],
    ["Theon", "Greyjoy"],
  ]) {
    await createUser(userInfo[0], userInfo[1]);
    console.log(`will create ${userInfo[0]}-${userInfo[1]}`);
  }
}

async function createUser(firstName: string, lastName: string) {
  const queryRunner = connection.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();
  const user = new Users();
  user.firstName = firstName;
  user.lastName = lastName;
  await queryRunner.manager.save(user);
  await queryRunner.commitTransaction();
}

main();

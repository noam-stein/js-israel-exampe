import "reflect-metadata";
import { createConnection } from "typeorm";
import { Users } from "./entity/User";

createConnection()
  .then(async (connection) => {
    let user = new Users();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    user = await connection.manager.save(user);
    console.log(`The ID type is "${typeof user.id}"`);
  })
  .catch((error) => console.log(error));

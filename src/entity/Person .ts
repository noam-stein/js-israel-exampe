import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Dog as Dog } from "./Dog";

@Entity()
export class Person {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id: number;

  @OneToOne(() => Dog)
  dog: Dog;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Person } from "./Person ";

@Entity()
export class Dog {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id: number;

  @OneToOne(() => Person)
  @JoinColumn()
  owner: Person;
}

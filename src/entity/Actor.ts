import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Actor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column('text',{array: true, nullable: true})
  movies: string[];
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  OneToOne,
} from "typeorm";

@Entity()
export class Country {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id: number;

  @OneToMany(() => City, (city) => city.country)
  cities: City[];
}

@Entity()
export class City {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id: number;

  @ManyToOne(() => Country, (country) => country.cities)
  country: Country;

  @OneToMany(() => Street, (street) => street.city)
  streets: Street[];
}

@Entity()
export class Street {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => City, (city) => city.streets)
  city: City;
}

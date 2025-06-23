import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Country } from "./country.entity";

@Entity({ name: "continents" })
export class Continent {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => Country, (country) => country.continent)
    countries: Country[];
}

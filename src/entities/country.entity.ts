import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Continent } from "./continent.entity";

@Entity({ name: "countries" })
export class Country {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    code: string;

    @Column({ unique: true })
    name: string;

    @ManyToOne(() => Continent, (continent) => continent.countries)
    continent: Continent;
}

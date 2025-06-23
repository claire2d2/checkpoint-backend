import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Continent } from "./continent.entity";

@Entity({ name: "countries" })
export class Country {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    code: string;

    @Column({ unique: true })
    name: string;

    @Column()
    emoji: string;

    @ManyToOne(() => Continent, (continent) => continent.countries)
    continent: Continent;
}

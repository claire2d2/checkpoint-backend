import dataSource from "../lib/datasource";
import { Continent } from "../entities/continent.entity";

export class ContinentService {
    continentRepository = dataSource.getRepository(Continent);

    async findCountriesByContinent(id: number) {
        return this.continentRepository.findOne({
            where: { id },
            relations: ["countries"],
        });
    }
}

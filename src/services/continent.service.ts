import dataSource from "../lib/datasource";
import { Continent } from "../entities/continent.entity";

export default class ContinentService {
    continentRepository = dataSource.getRepository(Continent);

    async createContinent(data: Continent) {
        return this.continentRepository.save(data);
    }

    async listContinents() {
        const result = await this.continentRepository.find({
            relations: ["countries"],
        });
        return result;
    }

    async findById(id: string) {
        return this.continentRepository.findOne({
            where: { id },
            relations: ["countries"],
        });
    }

    async findCountriesByContinent(id: string) {
        const continent = await this.continentRepository.findOne({
            where: { id },
            relations: ["countries"],
        });
        return continent ? continent.countries : [];
    }
}

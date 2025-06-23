import dataSource from "../lib/datasource";
import { Country } from "../entities/country.entity";
import ContinentService from "./continent.service";

export default class CountryService {
    countryRepository = dataSource.getRepository(Country);

    async countries() {
        const result = await this.countryRepository.find({
            relations: ["continent"],
        });
        return result;
    }

    async findCountryByCode(code: string) {
        return this.countryRepository.findOne({
            where: { code },
            relations: ["continent"],
        });
    }

    async addCountry(data: Country, continent_id: string) {
        const continent = await new ContinentService().findById(continent_id);
        if (!continent) {
            throw new Error("Continent not found");
        }

        const country = this.countryRepository.create({
            ...data,
            continent,
        });
        return this.countryRepository.save(country);
    }
}

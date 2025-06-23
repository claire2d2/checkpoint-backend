import dataSource from "../lib/datasource";
import { Country } from "../entities/country.entity";

export class CountryService {
    countryRepository = dataSource.getRepository(Country);

    async countries() {
        return this.countryRepository.find();
    }

    async findCountryByCode(code: string) {
        return this.countryRepository.findOne({ where: { code } });
    }
}

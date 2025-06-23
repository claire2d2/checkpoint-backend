import dataSource from "./datasource";
import { Country } from "../entities/country.entity";
import { Continent } from "../entities/continent.entity";

export const continentFixtures = [
    { name: "Amérique du Nord" },
    { name: "Amérique du Sud" },
    { name: "Europe" },
    { name: "Asie" },
    { name: "Afrique" },
    { name: "Océanie" },
];

export const countryFixtures = [
    // North America
    {
        code: "US",
        name: "États-Unis",
        emoji: "🇺🇸",
        continentName: "Amérique du Nord",
    },
    {
        code: "MX",
        name: "Mexique",
        emoji: "🇲🇽",
        continentName: "Amérique du Nord",
    },
    {
        code: "BR",
        name: "Brésil",
        emoji: "🇧🇷",
        continentName: "Amérique du Sud",
    },
    { code: "FR", name: "France", emoji: "🇫🇷", continentName: "Europe" },
    { code: "DE", name: "Allemagne", emoji: "🇩🇪", continentName: "Europe" },
    { code: "CN", name: "Chine", emoji: "🇨🇳", continentName: "Asie" },
    { code: "JP", name: "Japon", emoji: "🇯🇵", continentName: "Asie" },
    {
        code: "ZA",
        name: "Afrique du Sud",
        emoji: "🇿🇦",
        continentName: "Afrique",
    },
    { code: "AU", name: "Australie", emoji: "🇦🇺", continentName: "Océanie" },
    {
        code: "NZ",
        name: "Nouvelle-Zélande",
        emoji: "🇳🇿",
        continentName: "Océanie",
    },
];

export async function seedDatabase() {
    try {
        if (!dataSource.isInitialized) {
            await dataSource.initialize();
        }

        const continentRepository = dataSource.getRepository(Continent);
        const countryRepository = dataSource.getRepository(Country);

        await countryRepository.clear();
        await continentRepository.clear();
        const continents = await continentRepository.save(continentFixtures);
        const countries = [];

        for (const countryData of countryFixtures) {
            const continent = continents.find(
                (c) => c.name === countryData.continentName
            );
            if (continent) {
                const country = countryRepository.create({
                    code: countryData.code,
                    name: countryData.name,
                    emoji: countryData.emoji,
                    continent: continent,
                });
                countries.push(country);
            }
        }

        await countryRepository.save(countries);
    } catch (error) {
        throw error;
    }
}

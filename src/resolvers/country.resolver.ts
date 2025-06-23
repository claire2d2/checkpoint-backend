import { CountryService } from "../services/country.service";

export default {
    Query: {
        countries: async () => {
            return new CountryService().countries();
        },
        findCountryByCode: async (_, { code }: { code: string }) => {
            return new CountryService().findCountryByCode(code);
        },
    },
};

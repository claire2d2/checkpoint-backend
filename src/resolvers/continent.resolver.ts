import ContinentService from "../services/continent.service";

export default {
    Query: {
        continents: async () => {
            return new ContinentService().listContinents();
        },
        findCountriesByContinent: async (_: any, { id }: { id: string }) => {
            return new ContinentService().findCountriesByContinent(id);
        },
    },
};

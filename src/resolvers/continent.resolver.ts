import { ContinentService } from "../services/continent.service";

export default {
    Query: {
        findCountriesByContinent: async (_: any, { id }: { id: number }) => {
            return new ContinentService().findCountriesByContinent(id);
        },
    },
};

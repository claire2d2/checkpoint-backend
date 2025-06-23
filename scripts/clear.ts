import "reflect-metadata";
import { clearDatabase } from "../src/lib/fixtures";

async function runClear() {
    try {
        await clearDatabase();
    } catch (error) {
        return error;
    }
}

runClear();

import "reflect-metadata";
import { seedDatabase } from "../src/lib/fixtures";

async function runSeed() {
    try {
        await seedDatabase();
    } catch (error) {
        console.error("Failed to seed database:", error);
        return error;
    }
}

runSeed();

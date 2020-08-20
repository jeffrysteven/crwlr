import { config } from "dotenv";

config();

const { HOST, MONGO_DB, MONGO_URI, NAME, PORT } = process.env;

export {
    HOST,
    MONGO_DB,
    MONGO_URI,
    NAME,
    PORT,
}
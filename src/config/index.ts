import { config } from "dotenv";

config();

const { HOST, NAME, PORT } = process.env;

export {
    HOST,
    NAME,
    PORT
}
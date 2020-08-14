import { Server } from '@hapi/hapi';
import { HOST, NAME, PORT } from "./config";

const init = async () => {
    const apiServer: Server = new Server({
        port: PORT,
        host: HOST,
    });
    try {
        await apiServer.start();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
    console.log(`${NAME} running on %s`, apiServer.info.uri);
};

init();

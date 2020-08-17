import { Server } from '@hapi/hapi';
import { HOST, NAME, PORT } from './config';
import { connectDB } from './dbConnection';

const init = async () => {
    const apiServer: Server = new Server({
        port: PORT,
        host: HOST,
    });
    try {
        await connectDB();
        apiServer.route(require('./routes'));
        await apiServer.start();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
    console.log(`${NAME} running on %s`, apiServer.info.uri);
};

init();

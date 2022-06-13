import express, { Application } from "express";
import cors from "cors";

class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';

        this.middlewares();
    }

    private middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    /**
     * RESTSERVER LISTEN ON LOCALHOST
     */
    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Server run on http://localhost:${this.port}/`);
        });
    }
};

export default Server;
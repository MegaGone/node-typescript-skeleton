// Dependencies
import express, { Application } from "express";
import cors from "cors";

import { UserRoutes } from "../routes";

class Server {

    private app: Application;
    private port: string;
    private paths = {
        users: '/api/users'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';

        this.middlewares();
        this.routes();
    }

    /**
     * INIT THE MIDDLEWARES
     */
    private middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    /**
     * INIT ROUTES
     */
    private routes() {
        this.app.use(this.paths.users, UserRoutes.default);
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
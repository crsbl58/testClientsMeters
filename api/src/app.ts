import path from 'path';
import express from "express";
import cors from "cors";
import * as routes from "./routes";

const createAppServer = () => {
    const server = express();

    const middlewares = () => {
        server.use(express.json());
        server.use(cors());
        server.use('*', cors());
        server.use(express.urlencoded({ extended: false }));
    };

    const routesConfig = () => {
        server.use("/api/clients", routes.clientsRouter);
        server.use("/api/meters", routes.metersRouter);
    };

    middlewares();
    routesConfig();

    return server;
};

export default createAppServer();
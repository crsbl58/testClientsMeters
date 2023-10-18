
import { Router } from "express";
import {
    getAllClients,
    insertClients,
    updateClients,
    deleteClients,
} from "../controllers/clients";

const clientsRouter = Router();

clientsRouter.get("/getAllClients", getAllClients);
clientsRouter.post("/insertClients", insertClients);
clientsRouter.put("/updateClients", updateClients);
clientsRouter.delete("/deleteClients/:rut", deleteClients);

export default clientsRouter;
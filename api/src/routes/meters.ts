
import { Router } from "express";
import {
    getAllMeters,
    insertMeters,
    updateMeters,
    deleteMeters,
} from "../controllers/meters";

const metersRouter = Router();

metersRouter.get("/getAllMeters/:rut", getAllMeters);
metersRouter.post("/insertMeters", insertMeters);
metersRouter.put("/updateMeters", updateMeters);
metersRouter.delete("/deleteMeters/:code/:rut", deleteMeters);

export default metersRouter;
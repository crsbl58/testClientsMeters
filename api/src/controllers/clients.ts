import * as clients from "../models/clients";

const getAllClients = async (req: any, res: any) => {
    try {
        const result = await clients.getAllClients();
        res.status(200).json({
            ...result
        });
    } catch (error) {
        console.log(error)
        res.status(200).json({
            error: true
        });
    }
}

const insertClients = async (req: any, res: any) => {
    try {
        const {
            rut,
            name,
            address,
        } = req.body;

        const result = await clients.insertClients(rut, name, address);
        res.status(200).json({
            ...result
        });
    } catch (error) {
        console.log(error)
        res.status(200).json({
            error: true
        });
    }
}

const updateClients = async (req: any, res: any) => {
    try {
        const {
            rut,
            name,
            address, } = req.body;
        const result = await clients.updateClients(
            rut,
            name,
            address,);
        res.status(200).json({
            ...result
        });
    } catch (error) {
        console.log(error)
        res.status(200).json({
            error: true
        });
    }
}

const deleteClients = async (req: any, res: any) => {
    try {
        const { rut } = req.params;
        console.log(rut,'controller')
        const result = await clients.deleteClients(rut);
        res.status(200).json({
            ...result
        });
    } catch (error) {
        console.log(error)
        res.status(200).json({
            error: true
        });
    }
}

export {
    getAllClients,
    insertClients,
    updateClients,
    deleteClients,
};
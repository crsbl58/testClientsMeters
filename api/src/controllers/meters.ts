import * as meters from "../models/meters";

const getAllMeters = async (req: any, res: any) => {
    try {
        const { rut } = req.params;
        console.log(rut, 'rrrrr');
        const result = await meters.getAllMeters(rut);
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

const insertMeters = async (req: any, res: any) => {
    try {
        const {
            code,
            name,
            description,
            rutClient
        } = req.body;

        const result = await meters.insertMeters(
            code,
            name,
            description,
            rutClient
        );
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

const updateMeters = async (req: any, res: any) => {
    try {
        const {
            code,
            name,
            description,
            rutCurrent
        } = req.body;

        const result = await meters.updateMeters(
            code,
            name,
            description,
            rutCurrent
        );
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

const deleteMeters = async (req: any, res: any) => {
    try {
        const { code, rut } = req.params;
        const result = await meters.deleteMeters(code, rut);
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
    getAllMeters,
    insertMeters,
    updateMeters,
    deleteMeters,
};
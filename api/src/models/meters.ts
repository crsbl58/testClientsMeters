import db from "../utils/db";
import {
    _getAllMeters,
    _insertMeters,
    _updateMeters,
    _deleteMeters

} from "../queries/meters";

const getAllMeters: any = async (rut: string) => {
    try {
        const { rows } = await db.query(_getAllMeters(rut));
        return {
            rows
        };
    } catch (error) {
        console.log(error)
        return {
            error: true,
        };
    }
};

const insertMeters: any = async (
    code: string,
    name: string,
    description: string,
    rutClient: string
) => {
    try {

        const insert = await db.query(_insertMeters(
            code,
            name,
            description,
            rutClient
        ),
        );
        const { rows } = await db.query(_getAllMeters(rutClient));

        return {
            rows
        };
    } catch (error) {
        console.log(error)
        return {
            error: true,
        };
    }
};

const updateMeters: any = async (
    code: string,
    name: string,
    description: string,
    rutCurrent: string
) => {
    try {
        const update = await db.query(_updateMeters(
            code,
            name,
            description));
        const { rows } = await db.query(_getAllMeters(rutCurrent));

        return {
            rows,
        };
    } catch (error) {
        console.log(error)
        return {
            error: true,
        };
    }
};

const deleteMeters: any = async (code: string, rut: string) => {
    try {
        const deleteMeters = await db.query(_deleteMeters(code));
        const { rows } = await db.query(_getAllMeters(rut));

        return {
            rows
        };
    } catch (error) {
        console.log(error)
        return {
            error: true,
        };
    }

};

export {
    getAllMeters,
    insertMeters,
    updateMeters,
    deleteMeters,
};

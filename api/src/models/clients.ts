import db from "../utils/db";
import {
    _getAllClients,
    _insertClients,
    _updateClients,
    _deleteClients

} from "../queries/clients";
import { _deleteAllMeters } from "../queries/meters";

const getAllClients: any = async () => {
    try {
        const { rows } = await db.query(_getAllClients);
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

const insertClients: any = async (
    rut: string,
    name: string,
    address: string,
) => {
    try {
        const insert = await db.query(_insertClients(
            rut,
            name,
            address,),
        );
        const { rows } = await db.query(_getAllClients);

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

const updateClients: any = async (
    rut: string,
    name: string,
    address: string
) => {
    try {
        const update = await db.query(_updateClients(
            rut,
            name,
            address));
        const { rows } = await db.query(_getAllClients);

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

const deleteClients: any = async (rut: string) => {
    try {
        console.log('deleteeeeee', rut)
        const deleteClient = await db.query(_deleteClients(rut));

        const deleteMeters = await db.query(_deleteAllMeters(rut));

        const { rows } = await db.query(_getAllClients);

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
    getAllClients,
    insertClients,
    updateClients,
    deleteClients,
};

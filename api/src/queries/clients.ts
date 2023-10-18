
const _getAllClients = `
        SELECT
        clients.rut,
        clients.name,
        clients.address,
        COUNT(meters.rutclient) AS meterscount
        FROM 
            clients
        LEFT JOIN
            meters ON clients.rut = meters.rutclient
        GROUP BY
            clients.rut, clients.name
        ;
        `;

const _insertClients = (rut: string, name: string, address: string) => {
    return `
    INSERT INTO 
        clients(rut, name, address) 
    VALUES 
        ('${rut}', '${name}', '${address}');`
};

const _updateClients = (rut: string, name: string, address: string) => {
    return `
    UPDATE 
        clients 
    SET 
        name = '${name}',
        address = '${address}'
    WHERE 
        clients.rut = '${rut}'`
};

const _deleteClients = (rut: string) => {
    return `
        DELETE
        FROM
            clients
        WHERE 
            clients.rut = '${rut}'`
};

export {
    _getAllClients,
    _insertClients,
    _updateClients,
    _deleteClients,
};
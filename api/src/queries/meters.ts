
const _getAllMeters = (rut: string) => {

    return `
        SELECT*
        FROM 
            meters
        WHERE
            meters.rutclient = '${rut}';
        ; 
        `};

const _insertMeters = (
    code: string,
    name: string,
    description: string,
    rutClient: string
) => {

    return `
    INSERT INTO 
        meters(code, name, date,  description, rutclient) 
    VALUES 
        ('${code}', '${name}', CURRENT_DATE, '${description}' ,'${rutClient}');`
};

const _updateMeters = (
    code: string,
    name: string,
    description: string
) => {
    return `
    UPDATE 
        meters 
    SET 
        name = '${name}',
        description = '${description}'
    WHERE 
        meters.code = '${code}'`
};

const _deleteMeters = (code: string) => {
    return `
        DELETE
        FROM
            meters
        WHERE 
            meters.code = '${code}'`
};

const _deleteAllMeters = (rut: string) => {
    return `
        DELETE
        FROM
            meters
        WHERE 
            meters.rutClient = '${rut}'`
};

export {
    _getAllMeters,
    _insertMeters,
    _updateMeters,
    _deleteMeters,
    _deleteAllMeters
};
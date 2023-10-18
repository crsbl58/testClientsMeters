import { Pool } from "pg";
import config from "./config";

const pool = new Pool({
  user: config.dbUser,
  host: config.dbHost,
  database: config.dbName,
  password: config.dbPassword,
  port: config.dbPort,
  max: config.dbConnectionLimit, // Número máximo de conexiones en el grupo de conexiones
});

pool
  .connect()
  .then((client:any) => {
    console.log("Conectado a la base de datos PostgreSQL");
  })
  .catch((err:any) => {
    console.error("Error al conectar a la base de datos PostgreSQL", err);
  });

export default pool;

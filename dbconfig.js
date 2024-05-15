import oracledb from "oracledb";
import * as dotenv from "dotenv";
import pg from "pg";
import { Sequelize } from "sequelize";

oracledb.initOracleClient();
dotenv.config();
const setConfig = (env) => {
  switch (env) {
    case "dev":
      return {
        username: process.env.CONNECTION_PG_USER,
        password: process.env.CONNECTION_PG_PASS,
        database: process.env.CONNECTION_PG_DATABASE,
        host: process.env.CONNECTION_PG_HOST,
        port: process.env.CONNECTION_FARMA_WEB_PORT,
      };

    case "local":
      return {
        username: process.env.CONNECTION_FARMA_WEB_USER,
        password: process.env.CONNECTION_FARMA_WEB_PASS,
        database: process.env.CONNECTION_FARMA_WEB_DATABASE,
        host: process.env.CONNECTION_FARMA_WEB_HOST,
        port: process.env.CONNECTION_FARMA_WEB_PORT,
        dialect: "postgres",
      };
    case "prod":
      break;
    default:
      break;
  }
};
const sequelizeConnection = new Sequelize(setConfig("local"));
try {
  await sequelizeConnection.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  //console.log(error);
  console.error("Unable to connect to the database:", error);
} /*
const connectionDataPG = {
  user: process.env.CONNECTION_FARMA_WEB_USER,
  host: process.env.CONNECTION_FARMA_WEB_HOST,
  database: process.env.CONNECTION_FARMA_WEB_DATABASE,
  password: process.env.CONNECTION_FARMA_WEB_PASS,
  port: process.env.CONNECTION_FARMA_WEB_PORT,
  ssl: false,
};
const clientPG = new pg.Client(connectionDataPG);
*/
const connections = [
  {
    connectionName: "Nomina",
    user: process.env.CONECTION_NAME_XXFAH_INTERFACE_USER,
    password: process.env.CONECTION_NAME_XXFAH_INTERFACE_PASS,
    connectString: process.env.CONECTION_NAME_XXFAH_INTERFACE_CONNECTIONSTRING,
  },
];

async function Open(sql, binds, options) {
  let connection;
  try {
    connection = await oracledb.getConnection(connections[0]);
    const result = await connection.execute(sql, binds, options);
    return result;
  } finally {
    if (connection) {
      connection.close();
    }
  }
}

export default Open;
export { sequelizeConnection };

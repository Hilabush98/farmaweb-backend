import oracledb from 'oracledb';
import * as dotenv from 'dotenv';
import pg from 'pg';
 import { Sequelize } from 'sequelize';

oracledb.initOracleClient();
dotenv.config()
const sequelizeConnection = new Sequelize({
    username:process.env.CONECTION_FARMA_WEB_USER,
    password:process.env.CONECTION_FARMA_WEB_PASS,
    database: process.env.CONECTION_FARMA_WEB_DATABASE,
    host:process.env.CONECTION_FARMA_WEB_HOST,
    port: process.env.CONECTION_FARMA_WEB_PORT,
    dialect:'postgres',
})



const connectionDataPG={
  user:process.env.CONECTION_FARMA_WEB_USER,
  host:process.env.CONECTION_FARMA_WEB_HOST,
  database:process.env.CONECTION_FARMA_WEB_DATABASE,
  password:process.env.CONECTION_FARMA_WEB_PASS,
  port:process.env.CONECTION_FARMA_WEB_PORT
}
const clientPG = new pg.Client(connectionDataPG)


const connections=[{
    connectionName: 'Nomina',
    user: process.env.CONECTION_NAME_XXFAH_INTERFACE_USER,    
    password: process.env.CONECTION_NAME_XXFAH_INTERFACE_PASS,
    connectString: process.env.CONECTION_NAME_XXFAH_INTERFACE_CONNECTIONSTRING 
}];



async function  Open(sql, binds, options)  {
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
export {sequelizeConnection}

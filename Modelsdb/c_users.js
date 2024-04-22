import { DataTypes } from "sequelize";
import {sequelizeConnection} from '../dbconfig.js';

const cUsers = sequelizeConnection.define(
    'cUsers',
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull:true,
        primaryKey:true
      },
      profile_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_name:{
        type:DataTypes.STRING,
        allowNull:true
      },
      is_active:{
        type:DataTypes.STRING,
        allowNull:true,

      } 
    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'c_users'
    }

  );
  export {cUsers};
import { DataTypes } from "sequelize";
import {sequelizeConnection} from '../dbconfig.js';

const rProfilesTools = sequelizeConnection.define(
    'rProfilesTools',
    {
      profile_id: {
        type: DataTypes.INTEGER,
        allowNull:true,
        primaryKey:true
      },
      tool_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      is_active:{
        type:DataTypes.INTEGER,
        allowNull:true,
        defaultValue:1
      },
      created_by:{
        type:DataTypes.STRING,
        allowNull:true
      },
      modified_by:{
        type:DataTypes.STRING,
        allowNull:true
      },
      created_on:{
        type:DataTypes.DATE,
        allowNull:true,
        defaultValue:DataTypes.NOW
      },
      modified_on:{
        type:DataTypes.DATE,
        allowNull:true
      }
    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'r_profiles_tools'
    }

  );
  export {rProfilesTools};
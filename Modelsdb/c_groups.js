import { DataTypes } from "sequelize";
import {sequelizeConnection} from '../dbconfig.js';

const cGroups = sequelizeConnection.define(
    'cGroups',
    {
      group_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
      },
      profile_id:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      name:{
        type:DataTypes.STRING,
        allowNull:true
      },
      description:{
        type:DataTypes.STRING,
        allowNull:true
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
      },
      is_active:{
        type:DataTypes.SMALLINT,
        allowNull:true,
        defaultValue:1
      },
    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'c_groups'
    }

  );
  export {cGroups};
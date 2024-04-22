import { DataTypes } from "sequelize";
import {sequelizeConnection} from '../dbconfig.js';

const cProfiles = sequelizeConnection.define(
    'cProfiles',
    {
      profile_id: {
        type: DataTypes.INTEGER,
        allowNull:true,
        primaryKey:true
      },
      name:{
        type:DataTypes.STRING,
        allowNull:true
      },
      description:{
        type:DataTypes.STRING,
        allowNull:true
      },
      order_by: {
        type: DataTypes.SMALLINT,
        allowNull: false,
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
        tableName: 'c_profiles'
    }

  );
  export {cProfiles};
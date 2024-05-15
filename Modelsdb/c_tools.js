import { DataTypes } from "sequelize";
import { sequelizeConnection } from "../dbconfig.js";

const cTools = sequelizeConnection.define(
  "cTools",
  {
    tool_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    tool_id_father: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    order_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    modified_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created_on: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    modified_on: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_active: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
    },
    configuration: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    tableName: "c_tools",
  }
);
export { cTools };

import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define('users',{
  name:{
    type: DataTypes.STRING
  },
  email:{
    type: DataTypes.STRING
  },
  password:{
    type: DataTypes.STRING
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY
  },
  node: {
    type: DataTypes.BOOLEAN
  },
  react: {
    type: DataTypes.BOOLEAN
  },
  sql: {
    type: DataTypes.BOOLEAN
  },
  nonSql: {
    type: DataTypes.BOOLEAN
  },
  refresh_token:{
    type: DataTypes.TEXT
  }
}, {
  freezeTableName:true
});

export default Users;
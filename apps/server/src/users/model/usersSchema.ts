import { DataTypes } from "sequelize";
import dataBase from "../../db/connectionDB";

const Users = dataBase.define('Users', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      
    }
  }, {
schema: 'users'
  });

  export default Users


  
import { Sequelize, DataTypes, Model } from 'sequelize';
import { dataBase } from '../db/dbConnection';

interface UserAttributes {
  email: string;
  password: string;
}

interface UserModel extends Model<UserAttributes>, UserAttributes {}


const Users = dataBase.define<UserModel>('users', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'users', 
});

export const createUsersTable = async () => {
  try {
    await Users.sync().then(() => {
      console.log('users created successfully');
    });
  } catch (error) {
    console.log('Unable to create: users');
    return Promise.reject(error);
  }
};

export default Users;

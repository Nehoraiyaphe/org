import { DataTypes, Model } from 'sequelize';
import { dataBase } from '../db/dbConnection';

export interface UserAttributes {
  email: string;
  password: string;
}

const Users = dataBase.define<
  Model<UserAttributes & { perfer_location: string[] }, UserAttributes>
>(
  'users',
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    perfer_location: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
  },
  {
    tableName: 'users',
  }
);

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
// <
//   Model<
//     UserAttributes ,
//     UserAttributes & {
//       createdAt: string;
//       updatedAt: string;
//       perfer_location: string[];
//     }
//   >
// >

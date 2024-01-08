import { compare, hash } from 'bcrypt';
import Users from '../../model/usersModel';
import users from '../../model/usersModel';
import { UserTipe } from '../../types/type';

export const userSignIn = async (user: UserTipe) => {
  try {
    const existingUser = await Users.findOne({ where: { email: user.email } });
    if (existingUser) {
      console.error('Invalid creadentials');
      throw new Error('Invalid creadentials');
    }
    const newUser = await users.create(user);
    user.password = await hash(user.password, 10);
    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const userLogin = async ({ email, password }: UserTipe) => {
  try {
    const user = await Users.findOne({ where: { email: email } });
    if (!user) {
      console.error('Invalid creadentials');
      throw new Error('Invalid creadentials');
    }
    const comper = await compare(password, user.password);
    if (!comper) throw new Error('Invalid password');
    return user
    
  } catch (error) {
    console.log(error);
    throw error;
  }
};

import { compare, hash } from 'bcrypt';
import Users from '../../model/usersModel';
import { UserType } from '../../types/type';
import { generateToken } from '../../main';

export const userSignIn = async (user: UserType) => {
  try {
    const existingUser = await Users.findOne({ where: { email: user.email } });
    if (existingUser) {
      console.error('User with this email already exists');
      throw new Error('User with this email already exists');
    }

    user.password = await hash(user.password, 10);
    const newUser = await Users.create(user);

    return newUser;
    
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const userLogin = async ({ email, password }: UserType) => {
  try {
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      console.error('User not found');
      throw new Error('Invalid credentials');
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      console.error('Invalid password');
      throw new Error('Invalid credentials');
    }
    const token = generateToken({email: user.email, password: user.password})
    return token;
    
  } catch (error) {
    console.error(error);
    throw error;
  }
};

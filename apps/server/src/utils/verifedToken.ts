import { TRPCError } from '@trpc/server';
import jwt, { JwtPayload } from 'jsonwebtoken';
import Users from '../model/usersModel';
import {UserAttributes} from '../model/usersModel'




export const verified = async ({ ctx, next }) => {
  const { req } = ctx;
  const token = req.headers.authorization;




  
  if (!token) throw new TRPCError({ code: 'UNAUTHORIZED' });

  const tokenObj = jwt.verify(
    token,
    'secretKey038dsjhc@!$#'
  ) as JwtPayload;


    const user = (await Users.findOne({
      where: { email: tokenObj.email },
      raw: true,
    }))
    if (!user) throw new TRPCError({ code: 'UNAUTHORIZED' });

    if (user.password !== tokenObj.password)
      throw new TRPCError({ code: 'UNAUTHORIZED' });
 

  return next();
};
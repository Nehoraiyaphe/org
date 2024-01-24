import { privateProcedure, publicProcedure, router } from '../../trpc/initTrpc';
import { deleteFavorite, userLogin, userSignIn } from '../dal/usersDAL';
import z from 'zod';
import jwt, { JwtPayload } from 'jsonwebtoken'

const usersRouter = router({
  SignIn: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async (ops) => {
      const { email, password } = ops.input;
      const newUser = await userSignIn({ email, password });
      return newUser;
    }),

  login: publicProcedure
  .input(z.object({ email: z.string(), password: z.string() }))
  
  .query(async (ops) => {
    const { email, password } = ops.input;
    const logInUser = await userLogin({ email, password });
    return logInUser;
  }),
  
    deleteFavorite: privateProcedure
    .input(z.object({ token: z.string(), locationToRemove: z.string() }))
    .mutation(async ( ops ) => {

      const { token, locationToRemove } = ops.input
      const tokenObj = jwt.verify(
        token,
        'secretKey038dsjhc@!$#'
      ) as JwtPayload;
  console.log(token, locationToRemove);
  
      try {
        const delete1 = await deleteFavorite(tokenObj.email, locationToRemove);
        return delete1;
      } catch (error) {
        return { success: false, message: `Failed to delete favorite: ${error.message}` };
      }
    }),
});

export default usersRouter;

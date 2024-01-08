import { publicProcedure, router } from '../../trpc/initTrpc';
import { userLogin, userSignIn } from '../dal/usersDAL';
import z from 'zod';

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
  })
});

export default usersRouter;

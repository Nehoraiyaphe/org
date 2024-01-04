import { publicProcedure, router } from '../../trpc/initTrpc';
 
const usersRouter = router({
  hello: publicProcedure.query(() => 'hello tRPC v10!'),
});

export default usersRouter
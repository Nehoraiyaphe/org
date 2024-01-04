import { publicProcedure, router } from '../trpc/initTrpc';
import usersRouter from '../users/routes/usersRouter';
 
const appRouter = router({
  users: usersRouter
})

export type AppRouter = typeof appRouter
export default appRouter
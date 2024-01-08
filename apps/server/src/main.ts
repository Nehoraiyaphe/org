import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';
import appRouter from './router/appRouter';
``;
import connectionDB from './db/dbConnection';
import { createUsersTable } from './model/usersModel';
import { error } from 'console';

const httpServer = createHTTPServer({
  router: appRouter,
  middleware: cors(),
});

httpServer.listen(3000);

httpServer.server.on('listening', () => {
  console.log('tRPC server is listening on port 3000');
  connectionDB()
    .then((res) => {
      createUsersTable()
        .then(() => console.log('table users created seccefully'))
        .catch((error) => console.error('unable to create table users'));
      console.log(res);
    })
    .catch((error) => console.log(error));
});

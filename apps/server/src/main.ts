import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';
import appRouter from './router/appRouter';
import connectionDB from './db/dbConnection';
import { createUsersTable } from './model/usersModel';
import jwt from 'jsonwebtoken'
import { createContext } from './trpc/initTrpc';

const httpServer = createHTTPServer({
  router: appRouter,
  middleware: cors(),
  createContext,
});


export const generateToken = (emailAmdPass) => {
  const token = jwt.sign(emailAmdPass, 'secretKey038dsjhc@!$#');
  console.log(token);
return token
};

export const verifyToken = (token:string) => {
  const emailAmdPass = jwt.verify(token, 'secretKey038dsjhc@!$#')
  return emailAmdPass
}

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

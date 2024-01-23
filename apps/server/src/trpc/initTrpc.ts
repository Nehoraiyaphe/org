// src/trpc.ts
import { initTRPC } from '@trpc/server';
import { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { verified } from '../utils/verifedToken';



export const createContext = (_ops: CreateNextContextOptions) => {
    const { req, res } = _ops;
    return { req, res };
};

const t = initTRPC.context<typeof createContext>().create();


export const verifiedToken = t.middleware(verified);

export const privateProcedure = t.procedure.use(verifiedToken);





export const router = t.router;
export const publicProcedure = t.procedure
// export const mergeRouters = t.mergeRouters;
export const middleware = t.middleware

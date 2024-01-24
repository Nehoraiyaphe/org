import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../../../../server/src/router/appRouter';

const tRPCclient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/',
      headers() {
        return { Authorization: String(localStorage.getItem('TOKEN')) };
      },
    }),
  ],
});

export default tRPCclient;

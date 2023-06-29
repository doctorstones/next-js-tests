import { stackMiddlewares } from './middlewares/stackMiddlewares';
import { withConsole1 } from './middlewares/withConsole1';
import { withConsole2 } from './middlewares/withConsole2';

export default stackMiddlewares([withConsole2,withConsole1]);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     * - ...put here other path to exclude (also public paths)
     */
    '/((?!api|_next/static|favicon.ico|login).*)'
  ]
};

import { MeshInstance } from '@graphql-mesh/runtime';
import { RequestHandler } from 'express';
import { createServer, useExtendContext } from '@graphql-yoga/node';
import { IncomingMessage } from 'http';

function shouldRenderGraphiQL(req: IncomingMessage) {
  return req.method.toLowerCase() === 'get' && req.headers.accept.includes('text/html');
}

export const graphqlHandler = (mesh$: Promise<MeshInstance>): RequestHandler => {
  const yoga$ = mesh$.then(mesh =>
    createServer({
      parserCache: false,
      validationCache: false,
      plugins: [
        ...mesh.plugins,
        useExtendContext(({ req, res }) => ({
          ...req,
          headers: req.headers,
          cookies: req.cookies,
          res,
        })),
      ],
      logging: mesh.logger,
      maskedErrors: false,
    })
  );
  return function (req, res, next) {
    // Determine whether we should render GraphiQL instead of returning an API response
    if (shouldRenderGraphiQL(req)) {
      next();
    } else {
      yoga$
        .then(yoga => yoga.requestListener(req, res))
        .catch((e: Error | AggregateError) => {
          res.status(500);
          res.write(
            JSON.stringify({
              errors:
                'errors' in e
                  ? e.errors.map((e: Error) => ({
                      name: e.name,
                      message: e.message,
                      stack: e.stack,
                    }))
                  : [
                      {
                        name: e.name,
                        message: e.message,
                        stack: e.stack,
                      },
                    ],
            })
          );
          res.end();
        });
    }
  };
};

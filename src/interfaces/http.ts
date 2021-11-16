import fastify, { FastifyInstance } from 'fastify';
import { Container, Registry } from '../container';

type StartFn = () => Promise<FastifyInstance>;
export type HttpInterface = { start: StartFn };
export default (container: Registry): HttpInterface => ({
  start: async () => {
    const { config } = container;

    const server = fastify();

    server.get('/ping', async (request, reply) => {
      return 'pong\n';
    });

    await server.listen(config.http.port, '0.0.0.0');

    return server;
  },
});

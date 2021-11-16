/* declare var process: {
  env: {
    NODE_ENV: string;
    PORT: string;
  };
}; */

export default {
  http: { port: process.env.PORT || '3333' },
};

export type Config = {
  http: { port: string };
};

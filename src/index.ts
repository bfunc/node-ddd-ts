import createContainer from './container';

const { resolve } = createContainer();
const app = resolve.http;

app.start().catch(error => {
  console.log('Error', error);
  process.exit();
});

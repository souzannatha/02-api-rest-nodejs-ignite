import fastify from 'fastify';

const app = fastify();

app.get('/hello', () => {
  return 'Hellooo';
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running');
  });

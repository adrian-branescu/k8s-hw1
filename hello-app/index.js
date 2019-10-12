const fastify = require('fastify')({
    logger: true
});

fastify.get('/hello', async (request, reply) => {

    const html = `<h3>Hello ${process.env.APP_MESSAGE}!</h3>`;
    reply.type('text/html').code(200);
    return html;
});

fastify.listen(process.env.APP_PORT, '0.0.0.0', (err, address) => {

    if (err) {
        throw err;
    }
    fastify.log.info(`server listening on ${address}`);
});

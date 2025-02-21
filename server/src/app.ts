import Fastify from "fastify";

const server = Fastify();

server.get('/', async () => {
    return {status: 'OK'}
})

const port = 8080;

async function main() {
    try {
        await server.listen({ port: port, host: '0.0.0.0' });
        console.log(`server ready at http://localhost:${port}`);
    } catch(e) {
        console.error(e);
        process.exit(1);
    }
}

main();
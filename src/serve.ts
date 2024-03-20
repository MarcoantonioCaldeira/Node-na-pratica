import fastify from "fastify";

const app = fastify()

app.get('/teste', () => {
    return 'Ola mundo'
})

app.listen({
    port: 3333, 
}).then(() => {
    console.log("Ola mundo")
})


import fastify from "fastify"
import { routes } from "./routes"

export const app = fastify()
app.register(routes)

app.listen({ port: 3333 }, (err, address) => {
    if (err) {
        console.log('There was a problem starting the server.' + err)
    }
    console.log('Server started. Port: 3333')
});
import fastify from "fastify"
import cors from "@fastify/cors"
import { routes } from "./routes"

export const app = fastify()

app.register(cors, {
    origin: 'http://localhost:4200'
})

app.register(routes)

app.listen({ port: 3333 }, (err) => {
    if (err) {
        console.log('There was a problem starting the server.' + err)
    }
    console.log('Server started. Port: 3333')
});
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export const ListEnterprise = async (app: FastifyInstance) => {
    
    app.post('/edit', (req: FastifyRequest, rep: FastifyReply) => {
        return rep.status(200);
    })
}
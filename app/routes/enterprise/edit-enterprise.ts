import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export const EditEnterprise = async (app: FastifyInstance) => {
    
    app.post('/edit', (req: FastifyRequest, rep: FastifyReply) => {
        return rep.status(200);
    })
}
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export const CreateEnterprise = async (app: FastifyInstance) => {
    app.post('/register', (req: FastifyRequest, rep: FastifyReply) => {
        return rep.status(200).send({
            message: 'Enterprise registered successfully'
        })
    })
}
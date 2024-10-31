import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export const CreateEnterprise = async (app: FastifyInstance) => {
    app.get('/register', (req: FastifyRequest, rep: FastifyReply) => {
        return rep.status(200).send({
            message: 'Enterprise registered successfully' 
        })
    })
}
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { CreateEnterpriseInterface } from '../../Interfaces/CreateEnterprise-Interface'

export const ListEnterprise = async (app: FastifyInstance) => {
    
    app.post('/list', async (req: FastifyRequest<{ Body: CreateEnterpriseInterface }>, rep: FastifyReply) => {
        

    })
}
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { CreateEnterpriseInterface } from '../../Interfaces/CreateEnterprise-Interface'

export const LoginEnterprise = async (app: FastifyInstance) => {
    
    app.post('/login', async (req: FastifyRequest<{ Body: CreateEnterpriseInterface }>, rep: FastifyReply) => {
        
        if (!req.body.email) {
            
        }

    })
}
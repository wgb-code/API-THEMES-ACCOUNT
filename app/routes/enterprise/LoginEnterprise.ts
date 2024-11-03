import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { CreateEnterpriseInterface } from '../../Interfaces/CreateEnterprise-Interface'
import { dataValidationsSchema } from '../../Helpers/RegisterValidation';

export const LoginEnterprise = async (app: FastifyInstance) => {
    
    app.post('/login', async (req: FastifyRequest<{ Body: CreateEnterpriseInterface }>, rep: FastifyReply) => {
        let validation = dataValidationsSchema.safeParse(req.body)

        if (!validation.success) {
            let errorMessage = validation.error.errors[0].message

            return rep.status(400).send({
                message: errorMessage,
                statutscode: 400
            })
        }

        

    })
}
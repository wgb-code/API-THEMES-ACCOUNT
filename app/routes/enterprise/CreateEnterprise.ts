import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { CreateEnterpriseInterface } from '../../Interfaces/CreateEnterprise-Interface';
import { CreateEnterpriseModel } from '../../Models/CreateEnterpriseModel';
import { validateColor } from '../../Helpers/ColorsHelper';
import { dataValidationsSchema } from '../../Helpers/RegisterValidation';
import { secureHash } from '../../Helpers/HashHelper';

export const CreateEnterprise = async (app: FastifyInstance) => {

    app.post('/register', async (req: FastifyRequest<{ Body: CreateEnterpriseInterface }>, rep: FastifyReply) => {
        
        let validation = dataValidationsSchema.safeParse(req.body)
        
        if (!validation.success) {
            let errorMessage = validation.error.errors[0].message

            return rep.status(400).send({
                message: errorMessage,
                statuscode: 400
            })
        } 

        let generalbg       = validateColor(String(req.body.generalbg))
        let generalcolor    = validateColor(String(req.body.generalcolor))
        let highlightsbg    = validateColor(String(req.body.highlightsbg))
        let highlightscolor = validateColor(String(req.body.highlightscolor))
    
        if ((!generalbg) || (!generalcolor) || (!highlightsbg) || (!highlightscolor)) {
            return rep.status(400).send({
                message: 'All color fields must be valid hex colors.',
                statuscode: 400
            });
        }

        let hashedPassword = await secureHash(req.body.password)
    
        let data: CreateEnterpriseInterface = {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            address: req.body.address,
            generalbg: generalbg || '#D6DEE7',
            generalcolor: generalcolor || '#0C121C',
            highlightsbg: highlightsbg || '#0C121C',
            highlightscolor: highlightscolor || '#D6DEE7',
        }

        let createEnterprise = await CreateEnterpriseModel(data)

        if (!createEnterprise) {
            return rep.status(500).send({
                message: 'There was a problem when creating the enterprise',
                statuscode: 500
            })

        } else {
            return rep.status(201).send({
                message: 'Enterprise successfully created',
                data: createEnterprise,
                statuscode: 201
            })
        }
    })
};
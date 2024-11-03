import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { CreateEnterpriseInterface } from '../../Interfaces/CreateEnterprise-Interface';
import { CreateEnterpriseModel } from '../../Models/CreateEnterpriseModel';
import { validateColor } from '../../Helpers/ColorsHelper';
import { dataValidationsSchema } from '../../Helpers/RegisterValidation';

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
    
        if (!generalbg) {
            return rep.status(400).send({
                message: "The 'generalbg' field must be a valid hex color.",
                statuscode: 400
            })
        }
    
        if (!generalcolor) {
            return rep.status(400).send({
                message: "The 'generalcolor' field must be a valid hex color.",
                statuscode: 400
            })
        }
    
        if (!highlightsbg) {
            return rep.status(400).send({
                message: "The 'highlightsbg' field must be a valid hex color.",
                statuscode: 400
            })
        }
    
        if (!highlightscolor) {
            return rep.status(400).send({
                message: "The 'highlightscolor' field must be a valid hex color.",
                statuscode: 400
            })
        }
    
        let data: CreateEnterpriseInterface = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
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
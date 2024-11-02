import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { PrismaClient } from '@prisma/client'
import { CreateEnterpriseInterface } from '../../Interfaces/CreateEnterprise-Interface';
import { validateColor } from '../../Helpers/ColorsHelper';

const prisma = new PrismaClient()

export const CreateEnterprise = async (app: FastifyInstance) => {

    app.post('/register', async (req: FastifyRequest<{ Body: CreateEnterpriseInterface }>, rep: FastifyReply) => {

        if (!req.body.name) {
            return rep.status(400).send({
                message: "The 'name' field is mandatory",
                statuscode: 400
            })
        }

        if (typeof req.body.name !== 'string') {
            return rep.status(400).send({
                message: "The 'name' field must be text type",
                statuscode: 400
            })
        }

        let data: CreateEnterpriseInterface = {
            name: req.body.name,
            generalbg: validateColor(String(req.body.generalbg)) || '#D6DEE7',
            generalcolor: validateColor(String(req.body.generalcolor)) || '#0C121C',
            highlightsbg: validateColor(String(req.body.highlightsbg)) || '#0C121C',
            highlightscolor: validateColor(String(req.body.highlightscolor)) || '#D6DEE7',
        }
    })
};
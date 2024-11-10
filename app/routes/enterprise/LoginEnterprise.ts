import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { LoginEnterpriseInterface } from '../../Interfaces/LoginEnterprise-Interface'
import { LoginEnterpriseModel } from '../../Models/LoginEnterpriseModel';
import { loginDataValidation } from '../../Helpers/LoginValidation';
import { compareSecureHash } from '../../Helpers/HashHelper';

export const LoginEnterprise = async (app: FastifyInstance) => {
    
    app.post('/login', async (req: FastifyRequest<{ Body: LoginEnterpriseInterface }>, rep: FastifyReply) => {
        let validation = loginDataValidation.safeParse(req.body)

        if (!validation.success) {
            let errorMessage = validation.error.errors[0].message

            return rep.status(400).send({
                message: errorMessage,
                errorCode: 'ERROR_EMAIL',
                statutscode: 400
            })
        }

        let data: LoginEnterpriseInterface  = {
            email: req.body.email,
            password: req.body.password
        }

        const getUserData = await LoginEnterpriseModel(data)

        if (!getUserData) {
            return rep.status(404).send({
                message: 'Email provided is invalid',
                errorCode: 'ERROR_INVALID_EMAIL',
                statuscode: 404
            })
        }

        const comparePassword = await compareSecureHash(req.body.password, getUserData.password);

        if (!comparePassword) {
            return rep.status(401).send({
                message: 'Password provided is invalid',
                errorCode: 'ERROR_INVALID_PASSWORD',
                statuscode: 401
            });
        } 

        return rep.status(200).send({
            message: {
                enterprise: getUserData
            },
            statuscode: 200
        });
    })
}
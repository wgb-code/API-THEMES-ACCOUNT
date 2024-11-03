import { FastifyInstance } from "fastify"
import { CreateEnterprise } from "./CreateEnterprise"
import { LoginEnterprise } from "./LoginEnterprise"

export const EnterpriseRoutes = async (app: FastifyInstance) => {
    await app.register(CreateEnterprise)
    await app.register(LoginEnterprise)
}
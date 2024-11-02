import { FastifyInstance } from "fastify"
import { CreateEnterprise } from "./CreateEnterprise"
import { ListEnterprise } from "./ListEnterprise"

export const EnterpriseRoutes = async (app: FastifyInstance) => {
    await app.register(CreateEnterprise)
    await app.register(ListEnterprise)
}
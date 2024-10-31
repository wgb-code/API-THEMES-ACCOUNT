import { FastifyInstance } from "fastify"
import { CreateEnterprise } from "./create-enterprise"
import { EditEnterprise } from "./edit-enterprise"

export const EnterpriseRoutes = async (app: FastifyInstance) => {
    await app.register(CreateEnterprise)
    await app.register(EditEnterprise)
}
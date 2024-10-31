import { FastifyInstance } from "fastify";
import { EnterpriseRoutes } from './routes/enterprise/@EnterpriseRoutes'

export const routes = async (app: FastifyInstance) => {
    await app.register(EnterpriseRoutes);
};
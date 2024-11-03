import { PrismaClient } from '@prisma/client';
import { LoginEnterpriseInterface } from '../Interfaces/LoginEnterprise-Interface';

const prisma = new PrismaClient()

export async function LoginEnterpriseModel(data: LoginEnterpriseInterface) {
    try {
        let loginEnterprise = await prisma.enterprise.findUnique({
            where: {
                email: data.email
            }
        });
        
    } catch (error) {
        
    }
}
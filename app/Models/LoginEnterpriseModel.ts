import { Enterprise, PrismaClient } from '@prisma/client';
import { LoginEnterpriseInterface } from '../Interfaces/LoginEnterprise-Interface';

const prisma = new PrismaClient()

export async function LoginEnterpriseModel(data: LoginEnterpriseInterface): Promise<Enterprise | null > {
    try {
        let loginEnterprise = await prisma.enterprise.findUnique({
            where: {
                email: data.email
            }
        })
    
        return loginEnterprise || null
    } catch (error) {
        throw new Error('Server error.');
    }
}
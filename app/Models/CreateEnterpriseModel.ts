import { PrismaClient } from '@prisma/client';
import { CreateEnterpriseInterface } from '../Interfaces/CreateEnterprise-Interface';

const prisma = new PrismaClient()

export async function CreateEnterpriseModel(data: CreateEnterpriseInterface) {
    try {
        let createdEnterprise = await prisma.enterprise.create({
            data: data
        })

        return createdEnterprise
    } catch (error) {
        return false
    }
}
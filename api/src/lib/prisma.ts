import { PrismaClient } from "../../generated/prisma";
import { PrismaPg } from '@prisma/adapter-pg'

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
    throw new Error('DATABASE_URL is not defined')
}

const adapter = new PrismaPg({ connectionString }, { schema: 'meu-foco' })

export const prisma = new PrismaClient({
    adapter,
})


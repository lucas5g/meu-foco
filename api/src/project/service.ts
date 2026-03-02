import { prisma } from '@/lib/prisma'
import type { ProjectModel } from './model'

export abstract class ProjectService {
    static findAll() {
        return prisma.project.findMany({
            include: { _count: { select: { tasks: true } } },
            orderBy: { createdAt: 'desc' },
        })
    }

    static findOne(id: string) {
        return prisma.project.findUniqueOrThrow({
            where: { id },
            include: { tasks: true },
        })
    }

    static create(data: ProjectModel['createBody']) {
        return prisma.project.create({ data })
    }

    static update(id: string, data: ProjectModel['updateBody']) {
        return prisma.project.update({ where: { id }, data })
    }

    static delete(id: string) {
        return prisma.project.delete({ where: { id } })
    }
}

import { prisma } from '@/lib/prisma'
import type { TaskModel } from './model'

export abstract class TaskService {
    static findAll(query: TaskModel['findAllQuery']) {
        return prisma.task.findMany({
            where: {
                ...(query.status && { status: query.status }),
                ...(query.projectId && { projectId: query.projectId }),
            },
            include: { project: true },
            orderBy: { createdAt: 'desc' },
        })
    }

    static findOne(id: string) {
        return prisma.task.findUniqueOrThrow({
            where: { id },
            include: { project: true, pomodoroSessions: true },
        })
    }

    static create(data: TaskModel['createBody']) {
        return prisma.task.create({ data })
    }

    static update(id: string, data: TaskModel['updateBody']) {
        return prisma.task.update({ where: { id }, data })
    }

    static updateStatus(id: string, data: TaskModel['updateStatus']) {
        return prisma.task.update({ where: { id }, data })
    }

    static delete(id: string) {
        return prisma.task.delete({ where: { id } })
    }
}

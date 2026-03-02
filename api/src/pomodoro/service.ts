import { prisma } from '@/lib/prisma'
import type { PomodoroModel } from './model'

export abstract class PomodoroService {
    static findAll(query: PomodoroModel['findAllQuery']) {
        return prisma.pomodoroSession.findMany({
            where: {
                ...(query.taskId && { taskId: query.taskId }),
            },
            include: { task: true },
            orderBy: { startedAt: 'desc' },
        })
    }

    static create(data: PomodoroModel['createBody']) {
        return prisma.pomodoroSession.create({ data })
    }
}

import { prisma } from '@/lib/prisma'

export abstract class StatisticsService {
    static async weekly() {
        const now = new Date()
        const startOfWeek = new Date(now)
        startOfWeek.setDate(now.getDate() - now.getDay())
        startOfWeek.setHours(0, 0, 0, 0)

        const sessions = await prisma.pomodoroSession.findMany({
            where: {
                startedAt: { gte: startOfWeek },
            },
            select: {
                duration: true,
                startedAt: true,
            },
        })

        const dailyData: Record<string, number> = {}
        const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

        for (const day of days) {
            dailyData[day] = 0
        }

        for (const session of sessions) {
            const dayIndex = new Date(session.startedAt).getDay()
            dailyData[days[dayIndex]] += session.duration
        }

        const totalMinutes = sessions.reduce((sum, s) => sum + s.duration, 0)
        const totalSessions = sessions.length

        return {
            dailyData,
            totalMinutes,
            totalSessions,
        }
    }

    static async byProject() {
        const projects = await prisma.project.findMany({
            include: {
                tasks: {
                    include: {
                        pomodoroSessions: {
                            select: { duration: true },
                        },
                    },
                },
            },
        })

        return projects.map((project) => ({
            id: project.id,
            name: project.name,
            icon: project.icon,
            color: project.color,
            totalMinutes: project.tasks.reduce(
                (sum, task) =>
                    sum + task.pomodoroSessions.reduce((s, session) => s + session.duration, 0),
                0
            ),
            totalTasks: project.tasks.length,
        }))
    }
}

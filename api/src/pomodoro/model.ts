import { z } from 'zod'

const PomodoroModel = {
    createBody: z.object({
        duration: z.number().int().positive(),
        taskId: z.string().uuid().optional(),
        startedAt: z.string().datetime(),
        finishedAt: z.string().datetime().optional(),
    }),
    findAllQuery: z.object({
        taskId: z.string().uuid().optional(),
    }),
} as const

export type PomodoroModel = {
    [k in keyof typeof PomodoroModel]: z.infer<typeof PomodoroModel[k]>
}

export { PomodoroModel }

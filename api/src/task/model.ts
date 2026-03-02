import { z } from 'zod'

const TaskModel = {
    createBody: z.object({
        title: z.string(),
        description: z.string().optional(),
        status: z.enum(['pending', 'in_progress', 'completed']).default('pending'),
        dueDate: z.string().datetime().optional(),
        projectId: z.string().uuid().optional(),
    }),
    updateBody: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        status: z.enum(['pending', 'in_progress', 'completed']).optional(),
        dueDate: z.string().datetime().optional(),
        projectId: z.string().uuid().nullable().optional(),
    }),
    updateStatus: z.object({
        status: z.enum(['pending', 'in_progress', 'completed']),
    }),
    findAllQuery: z.object({
        status: z.enum(['pending', 'in_progress', 'completed']).optional(),
        projectId: z.string().uuid().optional(),
    }),
} as const

export type TaskModel = {
    [k in keyof typeof TaskModel]: z.infer<typeof TaskModel[k]>
}

export { TaskModel }

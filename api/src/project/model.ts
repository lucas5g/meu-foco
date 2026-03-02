import { z } from 'zod'

const ProjectModel = {
    createBody: z.object({
        name: z.string(),
        icon: z.string(),
        color: z.string().optional(),
    }),
    updateBody: z.object({
        name: z.string().optional(),
        icon: z.string().optional(),
        color: z.string().optional(),
    }),
} as const

export type ProjectModel = {
    [k in keyof typeof ProjectModel]: z.infer<typeof ProjectModel[k]>
}

export { ProjectModel }

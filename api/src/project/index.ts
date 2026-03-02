import { Elysia, t } from 'elysia'
import { ProjectService } from './service'
import { ProjectModel } from './model'

const paramsSchema = t.Object({ id: t.String() })

export const project = new Elysia({ prefix: '/projects' })
    .get('/', () => ProjectService.findAll())
    .post('/', ({ body }) => {
        const data = ProjectModel.createBody.parse(body)
        return ProjectService.create(data)
    })
    .guard({ params: paramsSchema })
    .get('/:id', ({ params }) => ProjectService.findOne(params.id))
    .put('/:id', ({ params, body }) => {
        const data = ProjectModel.updateBody.parse(body)
        return ProjectService.update(params.id, data)
    })
    .delete('/:id', ({ params }) => ProjectService.delete(params.id))

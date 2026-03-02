import { Elysia, t } from 'elysia'
import { TaskService } from './service'
import { TaskModel } from './model'

const paramsSchema = t.Object({ id: t.String() })

export const task = new Elysia({ prefix: '/tasks' })
    .get('/', ({ query }) => {
        const filters = TaskModel.findAllQuery.parse(query)
        return TaskService.findAll(filters)
    })
    .post('/', ({ body }) => {
        const data = TaskModel.createBody.parse(body)
        return TaskService.create(data)
    })
    .guard({ params: paramsSchema })
    .get('/:id', ({ params }) => TaskService.findOne(params.id))
    .put('/:id', ({ params, body }) => {
        const data = TaskModel.updateBody.parse(body)
        return TaskService.update(params.id, data)
    })
    .patch('/:id/status', ({ params, body }) => {
        const data = TaskModel.updateStatus.parse(body)
        return TaskService.updateStatus(params.id, data)
    })
    .delete('/:id', ({ params }) => TaskService.delete(params.id))

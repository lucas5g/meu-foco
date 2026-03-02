import { Elysia } from 'elysia'
import { PomodoroService } from './service'
import { PomodoroModel } from './model'

export const pomodoro = new Elysia({ prefix: '/pomodoro' })
    .get('/sessions', ({ query }) => {
        const filters = PomodoroModel.findAllQuery.parse(query)
        return PomodoroService.findAll(filters)
    })
    .post('/sessions', ({ body }) => {
        const data = PomodoroModel.createBody.parse(body)
        return PomodoroService.create(data)
    })

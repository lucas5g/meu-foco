import { Elysia } from 'elysia'
import { project } from './project'
import { task } from './task'
import { pomodoro } from './pomodoro'
import { statistics } from './statistics'

const app = new Elysia({ prefix: '/api' })
    .use(project)
    .use(task)
    .use(pomodoro)
    .use(statistics)
    .listen(3000)

console.log(`🚀 meu foco API rodando em http://localhost:${app.server?.port}`)

import { Elysia } from 'elysia'
import { project } from './project'
import { task } from './task'
import { pomodoro } from './pomodoro'
import { statistics } from './statistics'
import cors from '@elysiajs/cors'

const app = new Elysia({ prefix: '/api' })
    .use(cors())
    .use(project)
    .use(task)
    .use(pomodoro)
    .use(statistics)
    .get('/', () => 'API do meu foco rodando!')
    .listen({
        port: process.env.PORT ? Number(process.env.PORT) : 3000,
        hostname: '0.0.0.0'
    })

console.log(`🚀 meu foco API rodando em http://${app.server?.hostname}:${app.server?.port}`)

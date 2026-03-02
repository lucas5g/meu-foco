import { Elysia } from 'elysia'
import { StatisticsService } from './service'

export const statistics = new Elysia({ prefix: '/statistics' })
    .get('/weekly', () => StatisticsService.weekly())
    .get('/by-project', () => StatisticsService.byProject())

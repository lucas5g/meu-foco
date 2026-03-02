export const mockProjects = [
    { id: '1', name: 'meu foco', icon: 'target', color: '#30e8ab', _count: { tasks: 8 } },
    { id: '2', name: 'Design System', icon: 'palette', color: '#8b5cf6', _count: { tasks: 5 } },
    { id: '3', name: 'API Backend', icon: 'code', color: '#3b82f6', _count: { tasks: 12 } },
    { id: '4', name: 'Landing Page', icon: 'globe', color: '#f59e0b', _count: { tasks: 3 } },
]

export const mockTasks = [
    { id: '1', title: 'Implementar autenticação', description: 'Criar sistema de login e registro', status: 'in_progress', dueDate: '2026-03-10', projectId: '3', project: mockProjects[2] },
    { id: '2', title: 'Criar dashboard de tarefas', description: 'Implementar tela principal com listagem', status: 'completed', dueDate: '2026-03-05', projectId: '1', project: mockProjects[0] },
    { id: '3', title: 'Design dos componentes', description: 'Criar componentes base do design system', status: 'pending', dueDate: '2026-03-15', projectId: '2', project: mockProjects[1] },
    { id: '4', title: 'Configurar banco de dados', description: 'Setup PostgreSQL e Prisma', status: 'completed', dueDate: '2026-03-03', projectId: '3', project: mockProjects[2] },
    { id: '5', title: 'Timer Pomodoro', description: 'Implementar timer com controles', status: 'pending', dueDate: '2026-03-20', projectId: '1', project: mockProjects[0] },
    { id: '6', title: 'Criar hero section', description: 'Design e implementação do hero', status: 'in_progress', dueDate: '2026-03-12', projectId: '4', project: mockProjects[3] },
    { id: '7', title: 'Testes unitários', description: 'Escrever testes para os serviços', status: 'pending', dueDate: '2026-03-25', projectId: '3', project: mockProjects[2] },
    { id: '8', title: 'Responsividade mobile', description: 'Adaptar layout para dispositivos móveis', status: 'pending', dueDate: null, projectId: '1', project: mockProjects[0] },
]

export const mockWeeklyStats = {
    dailyData: {
        Dom: 0,
        Seg: 120,
        Ter: 90,
        Qua: 150,
        Qui: 75,
        Sex: 180,
        Sáb: 45,
    },
    totalMinutes: 660,
    totalSessions: 26,
}

export const mockProjectStats = [
    { id: '1', name: 'meu foco', icon: 'target', color: '#30e8ab', totalMinutes: 240, totalTasks: 8 },
    { id: '2', name: 'Design System', icon: 'palette', color: '#8b5cf6', totalMinutes: 120, totalTasks: 5 },
    { id: '3', name: 'API Backend', icon: 'code', color: '#3b82f6', totalMinutes: 200, totalTasks: 12 },
    { id: '4', name: 'Landing Page', icon: 'globe', color: '#f59e0b', totalMinutes: 100, totalTasks: 3 },
]

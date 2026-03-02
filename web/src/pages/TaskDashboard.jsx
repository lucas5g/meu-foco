import { useState } from 'react'
import { mockTasks } from '@/data/mockData'

const statusConfig = {
    pending: { label: 'Pendente', icon: 'pending', color: 'text-slate-500 bg-slate-100 dark:bg-slate-800 dark:text-slate-400' },
    in_progress: { label: 'Em andamento', icon: 'clock', color: 'text-warning bg-warning/10' },
    completed: { label: 'Concluída', icon: 'check_circle', color: 'text-success bg-success/10' },
}

export function TaskDashboard() {
    const [tasks] = useState(mockTasks)
    const [filter, setFilter] = useState('all')

    const filteredTasks = tasks.filter((task) => {
        return filter === 'all' || task.status === filter
    })

    const counts = {
        all: tasks.length,
        pending: tasks.filter((t) => t.status === 'pending').length,
        in_progress: tasks.filter((t) => t.status === 'in_progress').length,
        completed: tasks.filter((t) => t.status === 'completed').length,
    }

    return (
        <div className="w-full">
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">Minhas Tarefas</h1>
                    <p className="mt-2 text-base text-slate-600 dark:text-slate-400">Gerencie e acompanhe seus itens de ação individuais.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-surface-dark dark:text-slate-300 dark:hover:bg-slate-800 cursor-pointer">
                        <span className="material-symbols-outlined text-[20px] leading-none">filter_list</span>
                        Filtrar
                    </button>
                    <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-surface-dark dark:text-slate-300 dark:hover:bg-slate-800 cursor-pointer">
                        <span className="material-symbols-outlined text-[20px] leading-none">sort</span>
                        Ordenar
                    </button>
                </div>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col rounded-2xl border border-slate-200 bg-surface-light p-6 shadow-sm dark:border-slate-700 dark:bg-surface-dark">
                    <div className="mb-4 flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Total de Tarefas</span>
                        <span className="flex items-center text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">
                            <span className="material-symbols-outlined text-[14px] leading-none mr-0.5">trending_up</span> +12%
                        </span>
                    </div>
                    <span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{counts.all}</span>
                </div>
                <div className="flex flex-col rounded-2xl border border-slate-200 bg-surface-light p-6 shadow-sm dark:border-slate-700 dark:bg-surface-dark">
                    <div className="mb-4 flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Concluídas</span>
                        <span className="flex items-center text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">
                            <span className="material-symbols-outlined text-[14px] leading-none mr-0.5">trending_up</span> +8%
                        </span>
                    </div>
                    <span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{counts.completed}</span>
                </div>
                <div className="flex flex-col rounded-2xl border border-slate-200 bg-surface-light p-6 shadow-sm dark:border-slate-700 dark:bg-surface-dark">
                    <div className="mb-4 flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Pendentes</span>
                        <span className="flex items-center text-xs font-bold text-blue-500 bg-blue-500/10 px-2 py-1 rounded-full">
                            <span className="material-symbols-outlined text-[14px] leading-none mr-0.5">trending_flat</span> +2%
                        </span>
                    </div>
                    <span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{counts.pending}</span>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                {filteredTasks.map((task) => {
                    return (
                        <div key={task.id} className="group relative flex items-center justify-between rounded-2xl border border-slate-200 bg-surface-light p-4 shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-surface-dark sm:p-5">
                            <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
                                <div className="flex-shrink-0">
                                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${task.status === 'completed' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'}`}>
                                        <span className="material-symbols-outlined leading-none">{task.status === 'completed' ? 'check_circle' : 'design_services'}</span>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className={`text-base font-bold ${task.status === 'completed' ? 'line-through text-slate-400' : 'text-slate-900 dark:text-white'}`}>{task.title}</h3>
                                        {task.project && (
                                            <span
                                                className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                                                style={{ backgroundColor: `${task.project.color}20`, color: task.project.color }}
                                            >
                                                {task.project.name}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-1">{task.description}</p>
                                </div>
                                <div className="mt-2 flex items-center gap-4 sm:mt-0 sm:justify-end">
                                    {task.dueDate && (
                                        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                                            <span className="material-symbols-outlined text-[16px] leading-none">calendar_today</span>
                                            <span>{new Date(task.dueDate).toLocaleDateString('pt-BR')}</span>
                                        </div>
                                    )}
                                    <div className="flex -space-x-2">
                                        <div className="h-6 w-6 rounded-full border-2 border-white bg-slate-200 dark:border-surface-dark dark:bg-slate-700"></div>
                                    </div>
                                    <button className="text-slate-400 opacity-0 transition-opacity group-hover:opacity-100 hover:text-primary dark:hover:text-primary ml-2 cursor-pointer">
                                        <span className="material-symbols-outlined leading-none">more_vert</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}

                {filteredTasks.length === 0 && (
                    <div className="text-center py-16 text-slate-400">
                        <p className="text-sm">Nenhuma tarefa encontrada</p>
                    </div>
                )}
            </div>
        </div>
    )
}

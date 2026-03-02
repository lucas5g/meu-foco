import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiFetch } from '@/services/api'
import { mockTasks } from '@/data/mockData'
import { CreateTaskModal } from '@/components/CreateTaskModal'

const statusConfig = {
  pending: { label: 'Pendente', icon: 'pending', color: 'text-slate-500 bg-slate-100 dark:bg-slate-800 dark:text-slate-400' },
  in_progress: { label: 'Em andamento', icon: 'clock', color: 'text-warning bg-warning/10' },
  completed: { label: 'Concluída', icon: 'check_circle', color: 'text-success bg-success/10' },
}

export function TaskDashboard() {
  const navigate = useNavigate()
  const [tasks, setTasks] = useState([])
  const [projects, setProjects] = useState([])
  const [filter, setFilter] = useState('all')
  const [isLoading, setIsLoading] = useState(true)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const fetchTasksAndProjects = async () => {
    setIsLoading(true)
    try {
      const [tasksData, projectsData] = await Promise.all([
        apiFetch('/tasks'),
        apiFetch('/projects')
      ])
      setTasks(tasksData)
      setProjects(projectsData)
    } catch (error) {
      console.error('Erro ao buscar dados:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTasksAndProjects()
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Tab' && !isCreateModalOpen) {
        e.preventDefault()
        setIsCreateModalOpen(true)
      } else if (e.key === 'Escape' && isCreateModalOpen) {
        setIsCreateModalOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isCreateModalOpen])

  const handleCreateTask = async (taskData) => {
    setIsCreateModalOpen(false)
    try {
      await apiFetch('/tasks', {
        method: 'POST',
        body: JSON.stringify(taskData),
      })
      await fetchTasksAndProjects()
    } catch (error) {
      console.error('Erro ao criar tarefa:', error)
    }
  }

  const handleToggleStatus = async (task) => {
    const newStatus = task.status === 'completed' ? 'pending' : 'completed'
    try {
      await apiFetch(`/tasks/${task.id}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status: newStatus }),
      })
      await fetchTasksAndProjects()
    } catch (error) {
      console.error('Erro ao atualizar status da tarefa:', error)
    }
  }

  const handleDeleteTask = async (id) => {
    if (!confirm('Deseja realmente excluir esta tarefa?')) return
    try {
      await apiFetch(`/tasks/${id}`, { method: 'DELETE' })
      await fetchTasksAndProjects()
    } catch (error) {
      console.error('Erro ao excluir tarefa:', error)
    }
  }

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
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-primary/90 transition-colors text-background-dark text-sm font-bold leading-normal shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined mr-2 !text-lg leading-none">add</span>
            <span className="truncate">Nova Tarefa</span>
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
                <div className="flex-shrink-0 cursor-pointer" onClick={() => handleToggleStatus(task)}>
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full hover:opacity-80 transition-opacity ${task.status === 'completed' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'}`}
                    style={task.status !== 'completed' && task.project?.color ? { backgroundColor: `${task.project.color}20`, color: task.project.color } : {}}
                  >
                    <span className="material-symbols-outlined leading-none">{task.status === 'completed' ? 'check_circle' : (task.project?.icon || 'design_services')}</span>
                  </div>
                </div>
                <div
                  className="flex flex-1 flex-col gap-1 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => navigate(`/foco/${task.id}`)}
                >
                  <div className="flex items-center gap-2">
                    <h3 className={`text-base font-bold ${task.status === 'completed' ? 'line-through text-slate-400' : 'text-slate-900 dark:text-white'}`}>{task.title}</h3>
                    {task.project && (
                      <span
                        className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                        style={{ backgroundColor: `${task.project.color || '#60A5FA'}20`, color: task.project.color || '#60A5FA' }}
                      >
                        {task.project.name}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-1">{task.description}</p>
                </div>
                <div className="mt-2 flex items-center gap-4 sm:mt-0 sm:justify-end">
                  {task.createdAt && (
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400" title="Criado em">
                      <span className="material-symbols-outlined text-[16px] leading-none">calendar_today</span>
                      <span>{new Date(task.createdAt).toLocaleDateString('pt-BR')}</span>
                    </div>
                  )}
                  {task.dueDate && (
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400" title="Vencimento">
                      <span className="material-symbols-outlined text-[16px] leading-none">event</span>
                      <span>{new Date(task.dueDate).toLocaleDateString('pt-BR')}</span>
                    </div>
                  )}
                  <button onClick={() => handleDeleteTask(task.id)} className="text-slate-400 opacity-0 transition-opacity group-hover:opacity-100 hover:text-red-500 dark:hover:text-red-400 ml-2 cursor-pointer" title="Excluir tarefa">
                    <span className="material-symbols-outlined leading-none">delete</span>
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

      <CreateTaskModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} onSave={handleCreateTask} />
    </div>
  )
}

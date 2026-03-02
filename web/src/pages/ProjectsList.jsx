import { useState, useEffect } from 'react'
import { apiFetch } from '@/services/api'
import { CreateProjectModal } from '@/components/CreateProjectModal'

export function ProjectsList() {
  const [projects, setProjects] = useState([])
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleCreateProject = async (projectData) => {
    setIsCreateModalOpen(false)
    try {
      setIsLoading(true)
      await apiFetch('/projects', {
        method: 'POST',
        body: JSON.stringify(projectData),
      })
      await fetchProjects()
    } catch (error) {
      console.error('Erro ao criar projeto:', error)
      setIsLoading(false)
    }
  }

  const handleDeleteProject = async (id) => {
    if (!confirm('Deseja realmente excluir este projeto?')) return
    try {
      setIsLoading(true)
      await apiFetch(`/projects/${id}`, { method: 'DELETE' })
      await fetchProjects()
    } catch (error) {
      console.error('Erro ao excluir projeto:', error)
      setIsLoading(false)
    }
  }

  const fetchProjects = async () => {
    setIsLoading(true)
    try {
      const data = await apiFetch('/projects')
      setProjects(data)
    } catch (error) {
      console.error('Erro ao buscar projetos:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row flex-wrap justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white">Meus Projetos</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1 text-sm">Gerencie seus fluxos de trabalho e tarefas.</p>
        </div>
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-primary/90 transition-colors text-background-dark text-sm font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined mr-2 !text-lg leading-none">add</span>
          <span className="truncate">Novo Projeto</span>
        </button>
      </div>

      <div className="flex md:hidden mb-4">
        <div className="flex w-full items-stretch rounded-lg h-10 bg-surface-light border border-slate-200 dark:bg-surface-dark dark:border-surface-border">
          <div className="text-slate-400 dark:text-text-secondary flex items-center justify-center pl-3">
            <span className="material-symbols-outlined !text-[20px] leading-none">search</span>
          </div>
          <input className="w-full bg-transparent border-none text-slate-900 dark:text-white focus:ring-0 placeholder:text-slate-400 dark:placeholder:text-text-secondary text-sm px-2 outline-none" placeholder="Buscar projetos..." />
        </div>
      </div>

      <div className="w-full overflow-hidden rounded-xl border border-slate-200 dark:border-surface-border bg-surface-light dark:bg-surface-dark shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] table-fixed">
            <thead>
              <tr className="bg-slate-50 dark:bg-background-dark/50 border-b border-slate-200 dark:border-surface-border">
                <th className="px-6 py-4 text-left text-slate-500 dark:text-text-secondary text-xs font-semibold uppercase tracking-wider w-24">Ícone</th>
                <th className="px-6 py-4 text-left text-slate-500 dark:text-text-secondary text-xs font-semibold uppercase tracking-wider">Nome do Projeto</th>
                <th className="px-6 py-4 text-left text-slate-500 dark:text-text-secondary text-xs font-semibold uppercase tracking-wider w-48">Tarefas</th>
                <th className="px-6 py-4 text-right text-slate-500 dark:text-text-secondary text-xs font-semibold uppercase tracking-wider w-32">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-surface-border">
              {projects.map((project) => (
                <tr key={project.id} className="group hover:bg-slate-50 dark:hover:bg-surface-border/20 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div
                      className="flex items-center justify-center size-10 rounded-lg"
                      style={{ backgroundColor: `${project.color || '#60A5FA'}20`, color: project.color || '#60A5FA' }}
                    >
                      <span className="material-symbols-outlined leading-none">{project.icon || 'web'}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-slate-900 dark:text-white font-medium text-base">{project.name}</span>
                      <span className="text-slate-500 dark:text-text-secondary text-xs">Atualizado há pouco tempo</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-text-secondary text-sm">
                      <span className="material-symbols-outlined !text-lg leading-none">check_circle</span>
                      <span>{project._count?.tasks || 0} tarefas</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="size-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-background-dark text-slate-400 dark:text-text-secondary hover:text-primary dark:hover:text-primary transition-colors cursor-pointer" title="Editar">
                        <span className="material-symbols-outlined !text-[20px] leading-none">edit</span>
                      </button>
                      <button onClick={() => handleDeleteProject(project.id)} className="size-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-background-dark text-slate-400 dark:text-text-secondary hover:text-red-400 transition-colors cursor-pointer" title="Excluir">
                        <span className="material-symbols-outlined !text-[20px] leading-none">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
        <span className="text-slate-500 dark:text-text-secondary text-sm">Mostrando <span className="text-slate-900 dark:text-white font-medium">1-{(projects.length)}</span> de <span className="text-slate-900 dark:text-white font-medium">{projects.length}</span> projetos</span>
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center size-9 rounded-lg border border-slate-200 dark:border-surface-border bg-surface-light dark:bg-surface-dark text-slate-500 dark:text-text-secondary hover:bg-slate-50 dark:hover:bg-surface-border transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
            <span className="material-symbols-outlined !text-lg leading-none">chevron_left</span>
          </button>
          <button className="flex items-center justify-center size-9 rounded-lg bg-primary text-background-dark font-bold text-sm cursor-pointer">
            1
          </button>
          <button className="flex items-center justify-center size-9 rounded-lg border border-slate-200 dark:border-surface-border bg-surface-light dark:bg-surface-dark text-slate-500 dark:text-text-secondary hover:bg-slate-50 dark:hover:bg-surface-border transition-colors text-sm cursor-pointer">
            <span className="material-symbols-outlined !text-lg leading-none">chevron_right</span>
          </button>
        </div>
      </div>

      <CreateProjectModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} onSave={handleCreateProject} />
    </div>
  )
}

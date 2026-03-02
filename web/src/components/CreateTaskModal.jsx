import { useState } from 'react'
import { mockProjects } from '@/data/mockData'

export function CreateTaskModal({ isOpen, onClose }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [projectId, setProjectId] = useState('')
    const [dueDate] = useState('24 Out, 2023')

    if (!isOpen) return null

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ title, description, projectId, dueDate })
        setTitle('')
        setDescription('')
        setProjectId('')
        onClose()
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
            <div className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-border shadow-2xl transition-all dark:shadow-black/50">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-surface-border px-6 py-4">
                    <h3 className="text-xl font-bold leading-tight text-slate-900 dark:text-white flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary leading-none text-2xl">add_task</span>
                        Nova Tarefa
                    </h3>
                    <button onClick={onClose} className="rounded-full p-1 text-slate-500 hover:bg-slate-100 dark:text-text-secondary dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
                        <span className="material-symbols-outlined leading-none">close</span>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className="px-6 py-6 space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none text-slate-700 dark:text-gray-300">Data de Criação</label>
                            <div className="flex w-full items-center rounded-lg border border-slate-200 dark:border-surface-border bg-slate-50 dark:bg-background-dark/50 px-3 py-2.5 opacity-80 cursor-not-allowed">
                                <span className="material-symbols-outlined text-slate-400 dark:text-text-secondary mr-2 text-[20px] leading-none">calendar_today</span>
                                <input className="flex-1 bg-transparent text-sm text-slate-600 dark:text-gray-400 focus:outline-none cursor-not-allowed" readOnly value={dueDate} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none text-slate-700 dark:text-gray-200" htmlFor="projectSelect">
                                Projeto
                            </label>
                            <div className="relative group">
                                <select
                                    id="projectSelect"
                                    value={projectId}
                                    onChange={(e) => setProjectId(e.target.value)}
                                    className="flex w-full appearance-none rounded-lg border border-slate-200 dark:border-surface-border bg-slate-50 dark:bg-background-dark px-3 py-3 text-sm text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-200 cursor-pointer"
                                >
                                    <option disabled value="">Selecione um projeto...</option>
                                    {mockProjects.map(p => (
                                        <option key={p.id} value={p.id}>{p.name}</option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400 dark:text-text-secondary group-focus-within:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[20px] leading-none">expand_more</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none text-slate-700 dark:text-gray-200" htmlFor="taskName">
                                Nome da Tarefa <span className="text-red-500 dark:text-red-400">*</span>
                            </label>
                            <div className="relative group">
                                <input
                                    id="taskName"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="flex w-full rounded-lg border border-slate-200 dark:border-surface-border bg-slate-50 dark:bg-background-dark px-3 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-text-secondary focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-200"
                                    placeholder="ex: Criar layout da página inicial"
                                    required
                                />
                                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400 dark:text-text-secondary group-focus-within:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[20px] leading-none">edit</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none text-slate-700 dark:text-gray-200" htmlFor="description">Descrição</label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="flex w-full min-h-[120px] resize-none rounded-lg border border-slate-200 dark:border-surface-border bg-slate-50 dark:bg-background-dark px-3 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-text-secondary focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-200"
                                placeholder="Adicione detalhes específicos ou subtarefas..."
                            ></textarea>
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-3 bg-slate-50 dark:bg-surface-dark/50 px-6 py-4 border-t border-slate-200 dark:border-surface-border">
                        <button
                            type="button"
                            onClick={onClose}
                            className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-surface-dark cursor-pointer">
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-all shadow-[0_0_15px_-3px_rgba(48,232,171,0.3)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-surface-dark cursor-pointer">
                            <span className="material-symbols-outlined text-[18px] leading-none">check_circle</span>
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

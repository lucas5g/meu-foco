import { useState } from 'react'

const iconOptions = [
    { name: 'work', label: 'Trabalho' },
    { name: 'person', label: 'Pessoal' },
    { name: 'menu_book', label: 'Estudo' },
    { name: 'favorite', label: 'Saúde' },
    { name: 'code', label: 'Código' },
    { name: 'brush', label: 'Design' },
    { name: 'home', label: 'Casa' },
    { name: 'more_horiz', label: 'Outros' },
]

export function CreateProjectModal({ isOpen, onClose }) {
    const [name, setName] = useState('')
    const [selectedIcon, setSelectedIcon] = useState(0)

    if (!isOpen) return null

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({
            name,
            icon: iconOptions[selectedIcon].name,
        })
        setName('')
        setSelectedIcon(0)
        onClose()
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
            <div className="relative w-full max-w-[520px] bg-white dark:bg-surface-dark rounded-xl shadow-2xl overflow-hidden border border-slate-200 dark:border-surface-border flex flex-col">
                {/* Header */}
                <div className="px-6 py-5 border-b border-slate-100 dark:border-surface-border flex justify-between items-center">
                    <h3 className="text-slate-900 dark:text-white tracking-tight text-xl font-bold leading-tight">Novo Projeto</h3>
                    <button onClick={onClose} className="text-slate-400 dark:text-text-secondary hover:text-slate-600 dark:hover:text-white transition-colors cursor-pointer">
                        <span className="material-symbols-outlined leading-none">close</span>
                    </button>
                </div>

                {/* Scrollable Content */}
                <form onSubmit={handleSubmit} className="flex flex-col flex-1">
                    <div className="px-6 py-6 flex flex-col gap-6 overflow-y-auto max-h-[70vh]">
                        {/* Project Name Input */}
                        <div className="flex flex-col gap-2">
                            <label className="text-slate-900 dark:text-white text-sm font-medium leading-normal" htmlFor="projectName">Nome do Projeto</label>
                            <input
                                id="projectName"
                                className="form-input w-full rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-text-secondary bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-surface-border focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base transition-colors outline-none"
                                placeholder="Digite o nome do seu projeto..."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        {/* Icon Selection */}
                        <div className="flex flex-col gap-3">
                            <h2 className="text-slate-900 dark:text-white text-base font-bold leading-tight">Escolha um ícone</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {iconOptions.map((opt, idx) => {
                                    const isSelected = selectedIcon === idx;
                                    return (
                                        <button
                                            type="button"
                                            key={opt.name}
                                            onClick={() => setSelectedIcon(idx)}
                                            className={`group flex items-center gap-3 p-2 rounded-lg border transition-all cursor-pointer ${isSelected
                                                    ? 'border-primary bg-primary/10 dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30'
                                                    : 'border-transparent bg-slate-50 dark:bg-surface-hover hover:border-slate-300 dark:hover:border-surface-border'
                                                }`}
                                        >
                                            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition-colors ${isSelected
                                                    ? 'bg-primary text-background-dark'
                                                    : 'bg-white dark:bg-background-dark text-slate-500 dark:text-text-secondary group-hover:text-primary'
                                                }`}>
                                                <span className="material-symbols-outlined text-[20px] leading-none">{opt.name}</span>
                                            </div>
                                            <span className={`text-sm font-medium ${isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-200'}`}>
                                                {opt.label}
                                            </span>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="px-6 py-5 border-t border-slate-100 dark:border-surface-border flex justify-end gap-3 bg-slate-50 dark:bg-surface-dark/50 mt-auto">
                        <button
                            type="button"
                            onClick={onClose}
                            className="h-10 px-5 rounded-lg border border-slate-200 dark:border-surface-border text-slate-700 dark:text-text-secondary font-bold text-sm hover:bg-slate-100 dark:hover:bg-surface-hover transition-colors cursor-pointer">
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="h-10 px-5 rounded-lg bg-primary hover:bg-primary/90 text-background-dark font-bold text-sm shadow-lg shadow-primary/20 transition-all cursor-pointer">
                            Salvar Projeto
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

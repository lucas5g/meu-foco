import { NavLink } from 'react-router-dom'

const navItems = [
    { to: '/tarefas', icon: 'checklist', label: 'Minhas Tarefas' },
    { to: '/projetos', icon: 'folder_open', label: 'Projetos' },
    { to: '/pomodoro', icon: 'timer', label: 'Pomodoro' },
    { to: '/estatisticas', icon: 'bar_chart', label: 'Estatísticas' },
]

export function Sidebar({ onOpenTaskModal }) {
    return (
        <aside className="hidden w-64 flex-col justify-between border-r border-slate-200 bg-surface-light dark:border-slate-800 dark:bg-surface-dark lg:flex">
            <div className="flex flex-col gap-6 p-6">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                        <img alt="User Avatar" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWo9rwKLKOhefFfGd_f17KB9CRSAy5BUf8rYbNdYzAs6YaccJWEYzUH8xtq_7JkPULu2lArxjRGi-xxfv2NQ0_EMh6g29OKlpsQ3CMMI2hYjsLzcAYfyMqTfntGm4HdtaqbFkc0za9K53JCz14xFxMZQCfTcuPYIXz43B7GZxGC7h7Z601hIb-O8oVCXb_hDoCjIZGU1hGttTraeKaZgRVp6oDSS5H_bcLk9QHDNS0Zmz4W_u3LWPaFiG3P7tOjmxQwg1Xm7x8cLWz" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-sm font-semibold text-slate-900 dark:text-white">Alex Morgan</h1>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Produtividade</p>
                    </div>
                </div>

                <nav className="flex flex-col gap-1">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                `group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                    ? 'bg-primary/10 text-primary dark:bg-primary/20'
                                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
                                }`
                            }
                        >
                            <span className="material-symbols-outlined text-[24px] leading-none">{item.icon}</span>
                            {item.label}
                        </NavLink>
                    ))}
                    <div className="h-px bg-slate-200 dark:bg-slate-800 my-2"></div>
                    <a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white" href="#">
                        <span className="material-symbols-outlined text-[24px] leading-none">settings</span>
                        Configurações
                    </a>
                </nav>
            </div>

            <div className="p-6">
                <button
                    onClick={onOpenTaskModal}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-slate-900 shadow-sm shadow-primary/20 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                    <span className="material-symbols-outlined text-[20px] leading-none">add</span>
                    Nova Tarefa
                </button>
            </div>
        </aside>
    )
}

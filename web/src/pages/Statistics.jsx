export function Statistics() {
    return (
        <div className="w-full max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
                <div className="flex flex-col gap-1">
                    <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">Estatísticas de Produtividade</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-base font-medium">21 de Agosto - 27 de Agosto, 2023</p>
                </div>
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-background-dark font-bold text-sm transition-colors shadow-lg shadow-primary/20 cursor-pointer">
                    <span className="material-symbols-outlined text-[20px] leading-none">download</span>
                    <span>Exportar Relatório</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col gap-4 rounded-xl p-6 bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-surface-border shadow-sm relative overflow-hidden group">
                    <div className="absolute right-[-20px] top-[-20px] size-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                    <div className="flex items-start justify-between z-10">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <span className="material-symbols-outlined leading-none">hourglass_top</span>
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-500 ring-1 ring-inset ring-green-500/20">
                            <span className="material-symbols-outlined text-[14px] leading-none">trending_up</span>
                            +12%
                        </span>
                    </div>
                    <div className="z-10">
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Tempo Total de Foco</p>
                        <p className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">32h 15m</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 rounded-xl p-6 bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-surface-border shadow-sm relative overflow-hidden group">
                    <div className="absolute right-[-20px] top-[-20px] size-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                    <div className="flex items-start justify-between z-10">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <span className="material-symbols-outlined leading-none">check_circle</span>
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-500 ring-1 ring-inset ring-green-500/20">
                            <span className="material-symbols-outlined text-[14px] leading-none">trending_up</span>
                            +5%
                        </span>
                    </div>
                    <div className="z-10">
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Sessões Pomodoro</p>
                        <p className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">48</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 rounded-xl p-6 bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-surface-border shadow-sm relative overflow-hidden group">
                    <div className="absolute right-[-20px] top-[-20px] size-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                    <div className="flex items-start justify-between z-10">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <span className="material-symbols-outlined leading-none">task_alt</span>
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full bg-red-500/10 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-500/20">
                            <span className="material-symbols-outlined text-[14px] leading-none">trending_down</span>
                            -2%
                        </span>
                    </div>
                    <div className="z-10">
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Tarefas Concluídas</p>
                        <p className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">24</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-surface-border shadow-sm p-6">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-slate-900 dark:text-white text-xl font-bold">Visão Geral do Tempo de Foco</h3>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-slate-500 dark:text-slate-400 text-sm">Média diária de foco:</span>
                                <span className="text-slate-900 dark:text-white font-bold text-sm">5.4 hrs</span>
                            </div>
                        </div>
                        <select className="bg-slate-100 dark:bg-surface-border border-none text-slate-700 dark:text-slate-300 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2 outline-none cursor-pointer">
                            <option>Esta Semana</option>
                            <option>Semana Passada</option>
                            <option>Mês Passado</option>
                        </select>
                    </div>

                    <div className="h-64 flex items-end justify-between gap-2 sm:gap-4 px-2">
                        {[
                            { day: 'Seg', height: '25%', active: false },
                            { day: 'Ter', height: '45%', active: false },
                            { day: 'Qua', height: '85%', active: true },
                            { day: 'Qui', height: '55%', active: false },
                            { day: 'Sex', height: '65%', active: false },
                            { day: 'Sáb', height: '20%', disabled: true },
                            { day: 'Dom', height: '10%', disabled: true },
                        ].map((d) => (
                            <div key={d.day} className="flex flex-col items-center gap-2 w-full group">
                                <div className={`relative w-full max-w-[40px] bg-slate-100 dark:bg-slate-800 rounded-t-lg h-full flex items-end overflow-hidden`}>
                                    <div
                                        className={`w-full transition-all duration-300 rounded-t-lg ${d.active ? 'bg-primary shadow-[0_0_15px_-3px_rgba(48,232,171,0.5)]' : (d.disabled ? 'bg-slate-300 dark:bg-slate-600' : 'bg-primary/80 group-hover:bg-primary')}`}
                                        style={{ height: d.height }}
                                    ></div>
                                </div>
                                <span className={`text-xs ${d.active ? 'font-bold text-primary' : 'font-medium text-slate-500 dark:text-slate-400'}`}>{d.day}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-surface-border shadow-sm p-6 flex flex-col">
                    <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-6">Distribuição por Tarefa</h3>
                    <div className="flex-1 flex flex-col justify-center items-center">
                        <div className="relative size-48 rounded-full mb-8" style={{ background: 'conic-gradient(#30e8ab 0% 45%, #6366f1 45% 70%, #ec4899 70% 85%, #94a3b8 85% 100%)' }}>
                            <div className="absolute inset-2 bg-surface-light dark:bg-surface-dark rounded-full flex items-center justify-center">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-slate-900 dark:text-white">124</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold mt-1">Tarefas</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full space-y-3">
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="size-3 rounded-full bg-primary"></div>
                                    <span className="text-slate-600 dark:text-slate-300">Desenvolvimento</span>
                                </div>
                                <span className="font-bold text-slate-900 dark:text-white">45%</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="size-3 rounded-full bg-indigo-500"></div>
                                    <span className="text-slate-600 dark:text-slate-300">Design</span>
                                </div>
                                <span className="font-bold text-slate-900 dark:text-white">25%</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="size-3 rounded-full bg-pink-500"></div>
                                    <span className="text-slate-600 dark:text-slate-300">Reuniões</span>
                                </div>
                                <span className="font-bold text-slate-900 dark:text-white">15%</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="size-3 rounded-full bg-slate-400"></div>
                                    <span className="text-slate-600 dark:text-slate-300">Outros</span>
                                </div>
                                <span className="font-bold text-slate-900 dark:text-white">15%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-surface-border shadow-sm overflow-hidden mb-12">
                <div className="p-6 border-b border-slate-200 dark:border-surface-border flex justify-between items-center">
                    <h3 className="text-slate-900 dark:text-white text-xl font-bold">Sessões de Foco Recentes</h3>
                    <a className="text-primary text-sm font-bold hover:underline" href="#">Ver Tudo</a>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-500 dark:text-slate-400">
                        <thead className="bg-slate-50 dark:bg-slate-800/50 text-xs uppercase text-slate-700 dark:text-slate-300">
                            <tr>
                                <th className="px-6 py-3 font-semibold" scope="col">Nome da Tarefa</th>
                                <th className="px-6 py-3 font-semibold" scope="col">Categoria</th>
                                <th className="px-6 py-3 font-semibold" scope="col">Duração</th>
                                <th className="px-6 py-3 font-semibold" scope="col">Data</th>
                                <th className="px-6 py-3 font-semibold text-right" scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-surface-border">
                            <tr className="bg-surface-light dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-surface-border/20 transition-colors">
                                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Atualização do Design System</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200">Design</span>
                                </td>
                                <td className="px-6 py-4">45m</td>
                                <td className="px-6 py-4">Hoje, 10:30</td>
                                <td className="px-6 py-4 text-right">
                                    <span className="inline-flex items-center justify-end gap-1 text-green-500 font-medium w-full">
                                        <span className="material-symbols-outlined text-[16px] leading-none">check_circle</span> Concluído
                                    </span>
                                </td>
                            </tr>
                            <tr className="bg-surface-light dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-surface-border/20 transition-colors">
                                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Preparação para Reunião com Cliente</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-200">Reuniões</span>
                                </td>
                                <td className="px-6 py-4">25m</td>
                                <td className="px-6 py-4">Hoje, 09:15</td>
                                <td className="px-6 py-4 text-right">
                                    <span className="inline-flex items-center justify-end gap-1 text-green-500 font-medium w-full">
                                        <span className="material-symbols-outlined text-[16px] leading-none">check_circle</span> Concluído
                                    </span>
                                </td>
                            </tr>
                            <tr className="bg-surface-light dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-surface-border/20 transition-colors">
                                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Correções na Integração da API</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200">Desenvolvimento</span>
                                </td>
                                <td className="px-6 py-4">1h 15m</td>
                                <td className="px-6 py-4">Ontem, 14:00</td>
                                <td className="px-6 py-4 text-right">
                                    <span className="inline-flex items-center justify-end gap-1 text-green-500 font-medium w-full">
                                        <span className="material-symbols-outlined text-[16px] leading-none">check_circle</span> Concluído
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

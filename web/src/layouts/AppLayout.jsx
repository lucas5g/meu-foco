import { Outlet } from 'react-router-dom'
import { Sidebar } from '@/components/Sidebar'
import { CreateTaskModal } from '@/components/CreateTaskModal'
import { useState } from 'react'

export function AppLayout() {
    const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false)

    return (
        <div className="flex h-screen w-full font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased overflow-hidden">
            <Sidebar onOpenTaskModal={() => setIsCreateTaskModalOpen(true)} />

            <main className="flex flex-1 flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
                {/* Mobile Header */}
                <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-background-light/80 px-4 backdrop-blur-md dark:border-slate-800 dark:bg-background-dark/80 lg:hidden">
                    <div className="flex items-center gap-3">
                        <button className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
                            <span className="material-symbols-outlined leading-none">menu</span>
                        </button>
                        <span className="text-lg font-bold text-slate-900 dark:text-white">meu foco</span>
                    </div>
                    <div className="h-8 w-8 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                        <img alt="User Avatar" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWo9rwKLKOhefFfGd_f17KB9CRSAy5BUf8rYbNdYzAs6YaccJWEYzUH8xtq_7JkPULu2lArxjRGi-xxfv2NQ0_EMh6g29OKlpsQ3CMMI2hYjsLzcAYfyMqTfntGm4HdtaqbFkc0za9K53JCz14xFxMZQCfTcuPYIXz43B7GZxGC7h7Z601hIb-O8oVCXb_hDoCjIZGU1hGttTraeKaZgRVp6oDSS5H_bcLk9QHDNS0Zmz4W_u3LWPaFiG3P7tOjmxQwg1Xm7x8cLWz" />
                    </div>
                </header>

                <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col p-4 sm:p-6 lg:p-8">
                    <Outlet />
                </div>
            </main>

            {/* Mobile Fab Button */}
            <button
                onClick={() => setIsCreateTaskModalOpen(true)}
                className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-slate-900 shadow-lg shadow-primary/40 transition-transform hover:scale-110 active:scale-95 lg:hidden">
                <span className="material-symbols-outlined text-[32px] leading-none">add</span>
            </button>

            <CreateTaskModal isOpen={isCreateTaskModalOpen} onClose={() => setIsCreateTaskModalOpen(false)} />
        </div>
    )
}

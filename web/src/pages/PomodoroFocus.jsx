import { useState, useEffect, useRef } from 'react'

const FOCUS_TIME = 25 * 60

export function PomodoroFocus() {
    const [timeLeft, setTimeLeft] = useState(FOCUS_TIME)
    const [isRunning, setIsRunning] = useState(false)
    const [sessions, setSessions] = useState(0)
    const intervalRef = useRef(null)

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            intervalRef.current = setInterval(() => {
                setTimeLeft((t) => t - 1)
            }, 1000)
        } else if (timeLeft === 0) {
            setSessions((s) => s + 1)
            setIsRunning(false)
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [isRunning, timeLeft])

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60
    const progress = ((FOCUS_TIME - timeLeft) / FOCUS_TIME) * 100

    const circumference = 2 * Math.PI * 45
    const strokeDashoffset = circumference * (1 - progress / 100)

    const toggleTimer = () => setIsRunning(!isRunning)

    const resetTimer = () => {
        setIsRunning(false)
        setTimeLeft(FOCUS_TIME)
    }

    const skipSession = () => {
        setIsRunning(false)
        setSessions((s) => s + 1)
        setTimeLeft(FOCUS_TIME)
    }

    return (
        <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden w-full min-h-[calc(100vh-100px)]">
            <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
                <div className="w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="w-full max-w-4xl flex flex-col items-center relative z-10 space-y-12">
                <div className="text-center space-y-2 animate-fade-in-down">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-2">
                        <span className={`size-2 rounded-full bg-primary ${isRunning ? 'animate-pulse' : ''}`}></span>
                        Tarefa em Foco
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">Projeto Fênix: Integração de API</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-medium">Sessão {sessions + 1} de 4 • Tempo Total Gasto: <span className="text-primary font-semibold">{sessions * 25}m</span></p>
                </div>

                <div className="relative size-[320px] md:size-[400px] flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                        <circle className="text-slate-200 dark:text-surface-dark" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeWidth="2"></circle>
                        <circle
                            className="text-primary transition-all duration-1000 ease-linear shadow-[0_0_15px_rgba(48,232,171,0.5)]"
                            cx="50"
                            cy="50"
                            fill="transparent"
                            r="45"
                            stroke="currentColor"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                            strokeWidth="2">
                        </circle>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                        <span className="text-7xl md:text-9xl font-bold text-slate-900 dark:text-white tabular-nums tracking-tighter">
                            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                        </span>
                        <span className="text-slate-400 dark:text-slate-500 font-medium mt-2 text-lg">restantes</span>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-8 w-full max-w-md">
                    <div className="flex items-center gap-4">
                        <button className="group flex items-center justify-center px-4 py-2 rounded-lg bg-surface-dark border border-surface-border text-slate-300 hover:text-white hover:border-primary/50 transition-all cursor-pointer">
                            <span className="material-symbols-outlined text-sm mr-1 leading-none">remove</span>
                            <span className="text-sm font-semibold">5m</span>
                        </button>
                        <span className="text-slate-500 text-xs font-medium uppercase tracking-widest">Ajustar</span>
                        <button className="group flex items-center justify-center px-4 py-2 rounded-lg bg-surface-dark border border-surface-border text-slate-300 hover:text-white hover:border-primary/50 transition-all cursor-pointer">
                            <span className="material-symbols-outlined text-sm mr-1 leading-none">add</span>
                            <span className="text-sm font-semibold">5m</span>
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-6">
                        <button
                            onClick={resetTimer}
                            aria-label="Reiniciar Temporizador"
                            className="size-14 rounded-full flex items-center justify-center bg-slate-100 dark:bg-surface-dark text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-surface-border hover:text-slate-900 dark:hover:text-white transition-all transform hover:scale-105 cursor-pointer" title="Reiniciar">
                            <span className="material-symbols-outlined text-2xl leading-none">restart_alt</span>
                        </button>
                        <button
                            onClick={toggleTimer}
                            aria-label="Iniciar/Pausar Temporizador"
                            className="size-20 rounded-full flex items-center justify-center bg-primary text-slate-900 hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(48,232,171,0.4)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer" title="Iniciar/Pausar">
                            <span className="material-symbols-outlined text-4xl fill-current font-bold leading-none">{isRunning ? 'pause' : 'play_arrow'}</span>
                        </button>
                        <button
                            onClick={skipSession}
                            aria-label="Pular Intervalo"
                            className="size-14 rounded-full flex items-center justify-center bg-slate-100 dark:bg-surface-dark text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-surface-border hover:text-slate-900 dark:hover:text-white transition-all transform hover:scale-105 cursor-pointer" title="Pular Intervalo">
                            <span className="material-symbols-outlined text-2xl leading-none">skip_next</span>
                        </button>
                    </div>
                </div>

                <div className="w-full max-w-2xl mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-surface-dark rounded-xl p-4 border border-slate-100 dark:border-surface-border flex items-center gap-4 transition-colors hover:border-primary/20 cursor-pointer">
                        <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined leading-none">list_alt</span>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase">Próxima Tarefa</p>
                            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">Revisar comentários do PR</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-surface-dark rounded-xl p-4 border border-slate-100 dark:border-surface-border flex items-center gap-4 transition-colors hover:border-primary/20">
                        <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined leading-none">trending_up</span>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase">Foco Hoje</p>
                            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Meta 4h 30m (50%)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppLayout } from '@/layouts/AppLayout'
import { TaskDashboard } from '@/pages/TaskDashboard'
import { ProjectsList } from '@/pages/ProjectsList'
import { PomodoroFocus } from '@/pages/PomodoroFocus'
import { Statistics } from '@/pages/Statistics'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to="/tarefas" replace />} />
          <Route path="/tarefas" element={<TaskDashboard />} />
          <Route path="/projetos" element={<ProjectsList />} />
          <Route path="/pomodoro" element={<PomodoroFocus />} />
          <Route path="/estatisticas" element={<Statistics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

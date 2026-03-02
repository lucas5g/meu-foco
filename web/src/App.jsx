import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppLayout } from '@/layouts/AppLayout'
import { TaskDashboard } from '@/pages/TaskDashboard'
import { ProjectsList } from '@/pages/ProjectsList'
import { Statistics } from '@/pages/Statistics'
import { PomodoroFocus } from '@/pages/PomodoroFocus'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to="/tarefas" replace />} />
          <Route path="/tarefas" element={<TaskDashboard />} />
          <Route path="/projetos" element={<ProjectsList />} />
          <Route path="/estatisticas" element={<Statistics />} />
        </Route>
        <Route path="/foco" element={<PomodoroFocus />} />
        <Route path="/foco/:taskId" element={<PomodoroFocus />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

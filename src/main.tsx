import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../declaration.d.ts'
import './index.css'
import { AllCommandsPage } from './pages/AllCommandsPage/AllCommandsPage'
import { HomePage } from './pages/HomePage/HomePage'
import { NewCommandPage } from './pages/NewCommandPage/NewCommandPage'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/newCommand' element={<NewCommandPage />} />
          <Route path='/allCommands' element={<AllCommandsPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)

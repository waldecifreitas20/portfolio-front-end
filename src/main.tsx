import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StaticContentProvider } from './providers/StaticContentProvider.tsx'
import { ProjectProvider } from './providers/TechnologyProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StaticContentProvider>
      <ProjectProvider>
        <App />
      </ProjectProvider>
    </StaticContentProvider>
  </StrictMode>,
)

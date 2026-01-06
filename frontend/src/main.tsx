import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroUIProvider } from "@heroui/react"
import { AuthProvider } from './context/authContext.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <HeroUIProvider>
        <App />
      </HeroUIProvider>
    </AuthProvider>
  </StrictMode>,
)
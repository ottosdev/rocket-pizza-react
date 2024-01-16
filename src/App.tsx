import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from '@/components/theme/theme-provider.tsx'
import { router } from '@/routes/routes.tsx'
export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="rocketapp-theme" defaultTheme="dark">
        <Toaster richColors position="top-right" />
        <Helmet titleTemplate="%s | Rocket App" />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}

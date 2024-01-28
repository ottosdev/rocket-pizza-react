import './global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from '@/components/theme/theme-provider.tsx'
import { queryClient } from '@/lib/react-query.ts'
import { router } from '@/routes/routes.tsx'
export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="rocketapp-theme" defaultTheme="dark">
        <Toaster richColors position="bottom-right" />
        <Helmet titleTemplate="%s | Rocket App" />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}

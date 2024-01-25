import { createBrowserRouter } from 'react-router-dom'

import { PrivateLayout } from '@/pages/_layout/private.tsx'
import { PublicLayout } from '@/pages/_layout/public.tsx'
import { NotFound } from '@/pages/404.tsx'
import { Dashboard } from '@/pages/private/dashboard/dashboard.tsx'
import { Orders } from '@/pages/private/orders/orders.tsx'
import { Signup } from '@/pages/public/sign-up'
import { Signin } from '@/pages/public/signin.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },

  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { path: '/sign-in', element: <Signin /> },
      { path: '/sign-up', element: <Signup /> },
    ],
  },
])

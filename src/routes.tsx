import { createBrowserRouter } from 'react-router-dom'

import { SignIn } from './pages/auth/sign-in'
import { Dashboard } from './pages/app/dashboard';
import { LayoutApp } from './pages/app/_layouts/app';
// import { LayoutAppNoEffect } from './pages/app/_layouts/app-no-effect';

export const router = createBrowserRouter([
  {
    path: '/sign-in',
    element: <SignIn />
  },
  {
    path: '/app',
    // element: <LayoutAppNoEffect />,
    element: <LayoutApp />,
    children: [
      {
        path: '/app/dashboard',
        element: <Dashboard />
      }
    ],
  }
])

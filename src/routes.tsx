import { createBrowserRouter } from 'react-router-dom'

import { SignIn } from './pages/auth/sign-in'
import { Dashboard } from './pages/app/dashboard';
import { LayoutApp } from './pages/app/_layouts/app';

export const router = createBrowserRouter([
  {
    path: '/',
    //element: <><p>teste 2</p></>,
    //errorElement: <NotFound />,
    children: [
      {
        path: 'sign-in',
        element: <SignIn />
      },
      {
        path: 'app',
        element: <LayoutApp />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />
          }
        ]
      }
    ],
  }
])

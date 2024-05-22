import { router } from './routes'
import { RouterProvider } from 'react-router-dom'

export function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

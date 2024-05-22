import { Outlet, Navigate } from "react-router-dom";

export function LayoutAppNoEffect() {
  const isAuthenticated = false;  

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />
  }

  return (
    <div>
      <Outlet />
    </div>
  )
}
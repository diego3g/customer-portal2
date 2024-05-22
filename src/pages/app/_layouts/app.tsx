import { useLayoutEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function LayoutApp() {
  const navigate = useNavigate();
  const isAuthenticated = false;  

  useLayoutEffect(() => {
    if (isAuthenticated) {
      navigate('/app/dashboard')
    } else {
      navigate('/sign-in')
    }
  }, [navigate])
  
  return (
    <div>
      <Outlet />
    </div>
  )
}
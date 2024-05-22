import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function LayoutApp() {
  const navigate = useNavigate();
  const isAuthenticated = false;  

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/app/dashboard')
    } else {
      navigate('/sign-in')
    }
  }, [isAuthenticated, navigate])
  
  return (
    <div>
      <Outlet />
    </div>
  )
}
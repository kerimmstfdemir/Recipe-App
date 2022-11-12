import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
    const loginInformation = false; 
  return (
    <div>
        {loginInformation ? <Navigate to={"/home"} /> : <Outlet />}
    </div>
  )
}

export default PrivateRouter;
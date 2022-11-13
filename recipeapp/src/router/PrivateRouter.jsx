import { Navigate, Outlet } from "react-router-dom";
import { MainContext } from "../context/context";
import { useContext } from "react";

const PrivateRouter = () => {
  const {data:{loginInformation}}= useContext(MainContext);
  return (
    <div>
        {loginInformation ? <Navigate to={"/home"} /> : <Outlet />}
        
    </div>
  )
}

export default PrivateRouter;
import { Navigate, Outlet } from "react-router-dom";
import { MainContext } from "../context/context";
import { useContext } from "react";

const PrivateRouter = () => {
  const {data:{loginInformation}}= useContext(MainContext);
  return (
    <div>
        {loginInformation ? <Outlet /> : <Navigate to={"/"} /> }
        
    </div>
  )
}

export default PrivateRouter;
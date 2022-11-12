import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useReducer } from "react";
import { initalState, reducer } from "../reducer";

const PrivateRouter = () => {
    const [state, dispatch] = useReducer(reducer, initalState);
    const { loginInformation } = state;
    useEffect(() => {
        dispatch({type:"LOGIN"})
    }, []);
    
    // const loginInformation = false; 
  return (
    <div>
        {loginInformation ? <Navigate to={"/home"} /> : <Outlet />}
    </div>
  )
}

export default PrivateRouter;
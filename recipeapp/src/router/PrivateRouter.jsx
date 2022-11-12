import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import { initalState, reducer } from "../reducer";


const PrivateRouter = () => {
    const [didMount, setDidMount] = useState(false)
    const [state, dispatch] = useReducer(reducer, initalState);
    const { loginInformation } = state;
    useEffect(() => {
        dispatch({type:"LOGIN"});
        setDidMount(true)
    }, []);
   
  return (
    <div>
        {loginInformation ? <Navigate to={"/home"} /> : <Outlet />}
    </div>
  )
}

export default PrivateRouter;
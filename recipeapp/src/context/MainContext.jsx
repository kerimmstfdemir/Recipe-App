import { createContext, useReducer } from "react";
import { initalState, reducer } from "./reducer";

// const [state, dispatch] = useReducer(reducer, initalState);

export const LoginContext = createContext();

const MainContext = ({children}) => {
    const data = useReducer(reducer, initalState);
  return (
    <LoginContext.Provider value={data}>
        {children}
    </LoginContext.Provider>
  )
}

export default MainContext

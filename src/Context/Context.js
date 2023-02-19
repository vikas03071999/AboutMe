import { createContext, useReducer } from "react";
import { ActiveClassReducer } from "./Reducer";
const INITIAL_STATE = {
    activeClass : "Home"
}


export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(ActiveClassReducer,INITIAL_STATE);

    return (
        <Context.Provider value = {
            {
                activeClass : state.activeClass,
                dispatch
            }
        }>
            {children}
        </Context.Provider>
    )
}
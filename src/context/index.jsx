import {createContext, useContext, useReducer} from "react";

const Context = createContext();

// eslint-disable-next-line
const ContextProvider = ({initialState, reducer, children}) => {
    return <Context.Provider value={useReducer(reducer, initialState)}>{children}</Context.Provider>;
}

export const useStateValue = () => useContext(Context);
export default ContextProvider;
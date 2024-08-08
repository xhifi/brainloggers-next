"use client";

import { useReducer, createContext } from "react";
import { initialState, globalReducer } from "./globalReducer";

const GlobalContext = createContext(initialState);

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, GlobalContextProvider };

import { GlobalContext } from "@/contexts/GlobalContext/GlobalContext";
import { useContext } from "react";

/**
 * @returns {object} context - The context object
 *
 * @description
 * This hook allows you to access the global context object.
 * It is useful for accessing global state and functions.
 *
 * @example
 * const { state, dispatch } = useGlobalContext();
 *
 * // You can now access the state and dispatch functions
 */
const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalContextProvider");
  }
  return context;
};

export default useGlobalContext;

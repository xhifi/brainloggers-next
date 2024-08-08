import { GlobalContextProvider } from "./GlobalContext/GlobalContext";
import { ThemeProvider } from "next-themes";

const ContextsProvider = ({ children }) => {
  return (
    <GlobalContextProvider>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </GlobalContextProvider>
  );
};

export default ContextsProvider;

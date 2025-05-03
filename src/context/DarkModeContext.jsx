import { createContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const DarkModeContext = createContext();

export default function DarkModeContextProvider({ children }) {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
    const handleDarkModeChange = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("darkMode");
    } else {
      document.documentElement.classList.remove("darkMode");
    }
  }, [darkMode]);

    return (
        <DarkModeContext.Provider value={{ darkMode, handleDarkModeChange }}>
            {children}
        </DarkModeContext.Provider>
    )
}
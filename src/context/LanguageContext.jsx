import { createContext } from "react";
import { englishWords } from "../assets/EnglishData";
import { turkishWords } from "../assets/TurkishData";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const LanguageContext = createContext();

export default function LanguageContextProvider({ children }) {
    const [language, setLanguage] = useLocalStorage("language", "en");
    const words = language === "en" ? englishWords : turkishWords;

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "tr" : "en")
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, words }}>
            {children}
        </LanguageContext.Provider>
    )
}
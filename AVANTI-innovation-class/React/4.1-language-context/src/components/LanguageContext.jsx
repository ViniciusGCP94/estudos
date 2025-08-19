import { createContext, useState, useContext } from "react"


const LanguageContext = createContext(); 

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState("pt-BR");
    const changeLanguage = () => {
        setLanguage(prevLanguage => prevLanguage === "pt-BR" ? "en-US" : "pt-BR");
    }
    return (
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext);





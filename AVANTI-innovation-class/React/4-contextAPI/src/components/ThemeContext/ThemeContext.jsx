import {createContext, useContext, useState} from 'react'

// 1. Criar o contexto
const ThemeContext = createContext()

// 2. Criar o Provider
export function ThemeProvider({children}) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

// 3. Criar hook customizado para consumir o contexto // Consumer
export function useTheme () {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error ("useTheme deve ser usado dentro de um ThemeProvider")
    }

    return context
}
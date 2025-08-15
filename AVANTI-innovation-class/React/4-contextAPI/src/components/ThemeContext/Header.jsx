import React from 'react'
import { useTheme } from './ThemeContext'

const Header = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <>
            <h1>Tema da Aplicação : {theme}</h1>
            <button onClick={toggleTheme}>Tema</button>
        </>
    )
}

export default Header
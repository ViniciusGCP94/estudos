import React from 'react'
import { useLanguage } from './LanguageContext'

const Header = () => {
    const { language, changeLanguage } = useLanguage();

    return (
        <header>
            <h1>
                {language === "pt-BR" ? "Olá, Mundo!" : "Hello, World!"}
            </h1>
            <button onClick={changeLanguage}>
                {language === "pt-BR" ? "Mudar para Inglês" : "Switch to Portuguese"}
            </button>
        </header>
    )
}

export default Header
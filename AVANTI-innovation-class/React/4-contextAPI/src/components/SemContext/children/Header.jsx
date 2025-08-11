import React from 'react'

const Header = ({theme, toggleTheme}) => {
    return (
        <header>
            <h1>Tema da Aplicação : {theme}</h1>
            <button onClick={toggleTheme}>
                Tema
            </button>
        </header>
    )
}

export default Header
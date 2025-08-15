import React from 'react'
import { useTheme } from './ThemeContext'

const Content = () => {
    const { theme } = useTheme()

    return (
        <main>
            <p>O tema utiliza é o {theme}</p>
        </main>
    )
}

export default Content
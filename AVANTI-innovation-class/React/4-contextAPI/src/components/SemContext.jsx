import React from 'react'
import Header from './SemContext/Header'
import Content from './SemContext/Content'
import { useState } from 'react'

const SemContext = () => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
        
    };
      
    return (
      <>
        <div className={`app ${theme}`}>
          <Header theme={theme} toggleTheme={toggleTheme}/>
          <Content theme={theme}/>
        </div>
      </>
    )
    
}

export default SemContext
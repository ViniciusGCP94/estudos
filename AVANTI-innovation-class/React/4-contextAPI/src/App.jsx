import { ThemeProvider, useTheme } from './components/ThemeContext/ThemeContext'
import Header from './components/ThemeContext/Header'
import Content from './components/ThemeContext/Content'
import './App.css'

{/*import SemContext from './components/SemContext'*/}

const ThemedApp = () => {
  const { theme } = useTheme()

  return(
    <div className={`app ${theme}`}>
      <Header />
      <Content>
      </Content>
    </div>
  )
}


function App() {

    return (
      <>
        {/*<SemContext />*/}
        <ThemeProvider>
         <ThemedApp></ThemedApp>
        </ThemeProvider>
      </>
    )
    
}

export default App

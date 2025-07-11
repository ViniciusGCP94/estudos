import React from 'react'
import './App.css'
import TextComponents from './components/textComponents.jsx'
import { SecondTitle, ThirdTitle } from './components/OtherComponent.jsx'

function App() {
  

  return (
    <>
      
        <TextComponents text="Meu Primeiro h1" descricao="descrição do Primeiro título"/>
        <TextComponents text="Meu Segundo h1" descricao="descrição do Segundo título"/>
        <TextComponents text="Meu Terceiro h1" descricao="descrição do Terceiro título"/>
        <SecondTitle />
        <ThirdTitle />
        
    </>
  )
}

export default App

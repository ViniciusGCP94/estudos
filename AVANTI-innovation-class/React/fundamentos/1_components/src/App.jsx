import React from 'react'
import './App.css'
import TextComponents from './components/textComponents.jsx'
import { SecondTitle, ThirdTitle } from './components/OtherComponent.jsx'
import Events from './components/Events.jsx'
import CssInlineComponent from './components/MyCSSComponent/myCssInline.jsx'
import Counter from './components/Counter.jsx'
import ProductQuantity from './components/ProductQuantity.jsx'


function App() {
  

  return (
    <>  

        <h2>Quantidade do Produto</h2>
        <ProductQuantity />

        <h2>contador</h2>
        <Counter />


        <h2>Eventos</h2>
        <Events />

        <h2>Meu CSS</h2>
        <CssInlineComponent />



        <TextComponents text="Meu Primeiro h1" descricao="descrição do Primeiro título"/>
        <TextComponents text="Meu Segundo h1" descricao="descrição do Segundo título"/>
        <TextComponents text="Meu Terceiro h1" descricao="descrição do Terceiro título"/>
        <SecondTitle />
        <ThirdTitle />
        
    </>
  )
}

export default App

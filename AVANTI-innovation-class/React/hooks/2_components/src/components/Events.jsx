import React, { Fragment } from 'react'

const Events = () => {
    const handleGreating = (name) => {
        alert(`Olá ${name}` )

    }

  return (
    <>
        <button onClick={() => alert("clicado")}>Alert</button>
        <button onClick={() => handleGreating("Vinnie")}>Nome</button>
    </>
  )
}

export default Events
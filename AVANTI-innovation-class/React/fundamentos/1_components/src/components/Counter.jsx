// boilerplate automatico racfe
//importar hook useState

import React, {useEffect, useState} from 'react'


const Counter = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        document.title = `Contador: ${counter}`; // Atualiza o título do documento com o valor do contador
    },[counter])
    
    const increment = () => {
        setCounter((prevState) => prevState + 1);
    }

    const decrement = () => {
        setCounter((prevState) => prevState - 1);
    }

    return (
        <>
            <p>{counter}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </>
    )
}

export default Counter
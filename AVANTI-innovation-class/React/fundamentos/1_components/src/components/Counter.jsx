// boilerplate automatico racfe
//importar hook useState

import React, {useState} from 'react'


const Counter = () => {
    const [counter, setCounter] = useState(0)
    
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
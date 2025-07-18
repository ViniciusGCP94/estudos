import React, {useState, useEffect} from 'react'


const Clock = () => { 
    const [time, setTime] = useState(new Date().toLocaleTimeString()); // Inicializa a variável de estado 'time' com a 'hora atual'

    useEffect(() => { 
        const updateTime = setInterval (() => { // Configura um intervalo para atualizar a hora
            setTime(new Date().toLocaleTimeString()); // Atualiza o estado 'time' com a hora atual
        }, 1000); 

        return () => clearInterval(updateTime); // Limpa intervalo para evitar sobrecarga na memória

    }, []) // Array de dependências vazio significa que este efeito é executado uma vez após a renderização inicial

    return ( 
        <div>Hora Atual : {time}</div> 
    )
}

export default Clock
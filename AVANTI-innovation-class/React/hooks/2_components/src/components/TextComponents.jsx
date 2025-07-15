import React from "react";

const TextComponents = ({text, descricao}) => {
    return (
        <>
            <h1>{text}</h1>
            <p>{descricao}</p>
        </>
        
    )
}

export default TextComponents;
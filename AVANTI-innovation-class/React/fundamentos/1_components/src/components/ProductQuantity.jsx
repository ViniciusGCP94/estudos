//import react e usestate
//crie um array de objetos com os produtos e suas quantidades
//updateQuantity deve atualizar a quantidade do produto



import React, { useState } from 'react'

const ProductQuantity = () => {
    
    const [product, setProduct] = useState({
        name: 'Television',
        quantity: 1
    })

    const updateQuantity = () => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            quantity: prevProduct.quantity + 1,
        }))
    }


    return (
        <>
            <p>Nome do produto : {product.name}</p>
            <p>Quantidade :{product.quantity}</p>
            <button onClick={updateQuantity}>Atualizar Produto</button>
        </>
    )
}

export default ProductQuantity
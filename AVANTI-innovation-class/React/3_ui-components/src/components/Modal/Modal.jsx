import { useState } from "react";

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)


    return( 
        <>
            <button onClick={() => setIsOpen(true)}>Abrir Modal</button>

            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Este é um Modal</h2>
                        <p>Você pode adicionar qualquer conteúdo aqui.</p>
                        <button className="close" onClick={() => setIsOpen(false)}>Fechar</button>
                    </div>
                </div>
            )}
        </>
    )
};

export default Modal;

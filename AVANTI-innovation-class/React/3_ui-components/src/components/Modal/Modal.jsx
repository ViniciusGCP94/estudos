import { useState } from "react";
import styles from "./Modal.module.css"; 

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)


    return( 
        <div className={styles.container}>
            <button onClick={() => setIsOpen(true)} className={styles.open__Button}>Abrir Modal</button>

            {isOpen && (
                <div className={styles.modal__container}>
                    <div className={styles.modal__content}>
                        <h2>Este é um Modal</h2>
                        <p>Você pode adicionar qualquer conteúdo aqui.</p>
                        <button onClick={() => setIsOpen(false)} className={styles.close__Button}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Modal;

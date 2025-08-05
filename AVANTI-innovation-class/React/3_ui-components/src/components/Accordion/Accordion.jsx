import {useState} from 'react'
import styles from './Accordion.module.css'

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }

    //constante de items ela será um array de 3 objetos(item) com pergunta e resposta
    const items = [
        { question: "O que é React?", answer: "React é uma biblioteca JavaScript para construir interfaces de usuário." },
        { question: "O que é um componente?", answer: "Um componente é uma parte reutilizável da interface de usuário." },
        { question: "Como funciona o estado no React?", answer: "O estado é um objeto que representa os dados de um componente e pode ser alterado ao longo do tempo." }
    ];


    return (
        <div className={styles.accordion}>
            {/* Faça uma mapeamento na constante items para exibir cada um separadamente*/}
            {items.map((item, index) => (
                //* Dentro do map diagrame a estrutura que ele vai ficar*/}
                <div key={index} className={`${styles.item} ${activeIndex === index ? styles.open : '' }`}>
                    {/* Um botão toggle com a pergunta do array nele, quando clicar deve aparecer ... abaixo*/}
                    <button 
                        className={styles.button} 
                        onClick={() => toggleAccordion(index)}
                    >
                        {item.question}
                    </button>
                    {/* deve aparecer a resposta da pergunta aqui*/}
                    {activeIndex === index && (
                        <div className={styles.answer}>
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Accordion
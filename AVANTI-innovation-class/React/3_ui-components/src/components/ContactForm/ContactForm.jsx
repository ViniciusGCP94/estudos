import React, { useState } from 'react'
import styles from './ContactForm.module.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados do formulário
        console.log('Dados do formulário enviados:', formData);
        // Limpa o formulário após o envio
        alert('Formulário enviado com sucesso!');
        setFormData({
            nome: '',
            email: '',
            mensagem: ''
        });
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='nome'
                    placeholder='Nome'
                    className={styles.input}
                    value={formData.nome}
                    onChange={handleChange}
                    required={true}
                />

                <input 
                    type='email'
                    name='email'
                    placeholder='E-mail'
                    className={styles.input}
                    value={formData.email}
                    onChange={handleChange}
                    required={true}
                />

                <textarea 
                    name='mensagem'
                    placeholder='Digite aqui a sua mensagem'
                    className={styles.textarea}
                    value={formData.mensagem}
                    onChange={handleChange}
                    required={true}
                />

                <button type='submit' className={styles.button}>Enviar</button>
            </form>
        </>
    )
}

export default ContactForm
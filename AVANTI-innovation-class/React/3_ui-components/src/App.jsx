
import './App.css'
import Clock from './components/Clock/Clock'
import ContactForm from './components/ContactForm/ContactForm'
import Modal from './components/Modal/Modal'

function App() {
  

    return (
      <>
        <h1>UI Components</h1>
        <h2>Relógio</h2>
        <Clock />
        <hr />

        <h2>Modal</h2>
        <Modal />
        <hr />

        <h2>Formulário de contato</h2>
        <ContactForm />
      </>
    )
}

export default App

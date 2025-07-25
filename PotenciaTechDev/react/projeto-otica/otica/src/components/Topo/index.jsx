import styles from '@/components/Topo/Topo.module.css';

export default function Topo() {
  return (
    <header className={styles.header}>
        <div className='limitar-secao'>
          <img src='assets/logo.png' alt='imagem de um óculos à direita e o nome da ótica à esquerda' />

          <nav>
            <a href='#produtos'>PRODUTOS</a>
            <a href='#sobre'>SOBRE</a>
            <a href='#contato'>CONTATO</a>
          </nav>
        </div>
      </header>
  )
}
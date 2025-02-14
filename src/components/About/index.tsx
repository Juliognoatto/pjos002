import styles from "../../styles/components/About.module.scss"

function About() {

  return(
    <section className={styles.About}>
      <div className={styles.AboutImg}>
        <img src="/aboutimg.svg" alt="" />
      </div>
      <div className={styles.AboutContainer}>
        <h2>Sobre</h2>
        <p>
        A Orquestra Sanfônica, fundada em 2006 em Pato Branco, Paraná, nasceu para unir acordeonistas amadores e valorizar o acordeon por meio de performances e troca de experiências. Com o tempo, ampliou seu repertório para incluir diversos ritmos brasileiros, ganhando notoriedade com centenas de apresentações e participações em festivais nacionais e internacionais.
        A orquestra lançou três álbuns: “Releituras” (2014), “Outro Sul” (2016) e “Percurso” (2023). Dedicada ao repertório autoral e à exploração do acordeon, a Orquestra Sanfônica valoriza a diversidade de seus integrantes e mantém suas raízes populares como base para sua música e missão. 
        Além disso, é certificada como Ponto de Cultura no Estado do Paraná e reconhecida como Utilidade Pública Municipal e Estadual.
        </p>
      </div>
    </section>
  )
}

export default About
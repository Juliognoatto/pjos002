import { cardData } from "../../dataprojects"
import styles from "../../styles/components/Projects.module.scss"

function Projects() {

  return(

    <section className={styles.Projects}>
      <h2>Projetos</h2>

      {cardData.map((card) => (
        
      
      <div key={card.id} className={styles.ProjectsContainer}>

        <h3>{card.title}</h3>     
        
        <div className={styles.ProjectsContent}>
          <p>
            {card.description}
          </p>
        
          <img src="" alt="" />  
        </div>
        <ol>
          <li> <link rel="stylesheet" href="" /> </li>
          <li> <link rel="stylesheet" href="" /> </li>
        </ol>
      
      </div>
      ))}
    </section>
  )
}

export default Projects
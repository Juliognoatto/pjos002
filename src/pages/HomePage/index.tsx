import styles from "../../styles/pages/HomePage.module.scss"
import HeaderHome from "../../components/HeaderHome"
import { useRef } from 'react';
import About from "../../components/About";


function HomePage() {

  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<HTMLDivElement>(null);
  const disksRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement>) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return(
    <main className={styles.HomePage}>
      <header className={styles.Header}>
        <HeaderHome scrollToSection={scrollToSection} refs={{ projectsRef, aboutRef, recognitionRef, disksRef, contactRef }}/>
      </header>
      
      <section className={styles.ApoieaOSB}>
        <button>Apoie a OSB</button>
      </section>

      <section className={styles.AboutSection}>
        <About/>
      </section>
    </main>
  )
}

export default HomePage
import styles from "../../styles/pages/HomePage.module.scss"
import HeaderHome from "../../components/HeaderHome"
import { useRef } from 'react';


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
      <header>
        <HeaderHome scrollToSection={scrollToSection} refs={{ projectsRef, aboutRef, recognitionRef, disksRef, contactRef }}/>
      </header>
    </main>
  )
}

export default HomePage

interface HeaderProps {
  scrollToSection: (elementRef: React.RefObject<HTMLDivElement>) => void;
  refs: {
    aboutRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    recognitionRef: React.RefObject<HTMLDivElement>;
    disksRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  };
}


function HeaderHome({ scrollToSection, refs }: HeaderProps) {

  return(
      <header>
        <nav>
          <button onClick={() => scrollToSection(refs.aboutRef)}>sobre</button>
          <button onClick={() => scrollToSection(refs.projectsRef)}>Projetos</button>
          <button onClick={() => scrollToSection(refs.recognitionRef)}>Reconhecimento</button>
          <button onClick={() => scrollToSection(refs.disksRef)}>Discos</button>
          <button onClick={() => scrollToSection(refs.contactRef)}>Contato</button>
        </nav>
        <div>
          <img src="" alt="imgens passando" />
        </div>
      </header>
  )
}

export default HeaderHome
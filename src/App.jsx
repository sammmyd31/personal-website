import './App.css'

function App() {
  const name = "Sammy DeMarco";
  const profession = "Full Stack/Game Developer";
  const projects = [
    {
      title: "Turn-Based Combat Game",
      description: "A menu style, turn-based combat game in Unity featuring 8 characters with unique stats and abilities and 20+ status effects.",
      link: "https://sammmyd.itch.io/turn-based-combat-game"
    },
    {
      title: "What Remains of Me",
      description: "An ongoing 2D narrative puzzle game, worked on enhancing level 1.3 and revamping the second boss.",
      link: "https://whatremainsofme.itch.io/what-remains-of-me"
    },
    {
      title: "3D Horror Game",
      description: "A 3D first-person horror game in Unity with various complex mechanics and a stalker enemy AI.",
      link: null
    },
    {
      title: "Football Simulator",
      description: "An app in Java that allows weekly game simulation for 32 NFL teams using the JavaFX GUI and a unique scoring algorithm.",
      link: null
    }
  ]


  return (
    <div className='App'>
      {/* Header Section */}
      <header className='header'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id='about' className='about-section'>
        <h2>About Me</h2>
        <p>Hello! I am {name}, a passionate {profession}. I love building games and software that are user friendly and serve a real purpose.</p>
      </section>

      {/* Projects Section */}
      <section id='projects' className='projects-section'>
        <h2>Projects</h2>
        <div className='projects-list'>
          {projects.map((project, index) => (
            <div key={index} className='project-item'>
              <h3>{project.title}</h3>
              <h3>{project.description}</h3>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='contact-section'>
        <h2>Contact Me</h2>
        <p>Personal: <a href='mailto:sammypeter616@gmail.com'>sammypeter616@gmail.com</a></p>
        <p>School: <a href='mailto:demarco.s@northeastern.edu'>demarco.s@northeastern.edu</a></p>
      </section>

      {/* Footer Section */}
      <footer className='footer'>
        <p>2026. All Rights Reserved</p>
      </footer>

    </div>
  )
}

export default App

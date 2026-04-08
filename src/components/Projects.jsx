function Projects() {
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
    <section id='projects' className='rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-10'>
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600'>Portfolio</p>
        <h2 className='text-3xl font-bold text-slate-900 sm:text-4xl'>Projects</h2>
        <div className='mt-8 grid gap-4 sm:grid-cols-2'>
          {projects.map((project, index) => (
            <article key={index} className='rounded-xl border border-slate-200 bg-white/80 p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5'>
              <h3 className='text-lg font-semibold text-slate-900'>{project.title}</h3>
              <p className='mt-2 text-sm leading-relaxed text-slate-700'>{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='mt-4 inline-flex items-center text-sm font-semibold text-teal-700 transition-colors hover:text-teal-900'
                >
                  View Project
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
  );
}

export default Projects;
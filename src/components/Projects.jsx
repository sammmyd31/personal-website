import DefaultProjectImage from '../assets/react.svg';

function Projects() {
  const projects = [
    {
      title: "StudyQuest",
      image: DefaultProjectImage,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Rest API"],
      description: "Developed and deployed a full-stack web application enabling students to track assignments, projects, and exams across courses. Worked primarily on frontend using React and Tailwind CSS to design the UI and utilized Supabase for login and authentication. Communicated with backend via REST API as well as allowing users can search for courses using an integrated NEU Banner API. Features an analytics page where users can track their progress and compare with other users on a leaderboard.",
      projectUrl: "https://cosmic-donut-cf29e5.netlify.app/",
      githubUrl: "https://github.com/Oasis-NEU/s26-group-17",
    },
    {
      title: "ProNotes",
      image: DefaultProjectImage,
      technologies: ["C++"],
      description: "WIP mod for Geometry Dash. Currently, tracks the user's best run across all levels, displayed through a custom button on the level info screen. Developed using the Geode SDK, utilizing function hooks in the modified Cocos2d engine.",
      projectUrl: "",
      githubUrl: "https://github.com/sammmyd31/ProNotes",
    },
    {
      title: "Turn-Based Combat Game",
      image: DefaultProjectImage,
      technologies: ["Unity", "C#"],
      description: "Developed a turn-based combat game that allows users to select from 8 unique characters with unique stats and abilities. Designed to be played locally with 2 players, the game features a functioning turn cycle system where each character can perform a single move on their turn. Utilized ScriptableObjects in a data-driven design for characters and status effects. Architected an action system using PropertyDrawers that streamlines development for character and moveset creation. All moves are highly modular and customizable, allowing for reusable combat behaviors and highly efficient iteration.",
      projectUrl: "https://sammmyd.itch.io/turn-based-combat-game",
      githubUrl: "https://github.com/sammmyd31/Turn-Based-Combat-Game"
    },
    {
      title: "What Remains of Me",
      image: DefaultProjectImage,
      technologies: ["Unity", "C#", "Jira", "Git"],
      description: "Contributed to an ongoing 2D narrative puzzle game through Northeastern's Game Studio. Primarily worked in a small team on level 1.3,  focusing on reworking a significant portion of the level. We designed a short section in the middle to better introduce the laser hazard by connecting it to the lore and area it takes place in, strengthening the narrative alignment of the level. Also developed a reusable key mechanic system and provided extensive documentation on how it can be expanded for use beyond level 1.3. Outside of level 1.3, I worked with leadership to help iterate and refactor the second boss encounter, designing a unique and complex puzzle and particpating in weekly meetings.",
      projectUrl: "https://whatremainsofme.itch.io/what-remains-of-me",
      githubUrl: "https://github.com/Games-at-Northeastern/What-Remains-of-Me"
    },
    {
      title: "Level Design Final Project",
      image: DefaultProjectImage,
      technologies: ["Unity", "C#", "Git", "Substance 3D Painter", "Trello"],
      description: "Designed a game in a small team about a soldier in the Korean War who finds a strange house in the middle of a battlefield, and comes to discover the truth beyond his forgotten and traumatic past. We designed this game based of the idea of environmental progression and change to reflect and clarify the narrative of the game. In a way, the environment itself is the story, and its change represents the tonal and emotional shifts of the game. My contributions started with designing and planning the layout of the house. In engine, I worked on the interaction system and swapping textures of objects. I also used Substance 3D Painter to create textures for most models and imported these models into the scene and set them up for interaction.",
      projectUrl: "",
      githubUrl: "https://github.com/MaxoTaco/LDGA_S6"
    },
    {
      title: "Kidnapped",
      image: DefaultProjectImage,
      technologies: ["Unity", "C#", "Unity Version Control"],
      description: "A 3D first-person horror game in Unity with various complex mechanics and a stalker enemy AI. Inspired by Resident Evil, we designed a game about escaping a house by finding keys and solving puzzles, all while evading a stalker enemy AI. My main contributions were designed a finite state machine for the stalker, enabling emergent gameplay through cycling behavior states (patrol, chase, search). I also designed the layouts for each of our three levels, utlizing different layouts and designs for each level. I also worked on most other game mechanics, including doors, keys/locks, crawling, and level management.",
      projectUrl: "",
      githubUrl: ""
    },
    {
      title: "Football Simulator",
      image: DefaultProjectImage,
      technologies: ["Java", "JavaFX"],
      description: "A program in Java that allows weekly game simulation for 32 NFL teams using the JavaFX GUI and a unique scoring algorithm. Allows the user to simulate weekly scores for games, producing realistic scores using statistical averages for scoring. Each team gets a set number of drives, and each drive is simulated an an outcome of points is returned (either 0, 3, or 7). The probabilty of these is influenced by team ratings. All team information is read through a CSV file, will overalls (a decimal between 0-1) for offense and defensive ratings. The GUI also allows viewing by league, conference, and division, as well as sorting by playoff seeds.",
      projectUrl: "",
      githubUrl: ""
    }
  ];

  return (
    <section id='projects' className='rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-10'>
      <p className='mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600'>Portfolio</p>
      <h2 className='text-3xl font-bold text-slate-900 sm:text-4xl'>Projects</h2>
      <div className='mt-8 grid gap-5 sm:grid-cols-2'>
        {projects.map((project) => (
          <article key={project.title} className='overflow-hidden rounded-xl border border-slate-200 bg-white/90 shadow-sm transition-transform duration-200 hover:-translate-y-0.5'>
            <img
              src={project.image || DefaultProjectImage}
              alt={`${project.title} preview`}
              className='h-40 w-full bg-slate-100 object-cover'
            />

            <div className='space-y-4 p-5'>
              <div className='flex items-start justify-between gap-3'>
                <h3 className='text-lg font-semibold text-slate-900'>{project.title}</h3>
                <div className='flex shrink-0 items-center gap-2'>
                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center rounded-md bg-teal-600 px-2.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-teal-700'
                    >
                      View Project
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center rounded-md border border-slate-300 px-2.5 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900'
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              <ul className='flex flex-wrap gap-2'>
                {project.technologies.map((technology) => (
                  <li key={technology} className='rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600'>
                    {technology}
                  </li>
                ))}
              </ul>

              <p className='text-sm leading-relaxed text-slate-700'>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
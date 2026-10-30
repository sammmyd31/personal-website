import ProjectSection from './ProjectCard';
import badTidesImage from '../assets/badtidesimage.jpg';
import turnBasedImage from '../assets/turnbased.png';
import lgdaImage from '../assets/lgdaimage.png';
import whatRemainsImage from '../assets/whatremainsofme.jpg';
import kidnappedImage from '../assets/kidnapped.png';
import chip8Image from '../assets/chip8.png';
import studyQuestImage from '../assets/studyquest.png';

const games = [
  {
    id: "bad-tides",
    image: badTidesImage,
    title: "Bad Tides",
    year: "2026",
    technologies: ["Unity", "C#", "Unity Behavior Graphs", "PurrNet", "URP", "Crest"],
    description: "Bad Tides is a 4-player online co-op pirate adventure from indie studio Crouton Games. Players assemble a crew and sail a procedurally generated open sea, using swords, guns, and whatever else they can find to fight giant sea monsters. You can also fish with different bait to lure mythical creatures into battle, and hunt for sunken wrecks and buried treasure.\n\nDeveloped gameplay systems in Unity and C# as part of a 4-programmer team, and helped ship a demo for Steam Next Fest ahead of the game's Early Access release.\n\nDesigned AI behavior for monsters using Unity Behavior Graphs, with custom action nodes for target selection, retreating, and circling, as well as line of sight player detection with a dynamic FOV that adjusts its width based on distance.\n\n Also created an object-pooled audio manager with data-driven clip configurations for overlapping, fading and pitch. Implemented surface-aware footsteps using raycast material detection as well as per-player voice chat volume through pooled AudioMixer groups using PurrNet.\n\nBuilt an event-driven settings system persisted with PlayerPrefs, including runtime graphics tiers that swap URP assets. They also adjust water settings using Crest, and seperate options handle shadows and render scale. Additional features include voice chat modes and rebindable controls.",
    projectUrl: "https://store.steampowered.com/app/4336090/Bad_Tides/",
    githubUrl: "",
  },
  {
    id: "turn-based-combat",
    image: turnBasedImage,
    title: "Turn-Based Combat Game",
    year: "2025",
    technologies: ["Unity", "C#", "ScriptableObjects", "PropertyDrawers"],
    description: "Developed a turn-based combat game that allows users to select from 8 unique characters with unique stats and abilities. Designed to be played locally with 2 players, the game features a functioning turn cycle system where each character can perform a single move on their turn.\n\nUtilized ScriptableObjects in a data-driven design for characters and the 23 unique status effects. Architected an action system using PropertyDrawers that streamlines development for character and moveset creation. All moves are highly modular and customizable, allowing for reusable combat behaviors and highly efficient iteration.",
    projectUrl: "https://sammmyd.itch.io/turn-based-combat-game",
    githubUrl: "https://github.com/sammmyd31/Turn-Based-Combat-Game",
  },
  {
    id: "level-design",
    image: lgdaImage,
    title: "Level Design Final Project",
    year: "2025",
    technologies: ["Unity", "C#", "Git", "Substance 3D Painter", "Trello"],
    description: "Designed a game in a small team about a soldier in the Korean War who finds a strange house in the middle of a battlefield, and comes to discover the truth beyond his forgotten and traumatic past.\n\nWe designed this game based on the idea of environmental progression and change to reflect and clarify the narrative of the game. In a way, the environment itself is the story, and its change represents the tonal and emotional shifts of the game.\n\nMy contributions started with designing and planning the layout of the house. In engine, I worked on the interaction system and swapping textures of objects. I also used Substance 3D Painter to create textures for most models and imported these models into the scene and set them up for interaction.",
    projectUrl: "https://play.unity.com/en/games/48e05007-c6cf-416a-8985-f0faa6aa3258/ldga-final",
    githubUrl: "https://github.com/MaxoTaco/LDGA_S6",
  },
  {
    id: "what-remains-of-me",
    image: whatRemainsImage,
    title: "What Remains of Me",
    year: "2025",
    technologies: ["Unity", "C#", "Jira", "Git/GitHub"],
    description: "Contributed to an ongoing 2D narrative puzzle game through Northeastern's Game Studio, a 40-person team using Agile/Scrum with weekly sprint and discipline meetings.\n\nPrimarily worked in a small team on level 1.3, focusing on reworking a significant portion of the level. We designed a short section in the middle to better introduce the laser hazard by connecting it to the lore and area it takes place in, strengthening the narrative alignment of the level.\n\nAlso developed a reusable key mechanic system and provided extensive documentation on how it can be expanded for use beyond level 1.3.\n\nOutside of level 1.3, I worked with leadership to help iterate and refactor the second boss encounter, designing a unique and complex puzzle.",
    projectUrl: "https://whatremainsofme.itch.io/what-remains-of-me",
    githubUrl: "https://github.com/Games-at-Northeastern/What-Remains-of-Me",
  },
  {
    id: "kidnapped",
    image: kidnappedImage,
    title: "Kidnapped",
    year: "2025",
    technologies: ["Unity", "C#", "Unity Version Control"],
    description: "A 3D first-person horror game in Unity with various complex mechanics and a stalker enemy AI. Inspired by Resident Evil, we designed a game about escaping a house by finding keys and solving puzzles, all while evading a stalker enemy AI.\n\nMy main contributions were designing a finite state machine for the stalker, enabling emergent gameplay through cycling behavior states (patrol, chase, search).\n\nI also designed the layouts for each of our three levels, utilizing different layouts and designs for each level.\n\nI also worked on most other game mechanics, including doors, keys/locks, crawling, and level management.",
    projectUrl: "https://www.youtube.com/watch?v=EoDBRGPooMM",
    githubUrl: "",
  },
];

const software = [
  {
    id: "chip-8",
    image: chip8Image,
    pixelArt: true,
    title: "CHIP-8 Interpreter",
    year: "2026",
    technologies: ["C++", "SDL2"],
    description: "Developed a fully functional CHIP-8 interpreter in C++ that runs classic CHIP-8 games, built according to the CHIP-8 specification and using SDL2 for graphics and input. Implemented the complete instruction set, accurately emulating the fetch-decode-execute cycle across all 35 opcodes. Designed the interpreter with a configurable clock speed, allowing games to be run at the pace that suits them best. Validated edge case correctness by passing multiple test suite ROMs and confirming correct behavior in CHIP-8 games.",
    projectUrl: "",
    githubUrl: "https://github.com/sammmyd31/CHIP-8-Interpreter",
  },
  {
    id: "studyquest",
    image: studyQuestImage,
    title: "StudyQuest",
    year: "2026",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "REST API"],
    description: "Developed and deployed a full-stack web application enabling students to track assignments, projects, and exams across courses, and presented it at Oasis Demo Day. Worked primarily on the frontend using React and Tailwind CSS to design the UI, and used Supabase for login and authentication. Communicated with the backend via a REST API, and users can search for courses using an integrated NEU Banner API. Features an analytics page where users can track their progress and compare with other users on a leaderboard.",
    projectUrl: "https://cosmic-donut-cf29e5.netlify.app/",
    githubUrl: "https://github.com/Oasis-NEU/s26-group-17",
  },
];

function GroupBanner({ title, count }) {
  return (
    <div className='border-y border-neutral-700 bg-neutral-900 px-4 py-16 text-center sm:px-8 lg:px-16'>
      <p className='text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400'>{count} projects</p>
      <h2 className='mt-2 text-4xl font-bold text-neutral-50 sm:text-6xl'>{title}</h2>
    </div>
  );
}

function Projects() {
  return (
    <>
      <div id='games'>
        <GroupBanner title='Games' count={games.length} />
        {games.map((project, index) => (
          <ProjectSection key={project.id} project={project} group='Games' index={index} total={games.length} />
        ))}
      </div>
      <div id='software'>
        <GroupBanner title='Software' count={software.length} />
        {software.map((project, index) => (
          <ProjectSection key={project.id} project={project} group='Software' index={index} total={software.length} />
        ))}
      </div>
    </>
  );
}

export default Projects;

import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import DefaultProjectImage from '../assets/react.svg';

function ProjectSection({ project, group, index, total }) {
  const hasImage = Boolean(project.image);
  const flipped = index % 2 === 1;

  return (
    <section
      id={project.id}
      className={`flex min-h-[calc(100vh-3.5rem)] items-center px-4 py-12 sm:px-8 lg:px-16 ${index % 2 === 0 ? 'bg-neutral-950' : 'bg-neutral-900/60'}`}
    >
      <article className='mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16'>
        <div className={`flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-lg shadow-black/30 ${flipped ? 'lg:order-2' : ''}`}>
          <img
            src={project.image || DefaultProjectImage}
            alt={`${project.title} preview`}
            loading='lazy'
            className={hasImage ? `h-full w-full ${project.pixelArt ? 'object-contain [image-rendering:pixelated]' : 'object-cover'}` : 'h-1/2 w-1/2 object-contain'}
          />
        </div>

        <div className='flex flex-col gap-5'>
          <p className='text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400'>
            {group} · {index + 1} of {total} · <span className='text-neutral-500'>{project.year}</span>
          </p>
          <h2 className='text-3xl font-bold text-neutral-50 sm:text-5xl'>{project.title}</h2>

          {project.technologies.length > 0 && (
            <ul className='flex flex-wrap gap-2' aria-label='Skills used'>
              {project.technologies.map((technology) => (
                <li key={technology} className='rounded-full border border-neutral-700 bg-neutral-800/70 px-3 py-1 text-xs font-medium text-neutral-300'>
                  {technology}
                </li>
              ))}
            </ul>
          )}

          <p className='whitespace-pre-line text-base leading-7 text-neutral-300'>{project.description}</p>

          {(project.projectUrl || project.githubUrl) && (
            <div className='flex flex-wrap items-center gap-3 pt-1'>
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 rounded-lg bg-neutral-100 px-4 py-2.5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-white'
                >
                  Visit Project
                  <FiExternalLink size={15} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 rounded-lg border border-neutral-600 px-4 py-2.5 text-sm font-semibold text-neutral-200 transition-colors hover:border-neutral-400 hover:text-white'
                >
                  <FaGithub size={15} />
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </section>
  );
}

export default ProjectSection;

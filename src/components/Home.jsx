import Portrait from '../assets/headshot.jpeg';
import { FaLinkedin, FaGithub, FaItchIo, FaChevronDown } from 'react-icons/fa';

function Home() {
  const resumeLink = 'https://drive.google.com/file/d/1meVtcvKoy4damLZ4JYkqloHtgkkgz2N0/view?usp=sharing';

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sammy-demarco-459398356/', icon: FaLinkedin },
    { label: 'GitHub', href: 'https://github.com/sammmyd31', icon: FaGithub },
    { label: 'Itch', href: 'https://sammmyd.itch.io/', icon: FaItchIo },
  ];

  return (
    <section id='about' className='relative flex min-h-[calc(100vh-3.5rem)] items-center px-4 pb-28 pt-12 sm:px-8 lg:px-16'>
      <div className='mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16'>
        <div className='space-y-6'>
          <div>
            <p className='mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400'>About</p>
            <h1 className='text-4xl font-bold leading-tight text-neutral-50 sm:text-6xl'>
              Hello! I'm Sammy.
            </h1>
          </div>
          <p className='text-xl font-medium text-neutral-300'>
            I am a Computer Science and Game Development student at Northeastern University.
          </p>
          <p className='max-w-2xl text-base leading-relaxed text-neutral-400'>
            I am an aspiring developer with interests in game development and software engineering. I have a huge passion for video games, and I love to build things that are creative and meaningful.
          </p>
          <div className='flex flex-wrap items-center gap-3'>
            <a
              href={resumeLink}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex h-11 items-center justify-center rounded-lg bg-neutral-100 px-5 text-sm font-semibold text-neutral-950 transition-colors duration-200 hover:bg-white'
            >
              Resume
            </a>
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={link.label}
                  title={link.label}
                  className='inline-flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-700 text-neutral-300 transition-colors duration-200 hover:border-neutral-400 hover:text-white'
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
        <img
          src={Portrait}
          alt="Sammy DeMarco"
          className='aspect-square w-64 justify-self-center rounded-2xl object-cover shadow-lg shadow-black/40 md:w-full'
        />
      </div>
      <a
        href='#games'
        aria-label='Scroll down to projects'
        className='absolute bottom-6 left-1/2 -translate-x-1/2 text-sm font-semibold text-neutral-400 transition-colors hover:text-white'
      >
        <span className='flex animate-bounce flex-col items-center gap-2'>
          View my projects
          <span className='flex h-10 w-10 items-center justify-center rounded-full border border-neutral-600 bg-neutral-900'>
            <FaChevronDown size={14} />
          </span>
        </span>
      </a>
    </section>
  );
}

export default Home;

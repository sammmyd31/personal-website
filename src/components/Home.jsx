import Portrait from '../assets/headshot.jpeg';
import { FaLinkedin, FaGithub, FaItchIo } from 'react-icons/fa';

function Home() {
  const resumeLink = 'https://drive.google.com/file/d/1meVtcvKoy4damLZ4JYkqloHtgkkgz2N0/view?usp=sharing';

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sammy-demarco-459398356/', icon: FaLinkedin },
    { label: 'GitHub', href: 'https://github.com/sammmyd31', icon: FaGithub },
    { label: 'Itch', href: 'https://sammmyd.itch.io/', icon: FaItchIo },
  ];

  return (
    <section id='about' className='rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-10'>
      <div>
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600'>About</p>
        <h1 className='text-3xl font-bold leading-tight text-slate-900 sm:text-4xl'>
          Hello! I'm Sammy.
        </h1>
        <div className='mt-4 grid items-stretch gap-8 md:grid-cols-[minmax(0,1fr)_16rem]'>
          <div className='space-y-6'>
            <p className='text-base font-medium text-slate-600 sm:text-lg'>
              I am second-year Computer Science and Game Development student at Northeastern University.
            </p>
            <p className='max-w-3xl text-base leading-relaxed text-slate-700'>
              I am an aspiring developer with intrests in software engineering and game development. I like to build creative applications and games that solve practical problems and are enjoyable to use.
            </p>
            <div className='flex flex-wrap items-center gap-3'>
              <a
                href={resumeLink}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-teal-500 hover:text-teal-700'
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
                  className='inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition-colors duration-200 hover:border-teal-500 hover:text-teal-700'
                >
                  <Icon size={20} />
                </a>
              );
              })}
            </div>
          </div>
          <img
            src={Portrait}
            alt="My Picture"
            className='h-full min-h-55 w-full rounded-xl object-cover shadow-sm'
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
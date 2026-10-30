import { useEffect, useState } from 'react';

const linkBaseClass =
  'relative inline-block px-1 py-4 text-sm font-semibold tracking-wide text-neutral-400 transition-colors duration-200 hover:text-neutral-100 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-neutral-100 after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100';

const navTabs = [
  { label: 'Home', href: '#about' },
  { label: 'Games', href: '#games' },
  { label: 'Software', href: '#software' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const [activeHash, setActiveHash] = useState(() => (
    navTabs.some((tab) => tab.href === window.location.hash) ? window.location.hash : '#about'
  ));

  useEffect(() => {
    const onScroll = () => {
      const marker = window.innerHeight * 0.4;
      let current = navTabs[0].href;

      navTabs.forEach((tab) => {
        const section = document.querySelector(tab.href);

        if (section && section.getBoundingClientRect().top <= marker) {
          current = tab.href;
        }
      });

      setActiveHash(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-20 h-14 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
      <ul className='mx-auto flex h-full w-full max-w-7xl justify-center gap-6 px-4 sm:gap-10 sm:px-8 lg:px-16'>
        {navTabs.map((tab) => (
          <li key={tab.label}>
            <a
              href={tab.href}
              onClick={() => setActiveHash(tab.href)}
              className={`${linkBaseClass} ${activeHash === tab.href ? 'text-neutral-50 after:opacity-100' : ''}`}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;

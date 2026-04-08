import { useEffect, useState } from 'react';

const linkBaseClass =
  'relative inline-block px-1 pb-4 text-sm font-semibold tracking-wide text-slate-600 transition-colors duration-200 hover:text-slate-900 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-teal-500 after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100';

const navTabs = [
  { label: 'Home', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const [activeHash, setActiveHash] = useState('#about');

  useEffect(() => {
    const validHashes = new Set(navTabs.map((tab) => tab.href));

    if (validHashes.has(window.location.hash)) {
      setActiveHash(window.location.hash);
    }

    const sections = navTabs
      .map((tab) => document.querySelector(tab.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]?.target?.id) {
          setActiveHash(`#${visibleSections[0].target.id}`);
        }
      },
      {
        threshold: [0.35, 0.6, 0.85],
        rootMargin: '-20% 0px -55% 0px',
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="sticky top-0 z-20 border-b border-slate-300/80 bg-slate-50/90 pt-4 backdrop-blur">
      <ul className='mx-auto flex w-full max-w-5xl justify-center gap-8 px-4 sm:px-6 lg:px-8'>
        {navTabs.map((tab) => (
          <li key={tab.label}>
            <a
              href={tab.href}
              onClick={() => setActiveHash(tab.href)}
              className={`${linkBaseClass} ${activeHash === tab.href ? 'text-slate-900 after:opacity-100' : ''}`}
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
function Skills() {
  const skillGroups = [
    {
      title: 'Languages',
      items: [
        { label: 'Java', iconClass: 'devicon-java-plain colored' },
        { label: 'C#', iconClass: 'devicon-csharp-plain colored' },
        { label: 'C++', iconClass: 'devicon-cplusplus-plain colored' },
        { label: 'Python', iconClass: 'devicon-python-plain colored' },
        { label: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
        { label: 'TypeScript', iconClass: 'devicon-typescript-plain colored' },
        { label: 'Racket', iconClass: 'devicon-racket-plain colored' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      items: [
        { label: 'React', iconClass: 'devicon-react-original colored' },
        { label: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-plain colored' },
        { label: 'JUnit', iconClass: 'devicon-junit-plain colored' },
        { label: 'JavaFX', iconClass: 'devicon-java-plain colored' },
        { label: 'Java Swing', iconClass: 'devicon-java-plain colored' },
        { label: 'CxxTest', iconClass: 'devicon-cplusplus-plain colored' },
        { label: 'Pandas', iconClass: 'devicon-pandas-plain colored' },
        { label: 'NumPy', iconClass: 'devicon-numpy-plain colored' },
        { label: 'Pytest', iconClass: 'devicon-pytest-plain colored' },
      ],
    },
    {
      title: 'Tools',
      items: [
        { label: 'Unity', iconClass: 'devicon-unity-plain colored' },
        { label: 'Git', iconClass: 'devicon-git-plain colored' },
        { label: 'Jira', iconClass: 'devicon-jira-plain colored' },
        { label: 'Supabase', iconClass: 'devicon-supabase-plain colored' },
        { label: 'VS Code', iconClass: 'devicon-vscode-plain colored' },
        { label: 'Vite', iconClass: 'devicon-vitejs-plain colored' },
        { label: 'Windows', iconClass: 'devicon-windows11-original colored' },
        { label: 'IntelliJ', iconClass: 'devicon-intellij-plain colored' },
      ],
    },
  ];

  return (
    <section id='skills' className='rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-10'>
      <p className='mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600'>Technology</p>
      <h2 className='text-3xl font-bold text-slate-900 sm:text-4xl'>Skills</h2>
      <div className='mt-8 grid gap-4 sm:grid-cols-3'>
        {skillGroups.map((group) => (
          <article key={group.title} className='rounded-xl border border-slate-200 bg-white/80 p-5 shadow-sm'>
            <h3 className='text-sm font-semibold uppercase tracking-wide text-slate-500'>{group.title}</h3>
            <ul className='mt-3 flex flex-wrap gap-3'>
              {group.items.map((skill) => (
                <li
                  key={skill.label}
                  aria-label={skill.label}
                  title={skill.label}
                  className='inline-flex h-16 w-16 flex-col items-center justify-center gap-2 rounded-xl bg-slate-100 px-2 py-2 text-slate-700 shadow-sm'
                >
                  <i aria-hidden='true' className={`${skill.iconClass} text-3xl`} />
                  <span className='text-center text-[10px] font-medium leading-tight text-slate-600'>{skill.label}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;

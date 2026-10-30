function Contact() {
  const linkClass = 'font-medium text-neutral-200 underline decoration-neutral-500 underline-offset-4 hover:text-white';

  return (
    <section id='contact' className='flex min-h-[calc(100vh-3.5rem)] items-center border-t border-neutral-800 px-4 py-12 sm:px-8 lg:px-16'>
      <div className='mx-auto w-full max-w-7xl'>
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400'>Contact</p>
        <h2 className='text-3xl font-bold text-neutral-50 sm:text-5xl'>Get In Touch</h2>
        <div className='mt-6 space-y-3 text-lg text-neutral-300'>
          <p>
            <span className='font-semibold text-neutral-100'>Personal:</span>{' '}
            <a className={linkClass} href='mailto:sammypeter616@gmail.com'>sammypeter616@gmail.com</a>
          </p>
          <p>
            <span className='font-semibold text-neutral-100'>School:</span>{' '}
            <a className={linkClass} href='mailto:demarco.s@northeastern.edu'>demarco.s@northeastern.edu</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;

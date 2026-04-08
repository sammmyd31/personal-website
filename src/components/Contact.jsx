function Contact() {
  return (
    <section id='contact' className='rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-10'>
      <p className='mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600'>Contact</p>
      <h2 className='text-3xl font-bold text-slate-900 sm:text-4xl'>Get In Touch</h2>
      <div className='mt-6 space-y-3 text-slate-700'>
        <p>
          <span className='font-semibold text-slate-900'>Personal:</span>{' '}
          <a className='font-medium text-teal-700 underline decoration-teal-500/60 underline-offset-4 hover:text-teal-900' href='mailto:sammypeter616@gmail.com'>
            sammypeter616@gmail.com
          </a>
        </p>
        <p>
          <span className='font-semibold text-slate-900'>School:</span>{' '}
          <a className='font-medium text-teal-700 underline decoration-teal-500/60 underline-offset-4 hover:text-teal-900' href='mailto:demarco.s@northeastern.edu'>
            demarco.s@northeastern.edu
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className='min-h-screen bg-slate-100 text-slate-800'>
      <Header/>
      <main className='mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 pb-12 pt-8 sm:px-6 lg:px-8'>
        <Home/>
        <Projects/>
        <Contact/>
      </main>
      </div>
  )
}

export default App;

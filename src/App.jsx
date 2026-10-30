import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className='min-h-screen bg-neutral-950 text-neutral-200'>
      <Header/>
      <main>
        <Home/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  )
}

export default App;

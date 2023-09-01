import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';




function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div>
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
       
      </div>
      
  )
}

export default App

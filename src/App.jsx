import './app.scss'
import Contact from './components/contact/Contact'
import Cursor from './components/cursor/Cursor'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Parallax from './components/parallax/Parallax'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      {/* <Cursor/> */}
      <section id='homepage'>
        <Navbar/>
        <Hero/>
      </section>
      <section><Parallax type="services"/></section>
      <section id='services' ><Services/></section>
      <section><Parallax type="what we do"/></section>
      {/* <section id='Portfolio'>Portfolio</section> */}
      <Portfolio/>
      <section id="contact">
        <Contact/>
      </section>
      
    </Router>
  )
}

export default App

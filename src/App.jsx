import './app.scss'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Parallax from './components/parallax/Parallax'
import Services from './components/services/Services'

const App = () => {
  return (
    <div>
      <section id='Homepage'>
        <Navbar/>
        <Hero/>
      </section>
      <section><Parallax type="services"/></section>
      <section ><Services/></section>
      <section><Parallax type="what we do"/></section>
      <section id='Portfolio'>Portfolio</section>
      <section id='Contact'>About</section>
      
    </div>
  )
}

export default App

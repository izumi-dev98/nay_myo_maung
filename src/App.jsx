import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Hero from './components/home/Hero'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

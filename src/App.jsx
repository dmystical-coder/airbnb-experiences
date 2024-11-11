import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import './App.css'

const App = () => {


  return (
    <>

      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Card />
      </main>
    </>
  )
}

export default App

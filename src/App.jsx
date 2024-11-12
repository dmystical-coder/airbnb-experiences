import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import './App.css'

import image1 from './assets/image.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'

const App = () => {


  return (
    <>

      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <div>
          <Card
            img={image1}
            rating="5.0"
            reviews="6"
            country="USA"
            title="Life lessons with Katie Zaferes
"
            text="From $136"
          />
          <Card
            img={image2}
            rating="5.0"
            reviews="30"
            country="USA"
            title="Learn wedding photography
"
            text="From $125"
          />
          <Card
            img={image3}
            rating="4.8"
            reviews="2"
            country="USA"
            title="Group Mountain Biking"
            text="From $50"
          />
        </div>
      </main>
    </>
  )
}

export default App

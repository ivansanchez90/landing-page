import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import Fondo from './assets/fondo2.jpg'

function App() {
  const bgImagen = {
    backgroundImage: `url(${Fondo})`,
    backgroudnRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
  }
  return (
    <div style={bgImagen} className='overflow-hidden min-h-screen'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App

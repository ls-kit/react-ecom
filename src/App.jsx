
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import WhyPage from './pages/WhyPage'
import Header from './components/HomePage/Header'
import Footer from './components/Shared/Footer'

function App() {


  return (
    <>
    <div className='hero_area'>

    <Header/>
    </div>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/shop' element={<ShopPage/>} />
      <Route path='/why' element={<WhyPage/>} />
      <Route path='/testimonial' element={<HomePage/>} />
      <Route path='/contact' element={<HomePage/>} />
      <Route path='/login' element={<HomePage/>} />
      <Route path='/cart' element={<HomePage/>} />
      <Route path='/' element={<HomePage/>} />
    </Routes>
      <Footer/>
    </>
  )
}

export default App

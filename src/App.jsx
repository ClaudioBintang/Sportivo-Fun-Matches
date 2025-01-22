import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/home'
import Loginpage from './pages/Loginpage/login'
import Registpage from './pages/Registpage/register'
import Profilepage from './pages/Profilepage/profile'
import Sparringpage from './pages/Sparringpage/sparring'
import './index.css'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/register' element={<Registpage/>}/>
        <Route path='/profile' element={<Profilepage/>}/>
        <Route path='/sparring' element={<Sparringpage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

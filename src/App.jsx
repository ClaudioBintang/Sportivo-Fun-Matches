import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homepage from './pages/Homepage/home'
import Loginpage from './pages/Loginpage/login'
import Registpage from './pages/Registpage/register'
import './index.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/register' element={<Registpage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

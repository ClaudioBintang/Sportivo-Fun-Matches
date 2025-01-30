import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registpage from './pages/Registpage/register'
import Loginpage from './pages/Loginpage/login'
import Homepage from './pages/Homepage/home'
import Profilepage from './pages/Profilepage/profile'
import ActivityDetailpage from './pages/ActivityDetailpage/activitydetail'
import Activitypage from './pages/Activitypage/activity'
import Paymentpage from './pages/Paymentpage/payment'
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
        <Route path='/activity' element={<Activitypage/>}/>
        <Route path='/activity/:id' element={<ActivityDetailpage/>}/>
        <Route path='/payment/:id' element={<Paymentpage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

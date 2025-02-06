import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './routes/protectedroute'
import Registpage from './pages/Registpage/register'
import Loginpage from './pages/Loginpage/login'
import Homepage from './pages/Homepage/home'
import Profilepage from './pages/Profilepage/profile'
import ActivityDetailpage from './pages/ActivityDetailpage/activitydetail'
import Activitypage from './pages/Activitypage/activity'
import Paymentpage from './pages/Paymentpage/payment'
import Invoicepage from './pages/Invoicepage/invoice'
import MyTransactionPage from './pages/MyTransactionPage/myTransaction'
import MyTransactionId from './pages/MyTransactionId/myTransacionId'
import Dashboardpage from './pages/Dashboardpage/dashboard'
import './index.css'

function App() {
  const isAuthenticated = localStorage.getItem("token");
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Registpage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/activity' element={<Activitypage/>}/>
        <Route path='/dashboard' element={<Dashboardpage/>}/>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
        <Route path='/profile' element={<Profilepage/>}/>
        <Route path='/mytransaction' element={<MyTransactionPage/>}/>
        <Route path='/mytransaction/:id' element={<MyTransactionId/>}/>
        <Route path='/activity/:id' element={<ActivityDetailpage/>}/>
        <Route path='/payment/:id' element={<Paymentpage/>}/>
        <Route path='/invoice/:id' element={<Invoicepage/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

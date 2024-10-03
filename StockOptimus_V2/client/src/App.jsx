import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from './Login'
import Home from './home'
import Dashboard from './Dashboard'
import UserProfile from './UserProfile'
import Forecast from './Forecast'
import AboutUs from './AboutUs'
import Homee from './home/home'

function App() {
  
  return (
      <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/' element={<Login />}></Route>
      <Route path='/home' element={<Home />}> </Route>
      <Route path='/Dashboard' element={<Dashboard />}> </Route>
      <Route path='/UserProfile' element={<UserProfile />}> </Route>
      <Route path='/AboutUs' element={<AboutUs />}> </Route>
      <Route path='/home/home' element={<Homee />}> </Route>
      <Route path='/Forecast' element={<Forecast />}> </Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App

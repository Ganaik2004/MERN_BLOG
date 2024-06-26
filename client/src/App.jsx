import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import FooterCom from './components/FooterCom'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    <FooterCom/>
    </BrowserRouter>
  )
}

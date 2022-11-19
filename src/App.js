import React from 'react'
import App from "./Component/Todo"
import Home from "./Screens/Home"
import About from "./Screens/About"
import Login from "./Screens/Login"

import { Route, Routes } from 'react-router-dom'
import Signup from './Screens/SignUP'
import Protectedroutes from './protectedroutes'


const Routing = () => {
  return (
    <>

{ <Routes>
  {/* <Route path='/' element={<Login/>}></Route> 
  <Route path='/signup' element={<Signup/>}></Route> 

  <Route element={<Protectedroutes/>}>
  <Route path='/todo' element={<App />}></Route>
  </Route> */}

 {/* <Route path='/about' element={<About />}></Route>     */}
</Routes>}

<Routes>
 <Route path='/' element={<About />}></Route>
  <Route path='/home' element={<Home />}></Route>
</Routes>

   </>
  ) 
}

export default Routing

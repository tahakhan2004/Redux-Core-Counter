import React, { useState } from 'react'
import NavBarCmp from '../../Component/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { AddcounterAction, MinuscounterAction } from '../../Store (REDUX)/Actions/counter'
const Home = () => {
  // let [counter, setcounter] = useState(0)

  const dispatch = useDispatch()
  // For Combine REducer 
  const {globalCounter} = useSelector((state) => state.counterReducer) 


  // For Single Method 
  // const {globalCounter} = useSelector((state) => state) 
  // console.log(selector);

  const addcounter = () =>{
    // setcounter(++counter)
    dispatch(AddcounterAction())
  }

  const minuscounter = () =>{
    // setcounter(--counter)
    dispatch(MinuscounterAction())
  }
  return (
    <>
    <NavBarCmp/>
     <h1>home page</h1> 
     <br />
     <div className="container text-center">
     <h1>Counter</h1>
        <h1 className=''>{globalCounter}</h1>
        <div className='text-center'>
        <button onClick={addcounter} className='btn btn-success fs-5 me-3'>+</button>
        <button onClick={minuscounter} className='btn btn-danger fs-5'>-</button>
        </div>

     </div>
    </>
  )
}

export default Home

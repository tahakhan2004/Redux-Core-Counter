import React, { useEffect } from 'react'
import NavBarCmp from '../../Component/Navbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import { auth } from '../../firabase';
import {signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { getDoc } from 'firebase/firestore';


const Login = () => {
  const [email, setemail] = useState("")
const navigate = useNavigate();
  const user = localStorage.getItem("uid")
  useEffect(()=>{
    if(user){
      navigate("/todo")
    }
  },[])

  const [password, setpassword] = useState("")
  const loginHandler = (e) => {
    e.preventDefault(); 
    signInWithEmailAndPassword(auth, email, password)
    .then((res)=>{
      console.log(res, "resolve");
      localStorage.setItem("uid", res.user.uid)  
      navigate("/todo")
    })
     .catch((err)=>{
      console.log(err);
    }) 
  }
  function signup(){
    navigate("/signup")
  }

  // async function getdooc(){

  //   const docRef = doc(dbCollection, "DataCollection", "fullname");
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // }
  return (
    <>
      {/* <NavBarCmp /> */}
      {/* <h1>Login page</h1> */}
      <Form className='container mt-5' onSubmit={loginHandler}>
      <h1>Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label  className='fs-5 '>Email address:</Form.Label>
        <Form.Control onChange={(e)=>{
          setemail(e.target.value)
        }} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='fs-5 '>Password:</Form.Label>
        <Form.Control onChange={(e)=>{
          setpassword(e.target.value)
        }}  type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="success" onClick={signup} className='ms-3' type="submit">
        Go to signup 
      </Button>

    </Form>

    </>
  )
}

export default Login

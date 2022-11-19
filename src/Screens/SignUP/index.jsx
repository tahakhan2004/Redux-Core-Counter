import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import { auth, db } from '../../firabase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {
  collection,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import { async } from '@firebase/util';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [fullname, setfullname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const dbCollection = collection(db, "DataCollection");

  const navigate = useNavigate();
  const user = localStorage.getItem("uid")
  useEffect(()=>{
    if(user){
      navigate("/todo")
    }
  },[])
  function Signuphandler(e){
    e.preventDefault()
    // console.log("submitted"); 
    createUserWithEmailAndPassword(auth, email, password)
     .then( async (res)=>{
      console.log(res, "resolve");
      const obj = {
        fullname,
        email,
        uid: res.user.uid
      }
      await setDoc(doc(dbCollection, res.user.uid), obj);
 
      // await addDoc(dbCollection, obj)
      navigate("/")
    })
     .catch((err)=>{
      console.log(err);
    })
  }
  // console.log(auth, "Authoe");
  return (
    <>
      
      <Form className='container mt-5' onSubmit={Signuphandler}>'
      <h1>SIGNUP</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='fs-5 '>Full Name</Form.Label>
        <Form.Control onChange={(e)=>{
          setfullname(e.target.value)
        }} type="text" placeholder="Enter your full name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='fs-5 '>Email address:</Form.Label>
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
        }} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </>
  )
}

export default Signup


import React, { useState } from 'react'
import { db } from "../firabase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { async } from '@firebase/util';
const dbCollection = collection(db, "MY collection");
function App() {
  const [inpvalue, setinpvalue] = useState("")
  const [additem, setadditem] = useState([])
  const [indexnum, setindexnum] = useState("")
  const [update, setupdate] = useState("")
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate()
  const user = localStorage.getItem("uid")
  const [newstate, setnewstate]= useState("")
  const [getemail, setgetemail] = useState("")
  // console.log(user)

  const dbCollection1 = collection(db, "DataCollection");

  useEffect(()=>{
    if(!user){
      navigate("/")
    }
    
  }, [])

  useEffect(()=>{

    const user = localStorage.getItem("uid")
    async function getdooc(){
      
      const docRef = doc(db, "DataCollection", user);
      const docSnap = await getDoc(docRef);
      // const id
      // console.log(id);
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data().fullname);
        setnewstate(docSnap.data().fullname)
        setgetemail(docSnap.data().email)
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    getdooc(user)
  },[])



    useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(dbCollection);
      const arr = [];
      querySnapshot.forEach((doc) => {
        arr.push({
          id: doc.id,
          value: doc.data().todovalue,
        });
      });
      setadditem([...arr]);
    }
    getData();
  }, [refresh]);

  function changer(e){
    setinpvalue(e.target.value)
  }

  async function adder(){
    const obj = {
      todovalue: inpvalue,
    }          
    const adder = await addDoc(dbCollection, obj)
    console.log(adder); 
    setRefresh(!refresh);
    // additem.push(inpvalue)
    // setadditem([...additem])
    // console.log(additem)
    setinpvalue("")
  }

  async function deletetodo(ind){
    const id = additem[ind].id;
    const dbRef = doc(dbCollection, id)
    await deleteDoc(dbRef)

    additem.splice(id ,1)
    setadditem([...additem])
  }

  function  deleteall(){
    setadditem([])
  }

 async function updater(inde){
    const id = additem[inde].id;
    const dbRef = doc(dbCollection, id)
    await updateDoc(dbRef, {
      todovalue: update,
    })

    additem.splice(inde, 1 , {value: update, id})
    setadditem([...additem])
    setindexnum("")
    setupdate("")
  }

  function edit(inde){
      setupdate(additem[inde].value )
      // setindexnum("")
  }

  function logoutHandler(){
      localStorage.removeItem("uid")
      navigate("/")
  }
  return (
    <>
    {/* <Navbar expand="lg" className='navo'>
      <Container fluid className=''>
        <Navbar.Toggle aria-controls="navbarScroll" className='' style={{  color: '#f8b500' }}/>
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
      
      <div className='main-div h-auto'>
      <div className="container">
            <div className="row justify-content-between align-items-center text-center">
              <div className="col-sm-4 ">
                <p className='navi fs-4'>UserName: {newstate}</p>
              </div>
              <div className="col-sm-4 fs-4 ">
                <p className='navi'>Email: {getemail}</p>
                
              </div>

              <i className='float-end col-sm-4 bi bi-power icon fs-2' onClick={logoutHandler}>logout  </i>
              
            </div>
          </div>
      <div className='d-flex justify-content-between align-items-center'>
      
       
        
      </div> 
        <div className="container all-user h-auto">
        <p className='text-center me-auto ms-auto'>Todo list</p>
          <div className="input-group container my-user w-75">
            <input className="form-control form-control-lg" type="text" placeholder="" aria-label=".form-control-lg example" value={inpvalue} onChange={changer}/>
          </div>

          <div className="container d-flex justify-content-center mt-3 gap-3">
          <button className="btn btn-success butn w-25" type="button" id="button-addon2" onClick={adder}>Add</button>  
          <button className="btn btn-danger butn w-25" type="button" id="button-addon2" onClick={deleteall}>Delete All</button>
          </div>  

          {
            additem.map( (val, ind)=>{
              return(
                <React.Fragment key={ind}>
                {
                indexnum === ind ? (
                  <div className='d-flex mt-3 p-2 align-items-center w-50 me-auto ms-auto gap-2'>
                    <input type="text" className="container  form-control" placeholder="update " aria-label="Recipient's username" aria-describedby="button-addon2" value={update} onChange = {(e)=>setupdate(e.target.value)}/>
                    {/* <button >Update</button> */}
                    <i className="bi bi-pencil-square  dustii " onClick={()=>updater(ind)}></i> 
                  </div>   
                ): (
                <div className='container ttod w-75' >
                  <div className="p-2 clearfix align-items-center">
                  <div className=' vall' >
                    <span className='fs-4  float-start'>{val.value}</span>  
                  </div>
                <div className='text h-auto mt-sm-3'>
                <i className='bi bi-trash3 dust float-end ' onClick={ () => deletetodo(ind)}></i>
                <i className="bi bi-pencil-square dusti float-end me-2" onClick={ () => {
                    setindexnum(ind)
                    edit(ind)
                  }}></i>  
                  </div>  
                  </div>    
                </div>
                )}
                </React.Fragment>
              )
            })
          }
        
        </div>
      </div>
    </>
  );
}

export default App;
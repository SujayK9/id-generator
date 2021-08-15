import React, {useRef,useState} from 'react';
import './App.css';
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Id from './id';

function App() {

  const [gen,setGen]=useState(false);
  const [data,setData]=useState({});

const name=useRef(null);
const company=useRef(null);
const phone=useRef(null);
const email=useRef(null);
const idNo=useRef(null);
const pic=useRef(null);
const website=useRef(null);
const form=useRef(null);
 


  const onIn=(e)=>{
    const input=e.target;
    // console.log(input.parentNode)
    input.parentNode.querySelector(".alert-danger").style.display="none";
}

const validateAndInsert= (formdata)=>{
  const {name,email,phone,website,company,idNo,pic}=formdata;

  if(!company){
    document.getElementById("company-error").style.display="block"
    return;
}

  if(!( /^[a-zA-Z\s]+$/g.test(name))){
    document.getElementById("firstname-error").style.display="block"
    return;
}

if(!/^[^\s@#$%*()!~]+@[^\s@#$%*()!~]+\.[^\s@#$%*()!~]+$/g.test(email)){
      document.getElementById("email-error").style.display="block"
      return;
  }

  if(!( /^[0-9]{10}$/g.test(phone))){
    document.getElementById("phone-error").style.display="block"
    return;
}

if(!/^(https?:\/\/)?www\.\S+\.\S+$/g.test(website)){
  document.getElementById("website-error").style.display="block"
  return;
}

if(!( /^[0-9]+$/g.test(idNo))){
  document.getElementById("id-error").style.display="block"
  return;
}

if(!pic){
  document.getElementById("pic-error").style.display="block"
  return;
}
setData(formdata)
setGen(true)
// console.log(data)

}

const onSub=(e)=>{
  e.preventDefault();
  validateAndInsert({
    name :name.current.value ,email :email.current.value ,phone :phone.current.value ,website :website.current.value ,company : company.current.value,idNo:idNo.current.value,pic:pic.current.files[0]
  })
}


  return (
<div>
    {!gen?(
      <div className="container">
  
      {/* <input type="file" id="photo" accept="image/*" onChange={(e)=>handlechange(e)} />
 
      <input type="file" id="photo2" accept="image/*" onChange={(e)=>handlechange(e)} /> */}
 {/* 
      <img id="output"/> */}
 
 
 <h1 className="display-3 text-center">ID card Generator</h1>
     <h2 className="display-8 text-center">Please fill the details to generate ID card</h2>
 
 
     <form ref={form} className="row g-3" onInput={(e)=>onIn(e)} onSubmit={(e)=>onSub(e)}>
 
 
 
     <div className="col-md-6">
             <label htmlFor="company" className="form-label">Company</label>
             <input ref={company} type="text" className="form-control" id="company"/>
             <div className="alert alert-danger mt-3" id="company-error" style={{display: "none"}}>company is required</div>
     </div>
 
 
 <div className="col-md-6">
 <label htmlFor="firstname" className="form-label">Full name</label>
 <input ref={name} type="text" className="form-control" id="firstname"/>
 <div className="alert alert-danger mt-3" id="firstname-error" style={{display: "none"}}>Enter Full name</div>
 </div>
 
     <div className="col-md-6">
         <label htmlFor="email" className="form-label">E-mail</label>
         <input ref={email} type="text" className="form-control" id="email"/>
         <div className="alert alert-danger mt-3" id="email-error" style={{display: "none"}}>E-mail is invalid(abc@pqr.xyz)</div>
         </div>
             
 
     <div className="col-md-6">
         <label htmlFor="phone" className="form-label">Phone No</label>
         <input ref={phone} type="text" className="form-control" id="phone"/>
         <div className="alert alert-danger mt-3" id="phone-error" style={{display: "none"}}>phone number is invalid (0000000000)</div>
         </div>
      
     <div className="col-6">
                 <label htmlFor="website" className="form-label">Website</label>
                 <input ref={website} type="text" className="form-control" id="website"/>
                 <div className="alert alert-danger mt-3" id="website-error" style={{display: "none"}}>website is invalid (www.abc.com)</div>
     </div>
 
     <div className="col-6">
                 <label htmlFor="ID Number" className="form-label">ID Number</label>
                 <input ref={idNo} type="text" className="form-control" id="ID Number"/>
                 <div className="alert alert-danger mt-3" id="id-error" style={{display: "none"}}>ID Number is invalid (Enter a number)</div>
     </div>
    
     <div className="col-12">
     <label htmlFor="photo" className="form-label">Upload Your photo</label>
     <input type="file" ref={pic} style={{display: "block"}} id="photo" accept="image/*"/>
     <div className="alert alert-danger mt-3" id="pic-error" style={{display: "none"}}>Upload your photo</div>
     </div>
 
 
 
     <button className="btn btn-primary btn-lg w-50 mx-auto mb-5">Generate ID Card</button>
 
 </form>
     </div>
   
    ):(<>
    {console.log(data)}
    <Id data={data} />
    </>)}
    </div>
    )
}

export default App;

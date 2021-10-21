import React ,{useState} from 'react'
import Navbard from '../../../layouts/frontend/Navbard';
import axios from 'axios';
import swal from 'sweetalert';
import {useHistory} from 'react-router-dom';

function Register() {
     const [registerInput , setRegister] = useState([
           {
               name:'',
               email:'',
               password:'',
               erros_list:[],
           }
     ]);
     const [Errors, setError] = useState([]);
     const handelInput =(e)=>{
         e.persist();
         setRegister({...registerInput,[e.target.name]:e.target.value});
     }
     const submitregister =(e)=>{
             
         e.preventDefault();
         const data={

             name:registerInput.name,
             email:registerInput.email,
             password:registerInput.password,
                   }
                   axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post(`/api/register`,data).then(res =>{
                        
                         if(res.data.status===200){
                            swal("success",res.data.message,"success");
                            setError([]);
                         }else if(res.data.status===404){
                            swal("tous les champs sont requis",'',"error");
        
                           setError(res.data.validation_errors);
                        }
                        
                    });
                     });
                
                setRegister({
                    name:'',
                  email:'',
                  password:'',
                })
                
         
     }
    return (
        <div  >
            <Navbard/>
                <div className="container py-5" >

                     <div className="row justify-content-center" >
                       <div className="col-md-8" >
                              <div className="card" >
                                     <div className="card-header" >
                                         <h1>REGISTER</h1>
                                     </div>
                                       <div className="card-body" >
                                       <form onSubmit={submitregister} >
                                       
                                            <div className="form-group">
                                                <label for="exampleInputPassword1">Nom</label>
                                                <input  type="text"  onChange={handelInput} value={registerInput.name} name="name" className="form-control" id="exampleInputPassword1" placeholder="Nom"/>
                                                {/* <span>{registerInput.erros_list.name}</span> */}
                                            </div>
                                                <div className="form-group">
                                                    <label for="exampleInputPassword1">Email</label>
                                                    <input  type="email"   value={registerInput.email} onChange={handelInput}  name="email" className="form-control" id="exampleInputPassword1" placeholder="Email"/>
                                                {/* <span>{registerInput.erros_list.email}</span> */}

                                                </div>
                                            <div className="form-group">
                                            <label for="exampleInputPassword1">Password</label>

                                                <input  type="password"  onChange={handelInput} value={registerInput.password} name="password" className="form-control" id="exampleInputPassword1" placeholder="password"/><br />
                                                {/* <span>{registerInput.erros_list.password}</span> */}
                                                
                                            </div>
                                           
                                            <button type="submit" className="btn btn-primary  ">REGISTER</button>
                                            
                                        </form>
                                       </div>
                              </div>
                       </div>

                     </div>
                </div>
             
        </div>
    )
}

export default Register;

import React from 'react';
import Navbard from '../../../layouts/frontend/Navbard';


function Login() {
    return (
        <div  >
            <Navbard/>
                <div className="container py-5" >

                     <div className="row justify-content-center" >
                       <div className="col-md-8" >
                              <div className="card" >
                                     <div className="card-header" >
                                         <h1>LOGIN</h1>
                                     </div>
                                       <div className="card-body" >
                                       <form  >
                                                <div className="form-group">
                                                    <label for="exampleInputPassword1">Email</label>
                                                    <input  type="email"  name="" className="form-control" id="exampleInputPassword1" placeholder="Email"/>
                                                </div>
                                            <div className="form-group">
                                            <label for="exampleInputPassword1">Password</label>

                                                <input  type="password" name="" className="form-control" id="exampleInputPassword1" placeholder="password"/><br />
                                                
                                            </div>
                                            <button type="submit" className="btn btn-primary  ">LOGIN</button>
                                            
                                        </form>
                                       </div>
                              </div>
                       </div>

                     </div>
                </div>
             
        </div>
    )
}

export default Login;

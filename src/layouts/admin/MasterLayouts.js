import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import Siderbard from './Siderbard';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
import routes from '../../route/Route';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function MasterLayouts() {
    return (
        <div  className="sb-nav-fixed">
            <Navbar/>
             <div id="layoutSidenav">

                <div id="layoutSidenav_nav">
                        <Siderbard/>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        {/* <Switch>
                              {
                                  routes.map( (route,index)=>{
                                   return (
                                    route.component && ( <Route key={index}
                                    path={route.path} 
                                    exact={route.exact}
                                     name={route.name} 
                                     render={(props)=>{
                                         <route.component {...props}/>
                                     }}    
                                     />
                                     )
                                   );
                                  } )
                              }
                           <Redirect from='/admin'  to="/admin/dashboard" />
                        </Switch> */}
                    </main>
                  <Footer/>
                </div>
             </div>
        </div>
    )
}

export default MasterLayouts;

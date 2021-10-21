import axios from 'axios';
import React ,{useState,useEffect} from 'react';
import Footer from '../../../layouts/admin/Footer';
// import Footer from '../../layouts/admin/Footer';
import Navbar from '../../../layouts/admin/Navbar';
import Siderbard from '../../../layouts/admin/Siderbard';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";

function CategoryListe() {

    const [Loading, setLoading] = useState(true);
    const [CategoryListe, setCategoryListe] = useState([]);

    useEffect(() => {
        
        axios.get(`/api/categoryliste`).then(res=>{
             if (res.data.status===200) {
                  setCategoryListe(res.data.category);
             } 
             setLoading(false);
        })
    }, []);
    var CATEGORY_HTML='';
     
    if(Loading){
     return <h1> Loading</h1>
    }else{
        CATEGORY_HTML=CategoryListe.map((Categorys,index)=>{
              return (
                <tr key={index} >
                <th scope="row">{Categorys.id}</th>
                <td>{Categorys.name}</td>
                <td>{Categorys.slug}</td>
                <td>{Categorys.status}</td>
                
                <td>
                    <Link  to={`editcategory/${Categorys.id}`}  className="btn btn-info" >EDIT</Link>
                </td>
                <td>
                <button  className="btn btn-danger" onClick={(e)=>deteted(e,Categorys.id)} >DELETE</button>
                </td>
               
                </tr>
                 );
        })
    }
    const deteted=(e,id)=>{
       e.preventDefault();
       const thisClicked=e.currentTarget;
       thisClicked.innerText="deleting"
    }
    return (
        <div  className="sb-nav-fixed">
        <Navbar/>
         <div id="layoutSidenav">

            <div id="layoutSidenav_nav">
                    <Siderbard/>
            </div>
            <div id="layoutSidenav_content">
                <main>
                   <div  className="card" >
                         <div className="card-header" >
                           <h1>  <Link  to="/categorys"  className="btn btn-dark" >AJOUTER UNE CATEGORIES</Link>   </h1>
                         </div>
                           <div className="card-body">
                             <table className="table table-dark">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">NAME</th>
                                    <th scope="col">SLUG</th>
                                    <th scope="col">STATUS</th>
                                    <th scope="col">EDIT</th>
                                    <th scope="col">DELETE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        CATEGORY_HTML
                                    }
                                </tbody>
                           </table>

                           </div>

                   </div>
                </main>
                 <Footer/>
            </div>
         </div>
    </div>
    )
}

export default CategoryListe;

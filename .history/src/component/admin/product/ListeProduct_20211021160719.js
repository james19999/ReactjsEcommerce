import axios from 'axios';
import React ,{useState,useEffect} from 'react';
import Footer from '../../../layouts/admin/Footer';
import swal from 'sweetalert';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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

function ListeProduct() {
    const [Products, setProducts] = useState([]);
    const [Loading, setLoading] = useState(true);
    useEffect(() => {
         axios.get(`/api/listeproduct`).then(res=>{
             if(res.data.status===200){
                //  console.log(res.data.product);
               setProducts(res.data.product)
             }
             setLoading(false);
         }) 

    }, []);
    var CATEGORY_HTML='';
     if(Loading){
      return  <Loader
        type="Hearts"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />

     }else{
        CATEGORY_HTML=Products.map((produ,index)=>{
           return (
            <tr key={index} >
            <th scope="row">{produ.id}</th>
            <td>{produ.name}</td>
            <td>{produ.slug}</td>
            <td>{produ.salling_price}</td>
            <td>{produ.categorys.name}</td>
            <td> <img src={`http://127.0.0.1:8000/storage/photos/${produ.image}`} width="50px" alt="" srcset="" />  </td>

            <td>
                    <Link  to=""  className="btn btn-info" >EDIT</Link>
                </td>
                <td>
                <button  className="btn btn-danger"  >DELETE</button>
                </td>
            </tr>
           )
       }) 
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
                           <h1>  <Link  to="/products"  className="btn btn-dark" >AJOUTER UN PRODUIT</Link>   </h1>
                         </div>
                           <div className="card-body">
                             <table className="table table-dark">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">NAME</th>
                                    <th scope="col">SLUG</th>
                                    <th scope="col">SALLING PRICE</th>
                                    <th scope="col">CATEGORIES</th>
                                    <th scope="col">image</th>
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

export default ListeProduct;

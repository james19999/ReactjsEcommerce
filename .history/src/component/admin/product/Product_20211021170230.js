import React  ,{useState,useEffect} from 'react';
import Footer from '../../../layouts/admin/Footer';
import Navbar from '../../../layouts/admin/Navbar';
import Siderbard from '../../../layouts/admin/Siderbard';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import {useHistory} from 'react-router-dom';



function Product() {
    const [Errors, setError] = useState([]);

    const history = useHistory();
    const [Categorys, setCategory] = useState([]);
    const [Products, setProducts] = useState([
        {name:'',
         slug: '',
        
         description:'',
         category_id:'',
        
         salling_price:'',
         originale_price:'',
         quantity:'',
        
         
        }
    ]);

    const [picture, setPicture] = useState([]);


    const handelInput=(e)=>{
        e.persist();
        setProducts({...Products,[e.target.name]:e.target.value});
    }

    const handelImage=(e)=>{
      setPicture({image: e.target.files[0]});
    }
    const submitProduct=(e)=>{
         e.preventDefault();

          const formData = new FormData();
          formData.append('image',picture.image);
          formData.append('name',Products.name);
          formData.append('slug',Products.slug);
         
          formData.append('description',Products.description);
          formData.append('category_id',Products.category_id);
          
          formData.append('salling_price',Products.salling_price);
          formData.append('originale_price',Products.originale_price);
          formData.append('quantity',Products.quantity);

          
         axios.post(`/api/productadd`,formData).then(res=>{
                if(res.data.status===200){
                swal("success",res.data.message,"success");
                setError([]);
              

                
                }else if(res.data.status===404){
                    swal("tous les champs sont requis",'',"error");

                   setError(res.data.errors);
                }
         });
        
    }
    useEffect(() => {
         axios.get(`/api/categoryall`).then(res=>{
            
              if(res.data.status ===200){
                  console.log(res.data.category);
                 setCategory(res.data.category);
              }
         }); 
    }, []);
    return (
        <div  className="sb-nav-fixed">
        <Navbar/>
         <div id="layoutSidenav">

            <div id="layoutSidenav_nav">
                    <Siderbard/>
            </div>
            <div id="layoutSidenav_content">
                <main>
                  <h1>PRODUCT ADD</h1>
            <div>
            <form  encType="multipart/form-data"  onSubmit={submitProduct} >

            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">STAPE 1</button>
                </li>
                <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">STAPE 2</button>
                </li>
                <li className="nav-item" role="presentation">
                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">STAPE 3</button>
                </li>
            </ul>

                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="col-md-8 m-auto "  >
                                        <div className="form-group mb-3">
                                            <label >Catégories</label>
                                            <select className="form-control"  onChange={handelInput}  value={Products.category_id}  name="category_id" id="">
                                            <option >Catégories</option>
                                              {
                                                Categorys.map(item=>{
                                                   return(<option key={item.id} value={item.id}>{item.name}</option>);
                                                })
                                              }
                                                
                                            </select>
                                            <span   > </span>
                                        </div>
                                       
                                       
                                       
                                        <div className="form-group mb-3">
                                            <label >Slug</label>
                                            <textarea  className="form-control" onChange={handelInput}  value={Products.slug}  name="slug" id="" cols="30" rows="4"></textarea>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label >Name</label>
                                            <textarea  className="form-control" onChange={handelInput}  value={Products.name}  name="name" id="" cols="30" rows="4"></textarea>
                                        </div>
                                        
                        </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="col-md-8 m-auto "  >
                                                <div className="form-group mb-3">
                                                    <label >Description</label>
                                                    <textarea  className="form-control" onChange={handelInput}  value={Products.description}  name="description" id="" cols="30" rows="4"></textarea>
                                                </div>
                                               
                        
                                                <div className="form-group mb-3">
                                                    <label >Salling price</label>
                                                    <input  className="form-control" onChange={handelInput}  value={Products.salling_price}   name="salling_price" type="text" />
                                                    <span   ></span>

                                                </div>
                                                <div className="form-group mb-3">
                                                    <label >Originale price</label>
                                                    <input  className="form-control" onChange={handelInput}  value={Products.originale_price}   name="originale_price" type="text" />
                                                    <span   ></span>

                                                </div>
                                            
                                </div>
                        </div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                            <div className="col-md-8 m-auto "  >
                                            <div className="form-group mb-3">
                                                <label >Qauntity</label>
                                                <input  className="form-control"  onChange={handelInput}  value={Products.quantity}  name="quantity" type="text" />
                                                <span   > </span>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label >image</label>
                                                <input  className="form-control" onChange={handelImage}     name="image" type="file" />
                                                <span   ></span>

                                            </div>
                                            
                            </div>
                        </div>
                        <div className="form-group mb-3">
                           <button className="btn btn-success" type="submit">ADD PRODUCT</button>
                       </div>
                    </div>
           </form>

            </div>


                </main>
              <Footer/>
            </div>
         </div>
    </div>
    )
}

export default Product;

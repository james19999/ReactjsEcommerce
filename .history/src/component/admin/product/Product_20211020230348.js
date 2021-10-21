import React  ,{useState,useEffect} from 'react';
import Footer from '../../../layouts/admin/Footer';
import Navbar from '../../../layouts/admin/Navbar';
import Siderbard from '../../../layouts/admin/Siderbard';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';


function Product() {
    const [Categorys, setCategory] = useState([]);
    const [Products, setProducts] = useState([
        {name:'',
         slug: '',
         meta_title:'',
         meta_keyword:'',
         meta_description:'',
         description:'',
         brand:'',
         salling_price:'',
         originale_price:'',
         quantity:'',
        
         featured:'',
         popular:'',
         status:'',
         category_id:'',
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
          formData.append('meta_title',Products.meta_title);
          formData.append('meta_keyword',Products.meta_keyword);
          formData.append('meta_description',Products.meta_description);
          formData.append('description',Products.description);
          formData.append('brand',Products.brand);
          formData.append('salling_price',Products.salling_price);
          formData.append('originale_price',Products.originale_price);
          formData.append('quantity',Products.quantity);

          formData.append('featured',Products.featured);
          formData.append('popular',Products.popular);
          formData.append('status',Products.status);
          formData.append('category_id',Products.category_id);
         axios.post(`/api/productadd`,formData).then(res=>{
                if(res.data.status===200){

                }else if(res.data.status===404){
                    
                }
         });
    }
    useEffect(() => {
         axios.get(`/api/categoryall`).then(res=>{
            
              if(res.data.status ===200){
                  
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
                                              {
                                                Categorys.map((item,index)=>{
                                                   return(<option key={index} value={item.id}>{item.name}</option>);
                                                })
                                              }
                                                
                                            </select>
                                            <span   > </span>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label >Meta title</label>
                                            <input  className="form-control" onChange={handelInput}  value={Products.meta_title}   name="meta_title" type="text" />
                                            <span   ></span>

                                        </div>
                                        <div className="form-group mb-3">
                                            <label >Meta keywords</label>
                                            <input  className="form-control" onChange={handelInput}  value={Products.meta_keyword}   name="meta_keyword" type="text" />
                                            <span   ></span>

                                        </div>
                                        <div className="form-group mb-3">
                                            <label >Meta Description</label>
                                            <textarea  className="form-control" onChange={handelInput}  value={Products.meta_description}  name="meta_description" id="" cols="30" rows="4"></textarea>
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
                                                    <label >Brand</label>
                                                    <input  className="form-control"  onChange={handelInput}  value={Products.brand}  name="brand" type="text" />
                                                    <span   > </span>
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
                                            <div className="form-group mb-3">
                                                <label >featured</label>
                                                <input  type="checkbox" className="form-control" onChange={handelInput}  value={Products.featured}  name="featured" />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label >popular</label>
                                                <input  type="checkbox" className="form-control" onChange={handelInput}  value={Products.popular}  name="popular" />
                                            </div>
                                
                                            <div className="form-group mb-3">
                                                <label >Status</label>
                                                <input onChange={handelInput}  value={Products.status}    name="status" type="checkbox" /> / status 
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

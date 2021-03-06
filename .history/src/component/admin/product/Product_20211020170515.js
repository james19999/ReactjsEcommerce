import React  ,{useState} from 'react';
import Footer from '../../../layouts/admin/Footer';
import Navbar from '../../../layouts/admin/Navbar';
import Siderbard from '../../../layouts/admin/Siderbard';
import {Link} from 'react-router-dom';

function Product() {

    const [Products, setProducts] = useState([]);

    const handelInput=()=>{

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
                  <h1>PRODUCT ADD</h1>
            <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <Link className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">STAPE 1</button>
                </Link>
                <Link className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">STAPE 2</button>
                </Link>
                <Link className="nav-item" role="presentation">
                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">STAPE 3</button>
                </Link>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="col-md-8 m-auto "  >
                                <div className="form-group mb-3">
                                    <label >Catégories</label>
                                    <input  className="form-control"  onChange={handelInput}  value={Products.slug}  name="slug" type="text" />
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
                                            <label >Name</label>
                                            <input  className="form-control" onChange={handelInput}  value={Products.name}   name="name" type="text" />
                                            <span   ></span>

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
                                        <input  className="form-control" onChange={handelInput}  value={Products.image}   name="image" type="file" />
                                        <span   ></span>

                                    </div>
                                    <div className="form-group mb-3">
                                        <label >featured</label>
                                        <textarea  className="form-control" onChange={handelInput}  value={Products.featured}  name="featured" id="" cols="30" rows="4"></textarea>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label >popular</label>
                                        <textarea  className="form-control" onChange={handelInput}  value={Products.popular}  name="popular" id="" cols="30" rows="4"></textarea>
                                    </div>
                           
                                    <div className="form-group mb-3">
                                        <label >Status</label>
                                        <input onChange={handelInput}  value={Products.status}    name="status" type="checkbox" /> / status 
                                    </div>
                    </div>
                </div>
            </div>
            </div>


                </main>
              <Footer/>
            </div>
         </div>
    </div>
    )
}

export default Product;

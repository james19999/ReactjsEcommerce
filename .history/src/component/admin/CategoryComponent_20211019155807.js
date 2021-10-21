import axios from 'axios';
import React ,{useState} from 'react';
import Footer from '../../layouts/admin/Footer';
import Navbar from '../../layouts/admin/Navbar';
import Siderbard from '../../layouts/admin/Siderbard';
import swal from 'sweetalert';

function CategoryComponent() {
    const [Categorys, setCategorys] = useState([
         {
             name:'',
             slug:'',
             status:'',
             description:'',
             meta_title:'',
             meta_keyword:'',
             meta_description:'',
             erros_list:[],
         }
    ]);

    const handelInput =(e)=>{
    e.persist();
    setCategorys({...Categorys,[e.target.name]:e.target.value});
    }
    const submitCategory=(e)=>{
      e.preventDefault();
      const data={
        name:Categorys.name,
        slug:Categorys.slug,
        status:Categorys.status,
        description:Categorys.description,
        meta_title:Categorys.meta_title,
        meta_keyword:Categorys.meta_keyword,
        meta_description:Categorys.meta_description,
      }

      axios.post(`/api/category`,data).then(res=>{

       
        
          if(res.data.status===200){
             swal("succes",res.data.message,"succes");
            document.getElementById('CATEGORY_FORM').reset();
          }else if(res.data.status===400){
             
           
            setCategorys({...Categorys,erros_list:res.data.errors});
          }
      });
    }

     var dispaly_errors=[];
         if(Categorys.erros_list){
           dispaly_errors=[
            Categorys.erros_list.slug,
            Categorys.erros_list.name,
            Categorys.erros_list.meta_title,
           ]
         }

    return (
        <div  className="sb-nav-fixed">
        <Navbar/>
         <div id="layoutSidenav">

            <div id="layoutSidenav_nav">
                    <Siderbard/>
            </div>
            <div id="layoutSidenav_content">
            {
                dispaly_errors.map()
            }
                <main>
                       <h1>Catégorys</h1>
                    <div>
                    <form onSubmit={submitCategory} id="CATEGORY_FORM" >

                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                        </li>
                        <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">SEO </button>
                        </li>
                        
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                  
                                <div className="col-md-8 m-auto "  >
                                <div className="form-group mb-3">
                                    <label >Slug</label>
                                    <input  className="form-control"  onChange={handelInput}  value={Categorys.slug}  name="slug" type="text" />
                                    <span   > </span>
                                </div>
                                <div className="form-group mb-3">
                                    <label >Name</label>
                                    <input  className="form-control" onChange={handelInput}  value={Categorys.name}   name="name" type="text" />
                                    <span   ></span>

                                </div>
                                <div className="form-group mb-3">
                                    <label >Description</label>
                                    <textarea  className="form-control" onChange={handelInput}  value={Categorys.description}  name="description" id="" cols="30" rows="4"></textarea>
                                </div>
                                <div className="form-group mb-3">
                                    <label >Status</label>
                                    <input onChange={handelInput}  value={Categorys.status}    name="status" type="checkbox" /> / status 
                                </div>
                                </div>

                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                         <div className="col-md-8 m-auto "  >
                                <div className="form-group mb-3">
                                            <label >Meta title</label>
                                            <input  className="form-control" onChange={handelInput}  value={Categorys.meta_title}   name="meta_title" type="text" />
                                    <span   ></span>

                                        </div>
                                <div className="form-group mb-3">
                                            <label >Meta keywords</label>
                                            <textarea  className="form-control" onChange={handelInput}  value={Categorys.meta_keyword}    name="meta_keyword" id="" cols="30" rows="4"></textarea>
                                </div>
                                <div className="form-group mb-3">
                                            <label >Meta decription</label>
                                            <textarea  className="form-control"   onChange={handelInput}  value={Categorys.meta_description}   name="meta_description" id="" cols="30" rows="4"></textarea>
                                </div>
                         </div>

                        </div>
                    </div>
                       <div className="col-md-8 m-auto">

                        <button   className="btn btn-primary" type="submit">Add Catégorys</button>
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

export default CategoryComponent;

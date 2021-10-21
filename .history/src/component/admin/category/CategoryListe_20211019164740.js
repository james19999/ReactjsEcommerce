import axios from 'axios';
import React ,{useState,useEffect} from 'react';
import Footer from '../../../layouts/admin/Footer';
// import Footer from '../../layouts/admin/Footer';
import Navbar from '../../../layouts/admin/Navbar';
import Siderbard from '../../../layouts/admin/Siderbard';

function CategoryListe() {

    const [Loading, setLoading] = useState(true);
    const [CategoryListe, setCategoryListe] = useState([]);

    useEffect(() => {
        axios.get(`/api/categoryliste`).then(res=>{
           
             if (res.status===200) {
                 
             } 
        })
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
                   <div  className="card" >
                         <div className="card-header" >
                           <h1>jtee</h1>
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
                                    {/* <tr>
                                    <th scope="row">ID</th>
                                    <td>NAME</td>
                                    <td>SLUG</td>
                                    <td>STATUS</td>
                                    <td>EDIT</td>
                                    <td>DELETE</td>
                                    </tr> */}
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

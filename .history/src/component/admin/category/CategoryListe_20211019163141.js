import React from 'react';
import Footer from '../../../layouts/admin/Footer';
// import Footer from '../../layouts/admin/Footer';
import Navbar from '../../../layouts/admin/Navbar';
import Siderbard from '../../../layouts/admin/Siderbard';

function CategoryListe() {
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
                                
<table class="table table-dark">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            </tr>
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

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
                         <div className="card-" >
                           <h1>jtee</h1>
                         </div>
                           <div className="card-body">
                                hhhhh
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

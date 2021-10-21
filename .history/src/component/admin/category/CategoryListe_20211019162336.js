import React from 'react';
import Footer from '../../../layouts/admin/Footer';
// import Footer from '../../layouts/admin/Footer';
import Navbar from '../../layouts/admin/Navbar';
import Siderbard from '../../layouts/admin/Siderbard';

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
                  category
                </main>
                 <Foote
            </div>
         </div>
    </div>
    )
}

export default CategoryListe;

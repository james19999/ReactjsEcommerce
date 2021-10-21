import React from 'react'
import Footer from '../../layouts/admin/Footer';
import Navbar from '../../layouts/admin/Navbar';
import Siderbard from '../../layouts/admin/Siderbard';
function Profile() {
    return (
        <div  className="sb-nav-fixed">
        <Navbar/>
         <div id="layoutSidenav">

            <div id="layoutSidenav_nav">
                    <Siderbard/>
            </div>
            <div id="layoutSidenav_content">
                <main>
                   PROFILE
                </main>
              <Footer/>
            </div>
         </div>
    </div>
    )
}

export default Profile;

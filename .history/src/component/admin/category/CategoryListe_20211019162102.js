import React from 'react'

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
                  DAHBORD
                </main>
              <Footer/>
            </div>
         </div>
    </div>
    )
}

export default CategoryListe;

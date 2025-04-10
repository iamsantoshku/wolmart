import React from 'react'
import Contactmain from '../component/about/Contactmain'
import Contactinfo from '../component/about/Contactinfo'

const Contact = () => {
  return (
    <div>
        <div className="page-header">
                <div className="container">
                    <h1 className="page-title mb-0">Contact Us</h1>
                </div>
            </div>
            
           
            <nav className="breadcrumb-nav mb-10 pb-1">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><a href="demo1.html">Home</a></li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </nav>

            <div class="page-content contact-us">
                <div class="container">
                    <Contactmain/>
                    <hr className="divider mb-10 pb-1"/>
                    <Contactinfo/>


                </div>
            </div>
      
    </div>
  )
}

export default Contact

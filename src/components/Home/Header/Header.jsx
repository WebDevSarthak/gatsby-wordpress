import React from 'react'
import { withPrefix, Link } from "gatsby"
import Logo from '../../../assets/img/logo.png'
import './Header.css'
import HeaderMenu from './HeaderMenu'

function Header(props) {
    return (
        <div>
            <header class="d-flex align-items-center sticky">
                <div class="container-fluid">
                    <div class="row align-items-end">
                        <div class="col-12">
                            <h5><a href="/#">Consultant Portal</a> | Client Portal | Make Payment</h5>
                        </div>
                        <div class="col-lg-3 col-8 text-left">
                            {/* <!--logo start--> */}
                        <a href="index.html"  aria-label="Redirect" ><img src={Logo} class="img-fluid" alt="" /></a>
                                {/* <!--logo end--> */}
                        </div>
                            <div class="col-lg-9 col-4">
                                <div class="d-flex align-items-center mt_20">
                                    {/* <HeaderMenu href="/#" class="nav-link active" text="Home" />
                                    <HeaderMenu href="development-application.html" class="nav-link" text="Development Applications" />    
                                    <HeaderMenu href="/#" class="nav-link" text="Subdivisions" />
                                    <HeaderMenu href="/#" class="nav-link" text="Rezonings" />
                                    <HeaderMenu href="/#" class="nav-link" text="Contact" /> */}

                                    {/* <!--menu start--> */}
                                    <ul id="menu">
                                        <li class="nav-item">
                                            <a href="/#" class="nav-link active">Home</a>
                                        </li>
                                        
                                        <li class="nav-item">
                                            <a href="development-application.html" class="nav-link"><Link to="/Development/" activeClassName="active">Development Application</Link></a>
                                        </li>
                                        
                                        <HeaderMenu href="/#" class="nav-link" text="Subdivisions" />
                                        <HeaderMenu href="/#" class="nav-link" text="Rezonings" />
                                        <HeaderMenu href="/#" class="nav-link" text="Contact" />
                                        {/* <li class="nav-item">
                                            <a href="/#" class="nav-link">Subdivisions</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="/#" class="nav-link">Rezonings</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/#" class="nav-link">Contact</a>
                                        </li> */}
                                    </ul>
                                    <h2 class="d-none d-lg-block"><a href="tel:1300438232">1300 438 232 (24 hours)</a></h2>
                                </div>
                                {/* <!-- menu toggler --> */}
                                <div class="hamburger-menu">
                                    <span class="line-top"></span>
                                    <span class="line-center"></span>
                                    <span class="line-bottom"></span>
                                </div> 
                            </div>
                        </div>
                    </div>
            </header>
        </div>   
    )
}

export default Header



// <header class="d-flex align-items-center sticky">
//         <div class="container-fluid">
//             <div class="row align-items-end">
//                 <div class="col-12">
//                     <h5><a href="#">Consultant Portal</a> | Client Portal | Make Payment</h5>
//                 </div>
//                 <div class="col-lg-3 col-8 text-left">
//                     <!--logo start-->
//                     <a href="index.html"><img src="img/logo.png" class="img-fluid" alt=""></a>
//                     <!--logo end-->
//                 </div>
//                 <div class="col-lg-9 col-4">
//                     <div class="d-flex align-items-center mt_20">
//                         <!--menu start-->
//                         <ul id="menu">
//                             <li class="nav-item">
//                                 <a href="#" class="nav-link active">Home</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a href="development-application.html" class="nav-link">Development Applications</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a href="#" class="nav-link">Subdivisions</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a href="#" class="nav-link">Rezonings</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a href="#" class="nav-link">Contact</a>
//                             </li>
//                         </ul>
//                         <h2 class="d-none d-lg-block"><a href="tel:1300438232">1300 438 232 (24 hours)</a></h2>
//                     </div>
//                     <!-- menu toggler -->
//                     <div class="hamburger-menu">
//                         <span class="line-top"></span>
//                         <span class="line-center"></span>
//                         <span class="line-bottom"></span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </header> 
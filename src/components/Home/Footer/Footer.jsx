import React from 'react'
import './Footer.css'
import FooterBox from './FooterBox'

function Footer(){

    return(
        <div>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 mt_30">
                            <FooterBox heading="Services" textOne="Urban Planning" textTwo="Strategic Planning" textThree="Project Management" textFour="Pre-development" textFive="Government Liaison" />
                            {/* <h5>Services</h5>
                            <ul>
                                <li><a href="#">Urban Planning</a></li>
                                <li><a href="#">Strategic Planning</a></li>
                                <li><a href="#">Project Management</a></li>
                                <li><a href="#">Pre-development</a></li>
                                <li><a href="#">Government Liaison</a></li>
                            </ul> */}
                        </div>
                        <div class="col-lg-3 col-md-2 mt_30">
                        <FooterBox heading="Sectors" textOne="Residential" textTwo="Commercial" textThree="Government" textFour="Tourism" textFive="Health" />
                            {/* <h5>Sectors</h5>
                            <ul>
                                <li><a href="#">Residential</a></li>
                                <li><a href="#">Commercial</a></li>
                                <li><a href="#">Government</a></li>
                                <li><a href="#">Tourism</a></li>
                                <li><a href="#">Health</a></li>
                            </ul> */}
                        </div>
                        <div class="col-md-3 mt_30">
                            <FooterBox heading="Precise Planning" textOne="Careers" textTwo="Media Enquiries" textThree="Privacy" textFour="Disclaimers" textFive="Make a Payment" />
                            {/* <h5>Precise Planning</h5>
                            <ul>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Media Enquiries</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Disclaimers</a></li>
                                <li><a href="#">Make a Payment</a></li>
                            </ul> */}
                        </div>
                        <div class="col-lg-3 col-md-4 mt_30">
                            <h5>Connect with Precise Planning</h5>
                            <a href="mailto:contact@preciseplanning.com.au" class="email">contact@preciseplanning.com.au</a>
                            <a href="tel:1300438232" class="phone">1300 438 232</a>
                            <a href="#">Contact Form</a>
                            <p>152 Sailors Bay Road, Northbridge NSW 2063</p>
                        </div>
                        <div class="col-12 text-center mt_50">
                            <p class="mx-auto">© Precise Planning 2000 - 2021</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer


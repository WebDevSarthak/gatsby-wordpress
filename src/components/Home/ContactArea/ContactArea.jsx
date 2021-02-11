import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
// import '../../helper.css'
// import '../../style.css'
// import '../../responsive.css'
import '../ContactArea/ContactArea.css'
import ContactAreaBox from './ContactAreaBox'

function ContactArea(){

    const textOne =  "Give a trained Town Planner at Precise Planning a call to discuss your situation."
    const textTwo = "Email Precise Planning and a trained Town Planner will get back to you within 24 hours."
    
    return(
        <div>
            <div className="contact_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mt_30">
                            <h2>PRECISE PLANNING QUICK CONTACT</h2>
                        </div>
                    
                        <ContactAreaBox href="tel:1300438232" font="fas fa-phone" tel="tel:1300438232" text={textOne} h3="via Phone" />
                        {/* <div className="col-lg-3 col-md-4 mt_30 text-center">
                            <a href="tel:1300438232"><i className="fas fa-phone"></i></a>
                            <h3><a href="tel:1300438232">via Phone</a></h3>
                            <p>Give a trained Town Planner at Precise Planning a call to discuss your situation.</p>
                            </div> */}
                        
                        <div className="col-lg-3 col-md-4 mt_30 text-center">
                            <i className="far fa-comment-dots"></i>
                            <h3>via Live Chat</h3>
                            <p>Start a Live Chat conversation with a human Town Planner at Precise Planning for an instant response.</p>
                        </div>
                        
                        <ContactAreaBox href="mailto:contact@preciseplanning.com.au" font="fas fa-envelope" tel="mailto:contact@preciseplanning.com.au"
                        text={textTwo} h3="via Email" />
                        {/*
                        <div className="col-lg-3 col-md-4 mt_30 text-center">
                            <a href="mailto:contact@preciseplanning.com.au"><i className="far fa-envelope"></i></a>
                            <h3><a href="mailto:contact@preciseplanning.com.au">via Email</a></h3>
                            <p>Email Precise Planning and a trained Town Planner will get back to you within 24 hours.</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default ContactArea
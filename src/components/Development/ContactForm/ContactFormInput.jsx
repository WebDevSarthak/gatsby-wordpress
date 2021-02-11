import { checkPropTypes } from 'prop-types'
import React from 'react'
import './ContactForm.css'

function ContactFormInput(props){
    // console.log(props.divClass)
    return(
        <div class={props.divClass}>
          <input type={props.type} class={props.class} placeholder={props.placeholder} />
        </div>
    )
}

export default ContactFormInput

// <div class="col-md-6 mt_10">
//      <input type="text" class="input_box" placeholder="First Name" />
// </div>
// <div class="col-md-6 mt_10">
//      <input type="text" class="input_box" placeholder="Last Name" />
// </div>
// <div class="col-12 mt_10">
//      <input type="email" class="input_box" placeholder="Email Address" />
// </div>
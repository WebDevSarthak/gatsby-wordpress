import React from 'react'

function ServiceContent(props){
    console.log(props)
    // console.log(children)
    return(
        // <div class="content">
        //     <p class="mt_20">Precise Planning understands that success stems from well-established relationships with investors, consultants, government agencies, and landowners. Collaboration, partnership, and relationship are paramount to our approach in project management.</p>
        //     <p class="mt_20">We are excited to work you on your next project. If you would like to discuss your next development, reach out to us <a href="/#">here!</a></p>
        <div>    
            {/* <h4 class="mt_20">{props.text}</h4>
            <p class="mt_20">{props.paraText}<a href="/#">here</a>.</p>

            <h4 class="mt_20">{props.text}</h4>
            <p class="mt_20">{props.paraText} <a href="/#">here</a>.</p> */}

            <h4 class="mt_20">{props.text}</h4>
            <p class="mt_20">{props.paraText}</p>

            {/* <h4 class="mt_20">{props.text}</h4>
            <p class="mt_20">{props.paraText}</p> */}
        </div> 
    )
}

export default ServiceContent

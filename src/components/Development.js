import React from 'react'
import '../components/helper.css'
import '../components/style.css'
import Header from './Home/Header/Header'
import HomeArea from './Development/HomeArea/HomeArea'
import Application from './Development/Application/Application'
import ContactArea from './Home/ContactArea/ContactArea'
import ContentArea from './Development/ContentArea/ContentArea'
import ContactForm from './Development/ContactForm/ContactForm'
import PracticeArea from './Home/PracticeArea/PracticeArea'
import Footer from './Home/Footer/Footer'
import '../components/responsive.css'

function Development(){
    return (
        <div>
            <Header />
            <HomeArea />
            <Application />
            <ContactArea />
            <ContentArea />
            <ContactForm />
            <PracticeArea />
            <Footer />
        </div>   
    )
}

export default Development





















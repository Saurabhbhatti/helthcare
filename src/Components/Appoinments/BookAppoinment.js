import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Faq from '../FAQ/Faq'
import AppoinmentCards from './AppoinmentCard'
import AnchorCard from '../Card3/AnchorCard'


const BookAppoointment = () => {
  return (
    <div>
        <Header/>
        <AppoinmentCards/>
        <AnchorCard/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default BookAppoointment
import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AppoinmentCards from './AppoinmentCard'
import AnchorCard from '../Card3/AnchorCard'
import JoinUs from '../JoinUs/JoinUs'

const BookAppoointment = () => {
  return (
    <div>
        <Header/>
        <AppoinmentCards/>
        <AnchorCard/>
        <JoinUs/>
        <Footer/>
    </div>
  )
}

export default BookAppoointment
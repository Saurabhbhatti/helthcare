import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AppoinmentCards from './AppoinmentCard'
import JoinUs from '../JoinUs/JoinUs'

const BookAppoointment = () => {
  return (
    <div>
        <Header/>
        <AppoinmentCards/>
        <JoinUs/>
        <Footer/>
    </div>
  )
}

export default BookAppoointment
import React from 'react'
import Header from '../Component/Header'
import Banner from '../Pages/Banner'
import Bannertwo from '../Pages/Bannertwo'
import Paymentdetails from '../Pages/Paymentdetails'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <section className='flex md:ps-40 p-3'>
        <Bannertwo />
      </section>
      <section>
        <Paymentdetails/>
      </section>
    </div>
  )
}

export default Home
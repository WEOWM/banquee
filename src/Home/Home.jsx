import React from 'react'
import Header from '../Component/Header'
import Banner from '../Pages/Banner'
import Bannertwo from '../Pages/Bannertwo'
import Paymentdetails from '../Pages/Paymentdetails'
import Organize from '../Pages/Organize'
import Staynotified from '../Pages/Staynotified'
import Toolpage from '../Pages/Toolpage'
import Pcards from '../Pages/Pcards'
import Footer from '../Pages/Footer'
import CustomerReview from '../Pages/CustomerReview'
import Mainbanner from '../Pages/Mainbanner'
import FAQ from '../Pages/FAQ'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <section className='flex md:ps-40 p-3'>
        <Bannertwo />
      </section>
      <section>
        <Paymentdetails />
      </section>
      <section>
        <Organize />
      </section>
      <section>
        <Staynotified />
      </section>
      <section>
        <Toolpage />
      </section>
      <section>
        <hr className='relative top-10' />
      </section>
      <section>
       <Pcards/>
      </section>
      <section className='relative top-80'>
        <CustomerReview/>
      </section>
      <section className='relative top-80 md:p-12 '>
        <Mainbanner/>
      </section>
      <section className='relative top-80'>
        <FAQ/>
      </section>
      <footer>
        <Footer/>
      </footer>
      
    </div>
  )
}

export default Home
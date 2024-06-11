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
import Blog from '../Pages/Blog'

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
        <hr className='relative md:top-10' />
      </section>
      <section >
       <Pcards/>
      </section>
      <section className='relative md:top-80 top-16'>
        <CustomerReview/>
      </section>
      <section className='relative md:top-80 top-20 md:p-12 '>
        <Mainbanner/>
      </section>
      <section className='relative md:top-80 top-20'>
        <FAQ/>
      </section>
      <section className='relative md:top-80 top-20 md:p-12 '>
        <Blog/>
      </section>
      <footer className='relative max-sm:bottom-64'>
        <Footer/>
      </footer>
      
    </div>
  )
}

export default Home
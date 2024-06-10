import React from 'react'
import logo33 from '../assets/paymenticon/logo33.svg'
import logo from '../assets/paymenticon/logo.svg'
import logo1 from '../assets/paymenticon/logo (1).svg'
import logo2 from '../assets/paymenticon/logo (2).svg'
import logo3 from '../assets/paymenticon/logo (3).svg'
import logo4 from '../assets/paymenticon/logo (4).svg'
import logo5 from '../assets/paymenticon/logo (5).svg'
import logo6 from '../assets/paymenticon/logo (6).svg'
import logo7 from '../assets/paymenticon/logo (7).svg'
import logo8 from '../assets/paymenticon/logo (8).svg'
import badge from '../assets/tickmark/badge.svg'

const Toolpage = () => {
    const data = [
        {
            img: badge,
            title: 'Secure and encrypted integration',
        },
        {
            img: badge,
            title: 'Fully API interface',
        },
        {
            img: badge,
            title: 'Payments worldwide',
        },
    ];


    return (


        <div className='md:p-20 '>
            <div className='grid grid-cols-1'>
                <div className='flex flex-wrap gap-5'>
                    <img src={logo33} alt="logo33" className='w-1/4 md:w-auto' />
                    <img src={logo} alt="logo" className='w-1/4 md:w-auto' />
                    <img src={logo1} alt="logo1" className='w-1/4 md:w-auto' />
                    <img src={logo2} alt="logo2" className='w-1/4 md:w-auto' />
                </div>
                <div className='flex flex-wrap gap-3'>
                    <img src={logo3} alt="logo3" className='w-1/6 md:w-auto' />
                    <img src={logo4} alt="logo4" className='w-1/6 md:w-auto' />
                    <img src={logo1} alt="logo1" className='w-1/6 md:w-auto' />
                    <img src={logo5} alt="logo5" className='w-1/6 md:w-auto' />
                    <img src={logo6} alt="logo6" className='w-1/6 md:w-auto' />
                    <img src={logo7} alt="logo7" className='w-1/6 md:w-auto' />
                    <img src={logo8} alt="logo8" className='w-1/6 md:w-auto' />
                </div>
            </div>
            <div className='grid grid-cols-2 max-sm:grid-cols-1'>
                <div className='flex flex-col md:mt-32 md:p-2 p-4'>
                    <span className='md:text-[18px] text-[30px]  font-medium'>Tools</span>
                    {/* <span className='md:text-[60px] text-[30px] font-semibold'>Seemless</span>
                    <span className='md:text-[60px] text-[30px] font-semibold'>integration</span> */}
                    <span className='md:text-[58px] text-[30px]  font-medium'> Seemless integration</span>
                    <span className='md:w-[539px] md:text-[20px] font-semibold mt-3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</span>
                </div>

                <div className='place-content-center md:mt-36 mt-4 max-sm:p-4'>
                    {data.map((item, index) => (
                        <div key={index} className='flex items-center gap-5 mt-2'>
                            <div className='w-10 h-10 bg-[#5BB5A2] flex justify-center items-center rounded-full mt-1 '>

                                <img src={item.img} alt="" />
                            </div>
                            <span className='font-medium'>{item.title}</span>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}

export default Toolpage
import React from 'react'
import ms from "../assets/app.svg"
import tic from '../assets/badge.png'
import b1  from "../assets/button/Apple Store.svg" 
import b2  from "../assets/button/Google Store.svg" 

const Mainbanner = () => {
    const data = [
        {
            img: tic,
            title: 'Instant transactions',
        },
        {
            img: tic,
            title: 'Saving accounts',
        },
        {
            img: tic,
            title: 'Payments worldwide',
        },
        {
            img: tic,
            title: '100% mobile banking',
        },
    ];
    return (
        <div className='w-full h-auto bg-[#5BB5A2] rounded-lg '>

            <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-5 place-content-center place-items-center p-10'>
                <div>
                    <div className='flex flex-col text-white'>
                        <span className='text-[60px] font-medium'>One app.</span>
                        <span className='text-[60px] font-bold'>One banking.</span>
                    </div>
                    <div>
                        <span className='text-[20px] font-bold text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</span>
                    </div>
                    <div className='relative md:bottom-28'>
                        <div className='place-content-cente grid grid-cols-2 max-sm:grid-cols-1 md:mt-36 mt-4'>
                            {data.map((item, index) => (
                                <div key={index} className='flex  items-center gap-5 mt-2'>
                                    <div className='w-10 h-10 bg-[#5BB5A2] flex  justify-center items-center rounded-full mt-1 '>

                                        <img  src={item.img} alt="" />
                                    </div>
                                    <span className='font-medium text-white'>{item.title}</span>
                                </div>
                            ))}

                        </div>

                    </div>

                    <div className='flex gap-3 relative md:bottom-20 md:left-28 max-sm:top-5'>
                        <img className='cursor-pointer' src={b1} alt="" />
                        <img className='cursor-pointer' src={b2} alt="" />
                    </div>
                </div>

                <div className='mt-10 relative top-11 '>
                    <img className='boun' src={ms} alt="" />
                </div>

            </div>


            <div>

            </div>

        </div>
    )
}

export default Mainbanner
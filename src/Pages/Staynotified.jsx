import React, { useEffect, useRef } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import badge from '../assets/tickmark/badge.svg'
import blogo from '../assets/Logo/b..png'
import { RiAppleFill } from 'react-icons/ri';


const Staynotified = () => {
    const data = [
        {
            img: badge,
            title: 'Malesuada Ipsum',
        },
        {
            img: badge,
            title: 'Vestibulum',
        },
        {
            img: badge,
            title: 'Parturient Lorem',
        },
    ];

    const data2 = [
        {
            title: 'Banko.',
            dep: 'You payment of 49€ has been processed!',
            price: '-999€',
        },
        {
            title: 'Banko.',
            dep: 'You got a new support message!',
            price: '-49€',
        },
        {
            title: 'Banko.',
            dep: 'You payment was declined!',
            price: '-29€',
        },
        {
            title: 'Banko.',
            dep: 'Please verify your payment of 99€!',
            price: '-149€',
        },
        {
            title: 'Banko.',
            dep: 'New account statistics are available!',
            price: '-14€',
        },
        {
            title: 'Banko.',
            dep: 'You payment of 49€ has been processed!',
            price: '-999€',
        },
        {
            title: 'Banko.',
            dep: 'You got a new support message!',
            price: '-49€',
        },
        {
            title: 'Banko.',
            dep: 'You payment was declined!',
            price: '-29€',
        },
        {
            title: 'Banko.',
            dep: 'Please verify your payment of 99€!',
            price: '-149€',
        },
        {
            title: 'Banko.',
            dep: 'New account statistics are available!',
            price: '-14€',
        },
        {
            title: 'Banko.',
            dep: 'You payment of 49€ has been processed!',
            price: '-999€',
        },
        {
            title: 'Banko.',
            dep: 'You got a new support message!',
            price: '-49€',
        },
        {
            title: 'Banko.',
            dep: 'You payment was declined!',
            price: '-29€',
        },
        {
            title: 'Banko.',
            dep: 'Please verify your payment of 99€!',
            price: '-149€',
        },
        {
            title: 'Banko.',
            dep: 'New account statistics are available!',
            price: '-14€',
        },
        {
            title: 'Banko.',
            dep: 'You payment of 49€ has been processed!',
            price: '-999€',
        },
        {
            title: 'Banko.',
            dep: 'You got a new support message!',
            price: '-49€',
        },
        {
            title: 'Banko.',
            dep: 'You payment was declined!',
            price: '-29€',
        },
        {
            title: 'Banko.',
            dep: 'Please verify your payment of 99€!',
            price: '-149€',
        },
        {
            title: 'Banko.',
            dep: 'New account statistics are available!',
            price: '-14€',
        },
        {
            title: 'Banko.',
            dep: 'You payment of 49€ has been processed!',
            price: '-999€',
        },
        {
            title: 'Banko.',
            dep: 'You got a new support message!',
            price: '-49€',
        },
        {
            title: 'Banko.',
            dep: 'You payment was declined!',
            price: '-29€',
        },
        {
            title: 'Banko.',
            dep: 'Please verify your payment of 99€!',
            price: '-149€',
        },
        {
            title: 'Banko.',
            dep: 'New account statistics are available!',
            price: '-14€',
        },
        {
            title: 'Banko.',
            dep: 'You payment of 49€ has been processed!',
            price: '-999€',
        },
        {
            title: 'Banko.',
            dep: 'You got a new support message!',
            price: '-49€',
        },
        {
            title: 'Banko.',
            dep: 'You payment was declined!',
            price: '-29€',
        },
        {
            title: 'Banko.',
            dep: 'Please verify your payment of 99€!',
            price: '-149€',
        },
        {
            title: 'Banko.',
            dep: 'New account statistics are available!',
            price: '-14€',
        },
        {
            title: 'Banko.',
            dep: 'You payment of 49€ has been processed!',
            price: '-999€',
        },
        {
            title: 'Banko.',
            dep: 'You got a new support message!',
            price: '-49€',
        },
        {
            title: 'Banko.',
            dep: 'You payment was declined!',
            price: '-29€',
        },
        {
            title: 'Banko.',
            dep: 'Please verify your payment of 99€!',
            price: '-149€',
        },
        {
            title: 'Banko.',
            dep: 'New account statistics are available!',
            price: '-14€',
        },
        
        
    ];


    const containerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (containerRef.current) {
                containerRef.current.scrollTo({
                    top: containerRef.current.scrollTop + 3, // Adjust scrolling speed as needed
                    behavior: 'smooth',
                });

                if (
                    containerRef.current.scrollTop >=
                    containerRef.current.scrollHeight - containerRef.current.clientHeight
                ) {
                    containerRef.current.scrollTop = 0;
                }
            }
        }, 50); // Adjust scrolling interval as needed

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='grid grid-cols-2 max-sm:grid-cols-1 md:p-10'>
            <div className='md:p-10 p-2'>
                <div className='flex flex-col'>
                    <span className='text-[18px] font-medium'>Notifications</span>
                    <span className='md:text-[60px] text-[50px] font-medium'>Stay notified</span>
                    <span className='md:text-[19px]  md:w-[538px]  font-semibold w-full'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
                </div>
                <div>
                    <div>
                        <div className='mt-8  '>
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

                    <div>
                        <div className='flex items-center gap-3 mt-5 p-5'>
                        <span className='text-[#5BB5A2] max-sm:text-[10px]'>Compare Cards</span>
                        <span className='pt-1 text-[#5BB5A2]'><FaLongArrowAltRight /></span>
                        </div>
                    </div>

                </div>
            </div>

            <div>
            <div className='md:p-20  max-sm:mt-14'>
                    <div ref={containerRef} className='md:w-[500px] w-full h-[29.2rem]  flex flex-col gap-1 overflow-hidden'>
                        {data2.map((item, index) => (
                            <div key={index} className='w-full h-[83px] bg-[#F8F8F8] flex rounded-lg  justify-start items-center p-3  '>
                                <div className='w-[50px] h-[50px] rounded-md bg-[#5BB5A2] flex justify-center items-center'>
                                  <img src={blogo} alt="" />
                                </div>
                                <div className='flex flex-col ms-2'>
                                    <span className='text-[15px] font-medium'>{item.title}</span>
                                    <span className='text-[11px]  text-[#1A191E]'>{item.dep}</span>
                                </div>
                                {/* <div>
                                    <span>{item.price} </span>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Staynotified
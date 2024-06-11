import React, { useEffect, useRef } from 'react';
// import { TiTick } from 'react-icons/ti';
import titick from "../assets/tickmark/badge.svg"
import { RiAppleFill } from 'react-icons/ri';

const Paymentdetails = () => {
    const data = [
        {
            img:titick ,
            title: 'Malesuada Ipsum',
        },
        {
            img:titick ,
            title: 'Vestibulum',
        },
        {
            img:titick ,
            title: 'Parturient Lorem',
        },
    ];

    const data2 = [
        {
            title: 'Apple',
            dep: 'Macbook',
            price: '-999€',
        },
        {
            title: 'Amazon',
            dep: 'Electronics',
            price: '-49€',
        },
        {
            title: 'Twitter',
            dep: 'Ads',
            price: '-29€',
        },
        {
            title: 'Microsoft',
            dep: 'Office Suite',
            price: '-149€',
        },
        {
            title: 'Dropbox',
            dep: 'Cloud',
            price: '-14€',
        },
        {
            title: 'Paypal',
            dep: 'Shopping',
            price: '-200€',
        },
        {
            title: 'Apple',
            dep: 'Macbook',
            price: '-999€',
        },
        {
            title: 'Amazon',
            dep: 'Electronics',
            price: '-49€',
        },
        {
            title: 'Twitter',
            dep: 'Ads',
            price: '-29€',
        },
        {
            title: 'Microsoft',
            dep: 'Office Suite',
            price: '-149€',
        },
        {
            title: 'Dropbox',
            dep: 'Cloud',
            price: '-14€',
        },
        {
            title: 'Paypal',
            dep: 'Shopping',
            price: '-200€',
        },
        {
            title: 'Apple',
            dep: 'Macbook',
            price: '-999€',
        },
        {
            title: 'Amazon',
            dep: 'Electronics',
            price: '-49€',
        },
        {
            title: 'Twitter',
            dep: 'Ads',
            price: '-29€',
        },
        {
            title: 'Microsoft',
            dep: 'Office Suite',
            price: '-149€',
        },
        {
            title: 'Dropbox',
            dep: 'Cloud',
            price: '-14€',
        },
        {
            title: 'Paypal',
            dep: 'Shopping',
            price: '-200€',
        },
        {
            title: 'Apple',
            dep: 'Macbook',
            price: '-999€',
        },
        {
            title: 'Amazon',
            dep: 'Electronics',
            price: '-49€',
        },
        {
            title: 'Twitter',
            dep: 'Ads',
            price: '-29€',
        },
        {
            title: 'Microsoft',
            dep: 'Office Suite',
            price: '-149€',
        },
        {
            title: 'Dropbox',
            dep: 'Cloud',
            price: '-14€',
        },
        {
            title: 'Paypal',
            dep: 'Shopping',
            price: '-200€',
        },
        {
            title: 'Apple',
            dep: 'Macbook',
            price: '-999€',
        },
        {
            title: 'Amazon',
            dep: 'Electronics',
            price: '-49€',
        },
        {
            title: 'Twitter',
            dep: 'Ads',
            price: '-29€',
        },
        {
            title: 'Microsoft',
            dep: 'Office Suite',
            price: '-149€',
        },
        {
            title: 'Dropbox',
            dep: 'Cloud',
            price: '-14€',
        },
        {
            title: 'Paypal',
            dep: 'Shopping',
            price: '-200€',
        },
        {
            title: 'Apple',
            dep: 'Macbook',
            price: '-999€',
        },
        {
            title: 'Amazon',
            dep: 'Electronics',
            price: '-49€',
        },
        {
            title: 'Twitter',
            dep: 'Ads',
            price: '-29€',
        },
        {
            title: 'Microsoft',
            dep: 'Office Suite',
            price: '-149€',
        },
        {
            title: 'Dropbox',
            dep: 'Cloud',
            price: '-14€',
        },
        {
            title: 'Paypal',
            dep: 'Shopping',
            price: '-200€',
        },
        {
            title: 'Apple',
            dep: 'Macbook',
            price: '-999€',
        },
        {
            title: 'Amazon',
            dep: 'Electronics',
            price: '-49€',
        },
        {
            title: 'Twitter',
            dep: 'Ads',
            price: '-29€',
        },
        {
            title: 'Microsoft',
            dep: 'Office Suite',
            price: '-149€',
        },
        {
            title: 'Dropbox',
            dep: 'Cloud',
            price: '-14€',
        },
        {
            title: 'Paypal',
            dep: 'Shopping',
            price: '-200€',
        },
        {
            title: 'Apple',
            dep: 'Macbook',
            price: '-999€',
        },
        {
            title: 'Amazon',
            dep: 'Electronics',
            price: '-49€',
        },
        {
            title: 'Twitter',
            dep: 'Ads',
            price: '-29€',
        },
        {
            title: 'Microsoft',
            dep: 'Office Suite',
            price: '-149€',
        },
        {
            title: 'Dropbox',
            dep: 'Cloud',
            price: '-14€',
        },
        {
            title: 'Paypal',
            dep: 'Shopping',
            price: '-200€',
        },
        {
            title: 'Apple',
            dep: 'Macbook',
            price: '-999€',
        },
        {
            title: 'Amazon',
            dep: 'Electronics',
            price: '-49€',
        },
        {
            title: 'Twitter',
            dep: 'Ads',
            price: '-29€',
        },
        {
            title: 'Microsoft',
            dep: 'Office Suite',
            price: '-149€',
        },
        {
            title: 'Dropbox',
            dep: 'Cloud',
            price: '-14€',
        },
        {
            title: 'Paypal',
            dep: 'Shopping',
            price: '-200€',
        },
        {
            title: 'Apple',
            dep: 'Macbook',
            price: '-999€',
        },
        {
            title: 'Amazon',
            dep: 'Electronics',
            price: '-49€',
        },
        {
            title: 'Twitter',
            dep: 'Ads',
            price: '-29€',
        },
        {
            title: 'Microsoft',
            dep: 'Office Suite',
            price: '-149€',
        },
        {
            title: 'Dropbox',
            dep: 'Cloud',
            price: '-14€',
        },
        {
            title: 'Paypal',
            dep: 'Shopping',
            price: '-200€',
        },
        {
            title: 'Apple',
            dep: 'Macbook',
            price: '-999€',
        },
        {
            title: 'Amazon',
            dep: 'Electronics',
            price: '-49€',
        },
        {
            title: 'Twitter',
            dep: 'Ads',
            price: '-29€',
        },
        {
            title: 'Microsoft',
            dep: 'Office Suite',
            price: '-149€',
        },
        {
            title: 'Dropbox',
            dep: 'Cloud',
            price: '-14€',
        },
        {
            title: 'Paypal',
            dep: 'Shopping',
            price: '-200€',
        },
        {
            title: 'Apple',
            dep: 'Macbook',
            price: '-999€',
        },
        {
            title: 'Amazon',
            dep: 'Electronics',
            price: '-49€',
        },
        {
            title: 'Twitter',
            dep: 'Ads',
            price: '-29€',
        },
        {
            title: 'Microsoft',
            dep: 'Office Suite',
            price: '-149€',
        },
        {
            title: 'Dropbox',
            dep: 'Cloud',
            price: '-14€',
        },
        {
            title: 'Paypal',
            dep: 'Shopping',
            price: '-200€',
        },
        {
            title: 'Apple',
            dep: 'Macbook',
            price: '-999€',
        },
        {
            title: 'Amazon',
            dep: 'Electronics',
            price: '-49€',
        },
        {
            title: 'Twitter',
            dep: 'Ads',
            price: '-29€',
        },
        {
            title: 'Microsoft',
            dep: 'Office Suite',
            price: '-149€',
        },
        {
            title: 'Dropbox',
            dep: 'Cloud',
            price: '-14€',
        },
        {
            title: 'Paypal',
            dep: 'Shopping',
            price: '-200€',
        },
        {
            title: 'Apple',
            dep: 'Macbook',
            price: '-999€',
        },
        {
            title: 'Amazon',
            dep: 'Electronics',
            price: '-49€',
        },
        {
            title: 'Twitter',
            dep: 'Ads',
            price: '-29€',
        },
        {
            title: 'Microsoft',
            dep: 'Office Suite',
            price: '-149€',
        },
        {
            title: 'Dropbox',
            dep: 'Cloud',
            price: '-14€',
        },
        {
            title: 'Paypal',
            dep: 'Shopping',
            price: '-200€',
        },
        {
            title: 'Apple',
            dep: 'Macbook',
            price: '-999€',
        },
        {
            title: 'Amazon',
            dep: 'Electronics',
            price: '-49€',
        },
        {
            title: 'Twitter',
            dep: 'Ads',
            price: '-29€',
        },
        {
            title: 'Microsoft',
            dep: 'Office Suite',
            price: '-149€',
        },
        {
            title: 'Dropbox',
            dep: 'Cloud',
            price: '-14€',
        },
        {
            title: 'Paypal',
            dep: 'Shopping',
            price: '-200€',
        },
        {
            title: 'Apple',
            dep: 'Macbook',
            price: '-999€',
        },
        {
            title: 'Amazon',
            dep: 'Electronics',
            price: '-49€',
        },
        {
            title: 'Twitter',
            dep: 'Ads',
            price: '-29€',
        },
        {
            title: 'Microsoft',
            dep: 'Office Suite',
            price: '-149€',
        },
        {
            title: 'Dropbox',
            dep: 'Cloud',
            price: '-14€',
        },
        {
            title: 'Paypal',
            dep: 'Shopping',
            price: '-200€',
        },
        {
            title: 'Apple',
            dep: 'Macbook',
            price: '-999€',
        },
        {
            title: 'Amazon',
            dep: 'Electronics',
            price: '-49€',
        },
        {
            title: 'Twitter',
            dep: 'Ads',
            price: '-29€',
        },
        {
            title: 'Microsoft',
            dep: 'Office Suite',
            price: '-149€',
        },
        {
            title: 'Dropbox',
            dep: 'Cloud',
            price: '-14€',
        },
        {
            title: 'Paypal',
            dep: 'Shopping',
            price: '-200€',
        },
        {
            title: 'Apple',
            dep: 'Macbook',
            price: '-999€',
        },
        {
            title: 'Amazon',
            dep: 'Electronics',
            price: '-49€',
        },
        {
            title: 'Twitter',
            dep: 'Ads',
            price: '-29€',
        },
        {
            title: 'Microsoft',
            dep: 'Office Suite',
            price: '-149€',
        },
        {
            title: 'Dropbox',
            dep: 'Cloud',
            price: '-14€',
        },
        {
            title: 'Paypal',
            dep: 'Shopping',
            price: '-200€',
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
        <div className='w-full h-[550px] bg-[#E8F2EE]'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='p-10 md:p-20'>
                    <div>
                        <span className='md:text-[40px] text-[30px] font-bold'>Send & receive <br /> money instantly</span>
                    </div>
                    <div className='mt-5'>
                        <span className='font-medium text-[20px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</span>
                    </div>
                    <div className='mt-7 '>
                        {data.map((item, index) => (
                            <div key={index} className='flex items-center gap-5 max-sm:mt-3'>
                                <div className='w-10 h-10 bg-[#5BB5A2] flex justify-center items-center rounded-full mt-1'>
                                   <img src={titick} alt="" />
                                </div>
                                <span className='font-medium '>{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='md:p-20  max-sm:mt-14'>
                    <div ref={containerRef} className='md:w-[500px] w-full h-[29.2rem]  flex flex-col gap-1 overflow-hidden'>
                        {data2.map((item, index) => (
                            <div key={index} className='w-full h-[83px] bg-white flex rounded-lg  justify-around items-center p-3  '>
                                <div className='w-[50px] h-[50px] rounded-md bg-[#5BB5A2] flex justify-center items-center'>
                                    <RiAppleFill size={30} color='white' />
                                </div>
                                <div className='flex flex-col justify-start pe-[125px]'>
                                    <span className='text-[13px] font-medium ' >{item.title}</span>
                                    <span className='text-[11px]  text-[#1A191E]'>{item.dep}</span>
                                </div>
                                <div>
                                    <span>{item.price} </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Paymentdetails;

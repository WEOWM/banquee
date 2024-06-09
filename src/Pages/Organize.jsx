import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import camputer from "../assets/card/laptop.png"
import cycle from "../assets/card/bicycle.png"
import airplane from "../assets/card/airplane.png"
import camera from "../assets/card/camera-with-flash.png"
import Frame from "../assets/card/Frame 8.png"




const Organize = () => {
    const card = [
        {
            img: camputer ,
            color:"#E8F2EE",
            tit:"New Laptop",
            price:"400$"
        },
        {
            img: cycle,
            color:"#F1DFDF",
            tit:"Dream bike",
            price:"200$"
        },
        {
            img: airplane,
            color:"#DFE1F1",
            tit:"Holiday",
            price:"14000$"
        },
        {
            img: camera,
            color:"#DFEBF1",
            tit:"Camera",
            price:"100$"
        },
        {
            img: Frame,
            color:"#F8F8F8"
           
        },
    ]
    return (
        <div className='grid grid-cols-1 max-sm:mt-[30rem] '>
            <div className='flex flex-col p-10'>
                <span className='md:text-[12px]'>Saving Accounts</span>
                <span className='md:text-[65px] font-medium md:w-[610px] '>Organize your money the right way</span>
                <div className=' flex justify-between'>
                    <span className='md:text-[20px] font-medium md:w-[610px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    <div className='flex items-center gap-2'>
                        <span className='text-[#5BB5A2] max-sm:text-[10px]'>All Features</span>
                        <span className='pt-1 text-[#5BB5A2]'><FaLongArrowAltRight /></span>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-5 md:p-10 max-sm:grid-cols-2 gap-2'>
                {
                    card.map((item) => {
                        return (
                            <div className='' >
                                <div className='w-[214px] h-[214px] flex justify-center items-center rounded-lg' style={{ backgroundColor: item.color }}>
                                    <img src={item.img} alt="" />

                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-[18px] font-medium'>{item?.tit}</span>
                                    <span className='text-[13px] text-[#1A191E]'>{item?.price}</span>
                                </div>
                            </div>
                            
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Organize
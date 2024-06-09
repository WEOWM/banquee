import React from 'react'
import ri from '../assets/barge/ri_flashlight-line.png';
import barge from '../assets/barge/badge.png'
import mb from '../assets/barge/ri_smartphone-line.png';
import chate from '../assets/barge/ri_line-chart-line.png';
import bank from '../assets/barge/ri_bank-card-2-line.png';
import wifi from '../assets/barge/ri_wifi-line.png';
import mobilescreen from "../assets/mobile/app.svg"

const Bannertwo = () => {
    const card = [
        {
            img: ri,
            text: "Instant transactions",
            dep: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
        },
        {
            img: barge,
            text: "Saving accounts",
            dep: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
        },
        {
            img: mb,
            text: "Mobile banking",
            dep: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
        },
        {
            img: chate,
            text: "Advanced statistics",
            dep: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
        },
        {
            img: bank,
            text: "Virtual cards",
            dep: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
        },
        {
            img: wifi,
            text: "Contactless payments",
            dep: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
        },
    ]
    return (
        <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-20'>
            <div>
                <div className=''>
                    <div className='flex flex-col'>
                        <span className='text-[60px] font-medium'>One app.</span>
                        <span className='text-[60px] font-bold'>One banking.</span>
                    </div>
                    <div className=''>
                        <div className='grid grid-cols-2 gap-2'>
                            {
                                card.map((item) => {
                                    return (
                                        <div>
                                            <div className='h-auto  border border-gray-200 md:p-10 p-3 rounded-lg'>
                                                <div>
                                                    <div className='w-10 h-10 rounded-full bg-[#E8E8E8] flex justify-center items-center'>
                                                        <img src={item.img} alt="" />
                                                    </div>
                                                </div>

                                                <div className='w-[20px] mt-6'>
                                                    <span className='text-[20px] font-bold'>{item.text}</span>
                                                </div>
                                                <div>
                                                    <span className='text-[15px]'>{item.dep}</span>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                    </div>


                </div>
            </div>



            <div>
                <div className='boull max-sm:ps-6'>
                    <img src={mobilescreen} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Bannertwo
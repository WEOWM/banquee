import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
// import {card1} from '../assets/cards/card1.svg'
import card from '../assets/cards/card.svg'
import card3 from '../assets/cards/card3.svg'
import card2 from '../assets/cards/card2.svg'
import card4 from '../assets/cards/card4.svg'


const Banner = () => {
    const cards = [
        {
            img: card,
        },
        {
            img: card3,
        },
        {
            img: card2,
        },
        {
            img: card3,
        },
        {
            img: card4,
        },
    ]
    return (
        <div className='w-full md:h-[49rem] h-[30rem]  bg-[#E8F2EE] grid grid-cols-1'>
            <div className='flex justify-center relative top-32'>
                <div className=' md:w-[40%] md:h-[20rem]'>
                    <div className='flex flex-col relative top-10 items-center'>
                        <span className='text-[18px] md:text-[25px] font-bold'>Features</span>
                        <span className='md:text-[60px]  text-[24px] font-bold'>All in one card.</span>
                        <span className='md:text-[18px] text-[16px] font-bold'>Senectus et netus et malesuada fames ac turpis. </span>
                        <span className='md:text-[15px] text-[16px] font-bold'>Sagittis vitae et leo duis ut diam.</span>
                        <div className='flex justify-normal items-center  gap-3 pt-2'>
                            <button className="px-6 h-[39px] bg-[#5BB5A2] rounded-md text-white mt-4">
                                Open Account
                            </button>
                            <div className='flex justify-cente mt-3 items-center gap-3'>
                                <span className='text-[#5BB5A2]'>Compare Cards</span>
                                <span className='pt-1 text-[#5BB5A2]'><FaLongArrowAltRight /></span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className='relative top-31 hidden md:flex  '   >
                <div className='relative  top-[4.2rem] flex gap-7  justify-around md:flex    '>
                    <div>
                        <img className='relative  top-[12rem]' src={card} alt="" />
                    </div>
                    <div>
                        <img src={card3} alt="" />
                    </div>
                    <div>
                        <img src={card2} alt="" />
                    </div>
                    <div>
                        <img src={card3} alt="" />
                    </div>
                    <div>
                        <img src={card4} alt="" />
                    </div>
                    {/* {
                cards.map((item)=>{
                    return (
                        <img className='w-60 relative top' src={item.img} alt="" />
                    )
                })
               } */}
                </div>

            </div>

        </div>
    )
}

export default Banner
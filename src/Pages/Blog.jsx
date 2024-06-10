import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import img1 from "../assets/cardimge/image (3).png"
import img2 from "../assets/cardimge/dusan-jovic-2V4Qhq55maY-unsplash 1.png"
import img3 from "../assets/cardimge/towfiqu-barbhuiya-tbwOzgQYeSw-unsplash 1.png"

const Blog = () => {

    const cards = [
        {
            img: img1,
            heading: "How To Start Using Banko For Your Startup",
            dep: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",

        },
        {
            img: img2,
            heading: "10 Things Nobody Told You About Banko",
            dep: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",

        },
        {
            img: img3,
            heading: "7 Ways To Improve You Saving Habits",
            dep: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",

        },
    ]
    return (
        <div>
            <div className='flex justify-between' >
                <span className='text-3xl font-bold'>Blog</span>
                <span className='flex items-center gap-2  text-[#5BB5A2]'>All Articles<span className='pt-1 text-[#5BB5A2]'></span ><FaLongArrowAltRight /></span>
            </div>
            <div className='grid grid-cols-3 pt-5  gap-3'>
                {
                    cards.map((item) => {
                        return (
                            <div>
                                <div className='  p-4 '>
                                    <div>
                                        <img className=' rounded-lg' src={item.img} alt="" />
                                    </div>
                                    <div>
                                        <div>
                                            <span className='text-2xl font-bold'>How To Start Using Banko For Your Startup</span>
                                        </div>
                                        <div className='pt-2 font-semibold'>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.</span>
                                        </div>
                                        <div className='flex gap-3 pt-5 font-bold'>
                                            <span>Product</span>
                                            <span>Technology</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Blog
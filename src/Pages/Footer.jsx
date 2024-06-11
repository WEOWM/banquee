import React from 'react'
import logo from '../assets/Logo/banquee..svg'
import { LuCopyright } from "react-icons/lu";
const Footer = () => {
    const data = [
        {
            title: "About",
            dec: "Features",
            dec: "Pricing",
            dec: "Support"

        },
        {
            title: "Blog",
            dec: "Features",
            dec: "Pricing",
            dec: "Support"

        },
    ]
    return (
        <div className='relative top-[22rem] ps-4'>
            <hr />
            <div className='md:p-20 p-5  '>
                <div className='grid grid-cols-5 max-sm:grid-cols-2 gap-9 md:h-[131px]'>
                    <div className='hidden md:flex'>
                        <img className='animate-bounce h-8' src={logo} alt="" />
                    </div>

                    <div className='flex flex-col '>
                        <span className='font-bold text-[19px]'>About</span>
                        <span className='font-bold text-[#5c5c5d] mt-2'>Features</span>
                        <span className='font-bold text-[#5c5c5d] mt-2'>Pricing</span>
                        <span className='font-bold text-[#5c5c5d] mt-2'>Support</span>
                    </div>
                    <div className='flex flex-col '>
                        <span className='font-bold text-[19px]'>Blog</span>
                        <span className='font-bold text-[#5c5c5d] mt-2'>Products</span>
                        <span className='font-bold text-[#5c5c5d] mt-2'>Technology</span>
                        <span className='font-bold text-[#5c5c5d] mt-2'>Crypto</span>
                    </div>
                    <div className='flex flex-col '>
                        <span className='font-bold text-[19px]'>Webflow</span>
                        <span className='font-bold text-[#5c5c5d] mt-2'>Styleguide</span>
                        <span className='font-bold text-[#5c5c5d] mt-2'>Changelog</span>
                    </div>
                    <div className='flex flex-col '>
                        <span className='font-bold text-[19px]'>Social Media</span>
                        <span className='font-bold text-[#5c5c5d] mt-2'>Twitter</span>
                        <span className='font-bold text-[#5c5c5d] mt-2'>Facebook</span>
                        <span className='font-bold text-[#5c5c5d] mt-2'>Instagram</span>
                    </div>

                </div>
            </div>
            <hr />
          <div className='grid '>
          <div className='flex justify-between p-8 max-sm:flex-col '>
                <div className='flex justify-center items-center md:gap-3 text-[13px]'>
                    <span><LuCopyright color='gray' /></span>
                    <span className='text-gray-600 font-bold'>Made by</span>
                    <span className='text-[#5BB5A2] font-bold'>Pawel Gola</span>
                    <span className='text-gray-600 font-bold'>- Powered by</span>
                    <span className='text-[#5BB5A2] font-bold'>Webflow</span>
                </div>
                <div className='flex gap-5 max-sm:justify-center text-[13px]'>
                    <span className='text-gray-600 font-bold'>Impressum</span>
                    <span className='text-gray-600 font-bold'>Datenschutz</span>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Footer
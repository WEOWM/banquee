import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Drawer = ({ isOpen, toggleDrawer }) => {
    return (
        <div className={`fixed inset-0 z-50  transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="absolute inset-0 bg-gray-600 opacity-75" onClick={toggleDrawer}></div>
            <div className="relative w-64 bg-white h-full shadow-lg p-4">
                <button onClick={toggleDrawer} className="absolute top-4 right-4 text-black">
                    &times;
                </button>
                <nav>
                    <ul className='font-semibold'>
                        <li className="my-4"><a href="#home">Features</a></li>
                        <li className="my-4 flex items-center justify-start gap-2"><a href="#about">Compare </a><IoIosArrowDown /></li>
                        <li className="my-4 "><a href="#services">Support</a></li>
                        <li className="my-4 flex items-center justify-start gap-2"><a href="#contact">Blog</a><IoIosArrowDown /></li>
                    </ul>
                    <div className="flex flex-col gap-3">
                        <span className="pt-2 text-[#5BB5A2]">Login</span>
                        <div className=" flex justify-center items-center  bg-[#5BB5A2] rounded-md ">
                            <button className="px-6 h-[39px] bg-[#5BB5A2] rounded-md text-white">
                                Open Account
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Drawer;

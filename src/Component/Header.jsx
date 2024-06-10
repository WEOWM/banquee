import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import banquee from "../assets/Logo/banquee..svg";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "./Drawer";


const Header = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
            <div className="w-full h-20 shadow-md">
                <div className="w-full h-20 md:flex justify-around items-center hidden">
                    <div>
                        <img className="" src={banquee} alt="" srcset="" />
                    </div>

                    <div className="flex gap-4 font-semibold">
                        <span>Features</span>
                        <div className="flex items-center gap-2">
                            <span>Compare</span>
                            <span>
                                <IoIosArrowDown />
                            </span>
                        </div>
                        <span>Support</span>
                        <div className="flex items-center gap-2">
                            <span>Blog</span>
                            <span>
                                <IoIosArrowDown />
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <span className="pt-2 text-[#5BB5A2]">Login</span>
                        <div className=" flex justify-center items-center  bg-[#5BB5A2] rounded-md ">
                            <button className="px-6 h-[39px] bg-[#5BB5A2] rounded-md text-white">
                                Open Account
                            </button>
                        </div>
                    </div>
                </div>
                {/* MOBILE */}
                <div className="w-full h-20 flex items-center justify-between px-4 lg:hidden">
                    <div className="h-20 flex items-center justify-center pl-4">
                        <img className="" src={banquee} alt="" srcset="" />
                    </div>
                    <div>
                        <GiHamburgerMenu onClick={toggleDrawer} size={35} color="#5BB5A2" className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

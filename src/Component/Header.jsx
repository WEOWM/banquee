import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import banquee from "../assets/Logo/banquee..svg";

const Header = () => {
    return (
        <div>
            <div className="w-full h-20  md:flex justify-around items-center shadow-md hidden">
                <div>
                    <img className="animate-bounce" src={banquee} alt="" srcset="" />
                </div>

                <div className="flex gap-4">
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
        </div>
    );
};

export default Header;

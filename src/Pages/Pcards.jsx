import React from 'react';
import card1 from '../assets/pCards/card.svg';
import card2 from '../assets/pCards/card (1).svg';
import card3 from '../assets/pCards/card.png';

const Pcards = () => {
    return (
        <div className='grid grid-cols-1 place-content-center place-items-center mt-10'>
            <div className='flex flex-col items-center h-[518px] mt-5'>
                <span className='font-medium'>Account</span>
                <span className='text-[40px] font-medium'>Perfect card for your needs.</span>
                
                <span className='text-[17px] font-light'>Senectus et netus et malesuada fames ac turpis.</span>
                <span className='text-[17px] font-light'>Sagittis vitae et leo duis ut diam.</span>

                <div className='mt-5 relative top-[5rem]'>
                    <img className='relative hover:translate-y-[-2rem] transition-transform duration-300 ease-in-out' src={card3} alt="card3" />
                    <img className='relative bottom-[13rem] hover:translate-y-[-2rem] transition-transform duration-300 ease-in-out' src={card2} alt="card2" />
                    <img className='relative bottom-[26rem] hover:translate-y-[-2rem] transition-transform duration-300 ease-in-out' src={card1} alt="card1" />
                </div>
                <div className='flex gap-3 mt-5 relative bottom-[20rem]'>
                    <button className="px-6 h-[39px] bg-[#5BB5A2] rounded-md text-white">
                        Open Account
                    </button>
                    <button className="px-6 h-[39px] rounded-md border border-gray-600">
                        Compare Cards
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pcards;

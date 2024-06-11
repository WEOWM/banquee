import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import message from '../assets/faq/badge.png'
import phone from '../assets/faq/badge (1).png'
import { FaLongArrowAltRight } from "react-icons/fa";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is Banko?",
            answer: "Banko is a global financial platform that allows users to manage their finances, investments, and transactions in a secure and efficient manner."
        },
        {
            question: "How do I create an account?",
            answer: "To create an account, click on the 'Sign Up' button on the top right corner, fill in the required details, and follow the instructions sent to your email."
        },
        {
            question: "Is my data secure with Banko?",
            answer: "Yes, Banko uses state-of-the-art encryption and security protocols to ensure that your data is safe and protected."
        },
        {
            question: "What services does Banko offer?",
            answer: "Banko offers a range of services including savings and checking accounts, investment opportunities, loan management, and more."
        }
    ];

    const data = [
        {
            img: message,
            title: "Support Hotline",
            numb: "+49 176 123 456"
        },
        {
            img: phone,
            title: "Shelp@banquee.com",
            numb: "upport Email"
        },
    ]

    const toggleFAQ = index => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='grid grid-cols-2 max-sm:grid-cols-1 md:p-10'>
            <div className='p-10 '>
                <span className='md:text-4xl font-bold mb-6'>Need help?</span>
                {
                    data.map((item) => {
                        return (
                            <div className='flex items-center gap-3 mt-4 '>
                                <img src={item.img} alt="" srcset="" />
                                <div className=' flex flex-col'>
                                    <span className='text-xl font-semibold text-[11px]'>{item.numb}</span>
                                    <span className='text-gray-500 font-bold text-[10px]'>{item.title}</span>
                                </div>


                            </div>
                        )
                    })
                }
                <div className='flex justify-center items-center gap-3 relative md:right-60 right-24 top-10'>
                    <span className='text-[#5BB5A2] max-sm:text-[13px]'>Support</span>
                    <span className='pt-1 text-[#5BB5A2]'><FaLongArrowAltRight /></span>
                </div>

            </div>

            <div>
                <div className='md:p-10 p-3'>
                    <h2 className='md:text-3xl text-[25px] font-bold mb-6 '>Frequently Asked Questions</h2>
                    <div className='space-y-4'>
                        {faqs.map((faq, index) => (
                            <div key={index} className='border border-gray-300 rounded-lg p-4'>
                                <div className='flex justify-between items-center'>
                                    <h3 className='text-lg font-semibold'>{faq.question}</h3>
                                    <button onClick={() => toggleFAQ(index)} className='text-xl'>
                                        {openIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                                    </button>
                                </div>
                                {openIndex === index && (
                                    <p className='mt-4 text-gray-600'>{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FAQ;

import React from 'react'
import star from '../assets/star/badge.svg'
import rating from '../assets/star/rating.png'

const CustomerReview = () => {
    const data = [
        {
            title: "Sunt qui esse pariatur duis deserunt mollit ",
            dep: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
            name: "Cody Fisher",
            work: "Medical Assistant"
        },
        {
            title: "At lectus urna duis convallis tellus",
            dep: "Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
            dep1: " convallis . Enim blandit volutpat maecenas volutpat.",
            name: "Jenny Wilson",
            work: "Nursing Assistant",
            hight:"480px"
        },
        {
            title: "Elit aute irure tempor cupidatat incididunt",
            dep: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
            name: "Guy Hawkins",
            work: "President of Sales"
        },
        {
            title: "Sunt qui esse pariatur duis deserunt mollit ",
            dep: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
            name: "Cody Fisher",
            work: "Medical Assistant"
        },
        {
            title: "Donec et fringilla neque",
            dep: "Etiam accumsan porta neque in viverra. Proin eleifend,  nisi purus cursus sapien, id ultrices nunc tellus a ipsum. Donec et fringilla neque. Aenean consequat purus quis lectus maximus fermentum.",
            name: "Darlene Robertson",
            work: "Dog Trainer",
            hight:"430px"
        },
        {
            title: "Etiam accumsan porta neque eros",
            dep: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
            name: "Dianne Russell",
            work: "Medical Assistant"
        },
    ]

    return (
        <div className='md:p-20 mt-10 p-1'>
            <div className='flex justify-between'>
                <div className='flex flex-col md:w-[680px]'>
                    <span className='font-bold text-[16px]'>Testimonials</span>
                    <span className='font-bold md:text-[70px] text-[22px] '>People all over the world use banko.</span>
                </div>

                <div className='md:flex justify-center items-center gap-4 mt-10 hidden '>
                    <div className='flex justify-center items-center w-10 h-10 bg-[#E8F2EE] rounded-full'>
                        <img src={star} alt="" />
                    </div>
                    <span className='font-bold'>Rated </span>
                    <span className='font-bold text-[#5BB5A2]'>4.8/5 </span>
                    <span className='font-bold'>from over 1000 users </span>
                </div>
            </div>

            <div className='grid grid-cols-3 max-sm:grid-cols-2 gap-4  mt-4 p-1'>
                {data.map((item, index) => (
                    <div key={index} className='border border-gray-300 rounded-lg md:w-[314.67px] md:p-4 p-2 md:h-[380px]' >
                        <div>
                            <img src={rating} alt="" />
                        </div>
                        <div>
                            <div className='md:mt-3'>
                                <span className='font-semibold md:text-[26px] text-[13px] '>{item.title}</span>
                            </div>
                            <div className='md:mt-3'>
                                <span className='font-medium max-sm:text-[10px]'>{item.dep}</span>
                            </div>
                            <div className='md:mt-3'>
                                <span className='font-medium max-sm:hidden'>{item?.dep1}</span>
                            </div>
                            <div className='flex flex-col mt-5 max-sm:text-[10px]'>
                                <span className='font-bold'>{item.name}</span>
                                <span className='font-bold text-gray-600'>{item.work}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CustomerReview

import Link from 'next/link'
import React from 'react'
import { FiHome } from "react-icons/fi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { LuCalendar } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";
import { PiSpotifyLogoLight } from "react-icons/pi";
import { LuCalendarCheck2 } from "react-icons/lu";
import { TfiComment } from "react-icons/tfi";
import { FiVolume2 } from "react-icons/fi";
function Sidebar() {
    return (

        <div className='w-[100%] bg-[#1e2027] min-h-max  overflow-auto border border-gray-800 '>

            <div className='w-full h-full mt-7 flex flex-col  text-white gap-5 '>

                <Link href={"/home"} className='py-2   flex space-x-4 items-center ml-5 pl-5 gap-2 mr-5 rounded-lg'>
                    <FiHome />
                    Home
                </Link>
                <Link href={"/home"} className='py-2   flex space-x-4 items-center ml-5 pl-5 gap-2 mr-5 rounded-lg'>
                    <AiOutlineThunderbolt />
                    Newsfeed
                </Link>
                <Link href={"/home"} className='py-2   flex space-x-4 items-center ml-5 pl-5 gap-2 mr-5 rounded-lg'>
                    <LuCalendar />
                    Az List
                </Link>
                <Link href={"/mostPopular"} className='py-2 mb-5  flex space-x-4 items-center ml-5 pl-5 gap-2 mr-5 rounded-lg'>
                    <TbTargetArrow />
                    Most Popular
                </Link>

                <hr />

                <Link href={"/home"} className='py-2 mt-5  flex space-x-4 items-center ml-5 pl-5 gap-2 mr-5 rounded-lg'>
                    <PiSpotifyLogoLight />
                    Watch2gether
                </Link>
                <Link href={"/home"} className='py-2   flex space-x-4 items-center ml-5 pl-5 gap-2 mr-5 rounded-lg'>
                    <LuCalendarCheck2 />
                    Estimated Schedule
                </Link>
                <Link href={"/home"} className='py-2   flex space-x-4 items-center ml-5 pl-5 gap-2 mr-5 rounded-lg'>
                    <TfiComment />
                    Community
                </Link>


                <div className='w-[82%] h-[18vh] border border-gray-600 mt-5 ml-6 rounded-lg'>
                    <span className='flex items-center gap-4 mt-3 ml-3 font-bold mb-5 '> <FiVolume2 /> Dubbed <button className='ml-8 border border-gray-600 px-2 rounded-lg text-sm'>OFF</button> </span>
                    <hr  className=' border border-gray-600'/>
                    <span className='flex items-center gap-4 mt-3 ml-3 font-bold '> <FiVolume2 /> EN Name <button className=' ml-5 border border-gray-600 px-2 rounded-lg text-sm'>ON</button> </span>



                </div>

                <h6 className='ml-5 mt-5 mb-2'>Terms of Services - Contact</h6>



            </div>





        </div>
    )
}

export default Sidebar
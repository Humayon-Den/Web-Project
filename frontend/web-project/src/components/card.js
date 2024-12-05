import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Card() {
    return (
        <div className='relative inline-block h-auto w-auto'>



            <Link href={"#"} className='block relative w-auto h-auto group'>

                <Image src={"/anime-cover/wind-breaker.jpg"} height={150} width={170} alt='wind-breaker'
                    className='transition-transform duration-300 group-hover:scale-105 group-hover:shadow-sm hover:blur-sm '>
                </Image>

                <button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-purple-700 text-white  w-[100px] h-[30px] border border-white text-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>Watch Now</button>

            </Link>
            <h6 className='absolute top-[200px] right-[140px] text-white text-sm bg-black bg-opacity-50 p-1 rounded-full cursor-pointer hover:scale-110 transition-transform'>
                20</h6>

            <h4 className='mt-2'>Wind breaker</h4>

        </div>
    )
}

export default Card
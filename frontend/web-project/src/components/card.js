import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Card({image , title , episodes , id}) {
    return (
        <div className="relative inline-block w-[200px] text-wrap rounded-sm overflow-hidden">
        <Link href={"/home/" + id} className="block relative group">
          {/* Image with consistent height and width */}
          <div className="w-full h-[250px] overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={200} // Consistent width
              height={200} // Consistent height
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 group-hover:shadow-sm hover:blur-sm"
            />
          </div>
      
          {/* Watch Now Button */}
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-700 text-white w-[100px] h-[30px] border border-white text-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Watch Now
          </button>
        </Link>
      
        {/* Episode Badge */}
        <h6 className="absolute bottom-10 left-4 text-white text-sm bg-black bg-opacity-50 p-1 rounded-full cursor-pointer hover:scale-110 transition-transform">
          {episodes}
        </h6>
      
        {/* Title */}
        <h4 className="mt-2 text-center text-white">{title}</h4>
      </div>
      
    )
}

export default Card
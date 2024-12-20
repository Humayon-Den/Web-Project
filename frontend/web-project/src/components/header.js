import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="h-[10vh] w-full  bg-[#2B2E36]  text-white fixed">
      <div className="flex  w-[96%] ml-[2%] h-full items-center">
        <Link href={"/"}>
        <Image src={"/logo.png"} width={160} height={100} className="" alt="anicrush.to" /> 
        </Link>
        
        {/* <Image src={"/reddit-logo.png"}  width={30} height={20} />
      <Image src={"/twitter.png"}  width={20} height={20} /> */}

        <input className="  bg-[#2B2E36] ml-[85px] border border-solid border-[#414550] rounded-full p-[10px] pr-[330px] "
          type="text"
        value={" * Search anime"}
        />

        <div className="bg-[#40424A] ml-[150px] border border-solid border-[#414550] rounded-full pr-[30px] p-[7px] flex items-center">
          <Image src={"/telegram.png"} height={20} width={25} className="fill-white" alt="social" />
          <p className="">Join Telegram</p>
        </div>

        <div className="bg-[#40424A]  border border-solid border-[#414550] rounded-full ml-[10px] p-[5px] text-white stroke-white fill-white">
          <Image src={"/reddit.png"} width={25} height={20} alt="social" />
        </div>

        <div className="bg-[#40424A]  border border-solid border-[#414550] rounded-full ml-[10px] p-[7px] text-white stroke-white fill-white">
          <Image src={"/twitter.png"} width={20} height={20} className="" alt="social" />
        </div>

        <div className="h-[40px] w-[2px] ml-10 bg-gray-500"></div>

        <div className="bg-[#40424A]  border border-solid border-[#414550] rounded-full ml-[20px] p-[7px] text-white stroke-white fill-white">
          <Image src={"/people.png"} width={20} height={20} className="" alt="social" />
        </div>

      </div>
    </div>
  );
}

export default Header;

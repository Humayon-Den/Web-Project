import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="h-[13vh] w-full bg-[#2B2E36]  text-white">
      <div className="flex  w-[96%] ml-[2%] h-full items-center">
        <Image src={"/logo.png"} width={160} height={100} className="" />
        {/* <Image src={"/reddit-logo.png"}  width={30} height={20} />
      <Image src={"/twitter.png"}  width={20} height={20} /> */}

        <input className="  bg-[#2B2E36] ml-[85px] border border-solid border-[#414550] rounded-full p-[10px] pr-[330px] "
          type="text"
          value={"* Search anime"}
        />

        <div className="bg-[#40424A] ml-[150px] border border-solid border-[#414550] rounded-full pr-[30px] p-[7px] flex items-center">
          <Image src={"/telegram.png"} height={20} width={25} className="fill-white" />
          <p className="">Join Telegram</p>
        </div>

        <div className="bg-[#40424A]  border border-solid border-[#414550] rounded-full ml-[10px] p-[5px] text-white stroke-white fill-white">
          <Image src={"/reddit-logo.png"} width={25} height={20} />
        </div>

        <div className="bg-[#40424A]  border border-solid border-[#414550] rounded-full ml-[10px] p-[7px] text-white stroke-white fill-white">
          <Image src={"/twitter.png"} width={20} height={20} className="" />
        </div>

        <hr />

        <div className="bg-[#40424A]  border border-solid border-[#414550] rounded-full ml-[80px] p-[7px] text-white stroke-white fill-white">
          <Image src={"/people.png"} width={20} height={20} className="" />
        </div>

      </div>
    </div>
  );
}

export default Header;

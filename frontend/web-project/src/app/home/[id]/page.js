"use client";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Image from "next/image";

import { FaPlay } from "react-icons/fa";

import React, { use, useEffect, useState } from "react";
// import useSWR from 'swr';

function Page({ params }) {
  const [anime, setAnime] = useState(null); // Initialize state
  const { id } = use(params);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `http://localhost:3001/anime/${params.id}`
        );
        const res = await response.json(); // Await the JSON conversion
        setAnime(res); // Update state
      } catch (error) {
        console.error("Error fetching data:", error); // Handle errors
      }
    }

    getData();
  }, [id]); // Add `params.id` as a dependency

  if (anime) {
    return (
      <div className="w-full h-full flex flex-col relative">

        <Header className="w-full fixed top-0 bg-gray-900 text-white z-10" />

        <div className="flex pt-[63px]">
          {" "}
          <div className="w-[20%] bg-black text-white h-[calc(100vh-63px)] fixed top-[63px] overflow-y-auto">
          <Sidebar/>
          </div>
          {/* Main Content */}
          <div className="ml-[20%] w-[80%] bg-[#1e2027] h-[calc(100vh-63px)] overflow-y-auto text-white">

              <div className="mt-10 ml-5 h-auto w-auto">
                <div className="flex w-[90%] h-[350px] bg-black overflow-hidden">
                  <div className="w-[25%] h-full bg-red-50">
                    <Image src={"/anime-cover/" + anime.image} height={350} width={300} className="h-full w-full" />
                  </div>
                  <div className="w-[75%] h-full bg-white relative">
                  <Image src={"/anime-cover/" + anime.image} height={350} width={1000} className="h-full w-full bg-contain blur-md" />
                  <button className="flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-700 text-white w-[50px] h-[50px] border border-white text-sm rounded-full ">
                  <FaPlay/>
                  </button></div>
                </div>
                
                <div className="mt-5 w-[90%] h-auto">
                  {/* name items */}
                  <div className="flex gap-3">
                    <div className="h-[50px] w-[50px] bg-gray-500 rounded-md text-center pt-3">9.9</div>
                    <h1 className="text-3xl font-bold">{anime.title}</h1>
                  </div>

                  <div className="flex  mt-5 h-[400px] w-full border border-gray-700 rounded-sm text-wrap ">
                    <div className="w-[70%] h-full px-2">
                      <h1 className="text-3xl font-bold">Synopsis</h1>
                      <p className="mt-2">{anime.description}</p>
                    </div>
                    <div className="w-[30%]  h-full border border-gray-700 text-center">
                    <h1 className="text-3xl font-bold">Episodes</h1>

                    <strong className="font-light mt-1/2 pt-1/2">{anime.episodes}</strong>

                    </div>
                      
                  </div>

                </div>

              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Page;

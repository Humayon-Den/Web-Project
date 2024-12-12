"use client";
import Card from "@/components/card";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import React, { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";

function page() {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    async function getData() {
      //   setLoading(true);
      let response = await fetch("http://localhost:3001/anime"); //acting as array
      let res = await response.json();

      console.log(res);

      setAnime(res);
      //   setLoading(false);
    }

    getData();
  }, []);

  return (
    <div className="w-full h-full flex flex-col relative">
      {/* Header */}
      <Header className="w-full fixed top-0 bg-gray-900 text-white z-10" />

      <div className="flex pt-[63px]">
        {" "}
        {/* Adds space for the fixed header */}
        {/* Sidebar */}
        <div className="w-[20%] bg-black text-white h-[calc(100vh-63px)] fixed top-[63px] overflow-y-auto">
          <Sidebar />
        </div>
        {/* Main Content */}
        <div className="ml-[20%] w-[80%] bg-[#1e2027] h-[calc(100vh-63px)] overflow-y-auto">
          <div className="p-4">
            <h1 className="text-white text-2xl mb-4">Slide Show</h1>
            <div className="w-[90%] h-[300px] bg-gray-500 text-center text-white mx-auto mb-8 relative overflow-hidden rounded-sm">
              <Carousel className="w-[102%] h-full"
                opts={{
                    align: "start",
                    loop: true,     
                  }}

                  plugins={[
                    Autoplay({
                      delay: 3000 ,
                    }),
                  ]}
              >
                <CarouselContent className="h-full w-full">
                  <CarouselItem className="h-[300px] w-full bg-[url('/banner/bleach.jpg')] bg-cover"></CarouselItem>
                  <CarouselItem className="h-[300px] w-full bg-[url('/banner/one-piece.jpg')] bg-cover"></CarouselItem>
                  <CarouselItem className="h-[300px] w-full bg-[url('/banner/wind-breaker.png')] bg-cover bg-center "></CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="w-[30px] h-[30px] bg-white text-white opacity-50 z-10 absolute left-3" />
               <CarouselNext  className="w-[30px] h-[30px] bg-white text-white opacity-50 z-10 absolute right-8"/>
              </Carousel>
            </div>

            <h1 className="text-white text-xl mb-4">Anime Shows:</h1>
            <div className="grid lg:grid-cols-5 gap-5 md:grid-cols-3 sm:grid-cols-2">
              {anime?.map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  image={"/anime-cover/" + item.image}
                  title={item.title}
                  episodes={item.episodes}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

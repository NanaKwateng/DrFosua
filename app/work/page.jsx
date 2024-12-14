'use client'

import { motion } from "framer-motion"
import { ArrowUpRight, HeartPulse} from "lucide-react"
import React, { useState } from "react"

// Swiper
// import {Swiper, SwiperSlide} from "swiper/react"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import Link from "next/link"
import Image from "next/image"
import { Tooltip, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import { TooltipContent } from "@radix-ui/react-tooltip"

import doctor from "@/public/assets/images/care1.jpg"
import evaluate from "@/public/assets/images/care2.jpg"
import science from "@/public/assets/images/care3.jpg"
import learn from "@/public/assets/images/learn.svg"
import WorkSliderBtns from "@/components/WorkSliderBtns";

//Info
const projects = [
  {
    num: "01",
    category: "Newborn Screening",
    title: "Newborn Screening",
    description: "Conducting screenings for newborns to detect any potential health issues early on. Educating and providing resources for children with other birth defects, without any effect in the future growth of the child",
    stack: [
      {name: "Screening"},
      {name: "Health Info"},
      {name: "Modernization"}
    ],
    image: science,
    live: "",
    recent: "", 
  },
  {
    num: "02",
    category: "Health Education.",
    title: "Health Education.",
    description: " Services designed to ensure the health and well-being of mothers and babies, and to support families through the various stages of pregnancy and childbirth.",
    stack: [
      {name: "Consultants"},
      {name: "Breastfeeds"},
      {name: "healthcare"}
    ],
    image: evaluate,
    live: "", 
  },
  {
    num: "03",
    category: "Labor and Delivery Support",
    title: "Consultants",
    description: "Assisting women during labor and delivery, ensuring a safe and positive birthing experience.  Offering support and care to mothers and newborns after birth, including breastfeeding support and postnatal check-ups.",
    stack: [
      {name: "MONITOR"},
      {name: "Safe"},
      {name: "Easy"}
    ],
    image: doctor,
    live: "", 
  },
]


const Work  = () => {
  const [project, setProject] = useState(projects[0])
  const handleSlideChange = (swiper) => {
    //Get the current slide index
    const currentIndex = swiper.activeIndex 

    //update the project based on the current slide index
    setProject(projects[currentIndex])
  }

  return (
    <motion.section 
      initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2, duration: 0.4, ease: 'easeIn'}}} 
      className="min-h-screen flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div 
            className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline none */}
              <div 
                className="text-5xl leading-none font-bold border-l-[2.3px] pl-2 border-blue-500"
              >
                {project.num}
              </div>

              {/* project category */}
              <h2 className="group-hover:text-blue-500 cursor-pointer transition-colors">
                {project.category}
              </h2>

              {/* Project Description */}
              <p>{project.description}</p>

              {/* Stack */}
              <ul className="flex flex-wrap gap-4 items-center py-5 px-2 rounded-xl shadow-lg border-b">
                {project.stack.map((text, index) => (
                  <li 
                    key={index} 
                    className="font-mono flex-1 border px-3 rounded-3xl bg-white text-black text-center dark:bg-white dark:text-white"
                  >
                    {text.name}
                  </li>     
                ))}
              </ul>

            </div>
          </div>


              {/* ------------------ Swiper --------------------- */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => console.log(swiper)}
          >
            {projects.map((project, index) =>(
              <SwiperSlide key={index} className="w-full" >
                <div className="justify-center group relative flex h-[460px] bg-pink-50/20 rounded-2xl">
                  {/* overlay */}
                  <div className="absolute inset-0 w-full h-full bg-black/10 z-10"></div>

                  {/* image */}
                 <div className="w-full h-full relative">
                    <Image src={project.image} fill className="object-cover absolute top0- left-0 inset-0 rounded-2xl" alt='chid born' />
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* bottons */}
            <WorkSliderBtns 
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-end"
              iconStyles=" "
              btnStyles="bg-neutral-500 w-[38px] h-[38px] p-2 flex items-center justify-center rounded-full hover:bg-neutral-400 transition-all"
            />
          </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work 

// spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange} inside the slide tag

// Import Swiper React components


// export default () => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };
'use client'

import { ArrowDownRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Draw from "@/components/Draw"

const services = [
  {
    num: '01',
    title: 'Health Education and Workshops',
    description: ' Conducting workshops and educational sessions on maternal and newborn health.',
    href: "/contact",
  },
  {
    num: '02',
    title: 'Medical Management System',
    description: 'Collaborative health systems for patients on educating health systems to track medication adherence, and monitor potential interactions',
    href: "/resume",
  },
  {
    num: '03',
    title: 'Community Outreach Programs',
    description: 'Engaging with communities to promote maternal and child health, often in collaboration with local organizations.',
    href: "/work",
  },
  {
    num: '04',
    title: 'Telehealth Services',
    description: 'Offering remote consultations and monitoring for patients who cannot visit the clinic in person. Providing comprehensive care to expectant mothers, including regular check-ups, ultrasounds, and health education.',
    href: "/services",
  },
]



const Services  = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:mt-[5rem] xl:py-0 ">
      <div className="mx-auto container">

        <motion.div 
          initial={{opacity:0}} 
          animate={{
            opacity: 1, 
            transition: {duration: 0.4, delay: 2.4, ease: "easeInOut"}
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] place-content-center"
        >
          {services.map((service, index)=> (
            <div key={index} className="flex flex-1 flex-col items-start group justify-center gap-10">

              <div className="flex items-center justify-between w-full">

                <div 
                  className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-colors cursor-pointer"
                >    
                  {service.num}
                </div>
                
                <Draw />
                
              </div>

                {/* title */}
              <h2>{service.title}</h2>

                {/* Description */}
                <p>{service.description}</p>

                {/* Border */}
                <div className="border-b border-white/80 w-full "></div>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services 
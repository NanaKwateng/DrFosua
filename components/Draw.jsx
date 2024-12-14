// 'use client'
// import React, { useState } from 'react'

// import { Button } from './ui/button'
// import { ArrowBigLeft, ArrowBigRightDash } from 'lucide-react'

// import {
//     Drawer,
//     DrawerClose,
//     DrawerContent,
//     DrawerDescription,
//     DrawerFooter,
//     DrawerHeader,
//     DrawerTitle,
//     DrawerTrigger,
//   } from "@/components/ui/drawer"

// const content = [
//   {
//     image: "@/assets/images/",
//     title: "This is the title of the drawer",
//     description: "This is the description of the drawer",
//   },
//   {
//     image: "@/assets/images/",
//     title: "This is the title of the drawer",
//     description: "This is the description of the drawer",
//   },
//   {
//     image: "@/assets/images/",
//     title: "This is the title of the drawer",
//     description: "This is the description of the drawer",
//   },
//   {
//     image: "@/assets/images/",
//     title: "This is the title of the drawer",
//     description: "This is the description of the drawer",
//   },
// ]
 

// const Draw = () => {
//   return (
//     <div>
//     <Drawer>
//       <DrawerTrigger> <ArrowBigRightDash /> </DrawerTrigger>
//       <DrawerContent>
//         <DrawerHeader className="border border-black text-black">
//           <DrawerTitle>Are you absolutely sure?</DrawerTitle>
//           <DrawerDescription>This action cannot be undone.</DrawerDescription>
//         </DrawerHeader>
//         <DrawerFooter>
//           <Button>Submit</Button>
//           <DrawerClose>
//             <Button variant="outline">Cancel</Button>
//           </DrawerClose>
//         </DrawerFooter>
//       </DrawerContent>
//     </Drawer>

//     </div>
//   )
// }

// export default Draw


'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { ArrowBigLeft, ArrowBigRightDash } from 'lucide-react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

import doctor from "@/public/assets/images/doctor.svg"
import evaluate from "@/public/assets/images/evaluate.svg"
import science from "@/public/assets/images/science.svg"
import learn from "@/public/assets/images/learn.svg"
import innovate from "@/public/assets/images/innovate.svg"

const content = [
  {
    image: doctor,
    title: "Prenatal Care",
    description: "Providing comprehensive care to expectant mothers, including regular check-ups, ultrasounds, and health education.",
  },
  {
    image: evaluate,
    title: "Labor and Delivery Support, including Newborn Screening",
    description: "Assisting women during labor and delivery, ensuring a safe and positive birthing experience.  Conducting screenings for newborns to detect any potential health issues early on.",
  },
  {
    image: science,
    title: "Postpartum Care",
    description: "Offering support and care to mothers and newborns after birth, including breastfeeding support and postnatal check-ups.",
  },
  {
    image: learn,
    title: "Health Education and Workshop and Community Outreach Programs",
    description: "Conducting workshops and educational sessions on maternal and newborn health. Engaging with communities to promote maternal and child health, often in collaboration with local organizations.",
  },
]

const Draw = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedContent, setSelectedContent] = useState(null)

  const handleClick = (index) => {
    setSelectedContent(content[index])
    setDrawerOpen(true)
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px' }}>
        {content.map((_, index) => (
          <ArrowBigRightDash key={index} size={30} onClick={() => handleClick(index)} style={{ cursor: 'pointer' }} />
        ))}
      </div>

      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <DrawerContent>
          <DrawerHeader className="border flex items-center flex-col mt-20 text-black">
            <DrawerTitle>
              <Image 
                src={selectedContent?.image}
                alt={selectedContent?.title}
                quality={100}
                fill
                priority
                className='-z-10'
              />
            </DrawerTitle>
            <DrawerDescription className="flex flex-col gap-8 lg:w-3/5 w-fu;; mx-auto items-center ">
              <span className='font-semibold font-mono text-3xl lg:mt-20 mt-7 bg-transparent rounded-md backdrop-blur-sm'> {selectedContent?.title} </span>
              <p> {selectedContent?.description} </p>
              </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            
            <DrawerClose>
              <Button variant="outline" onClick={() => setDrawerOpen(false)}>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Draw

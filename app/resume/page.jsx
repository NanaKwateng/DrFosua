'use client'

import { BedDoubleIcon, Heart, InboxIcon } from 'lucide-react'
import IconImage from '@/components/IconImage'
import Image from 'next/image'
import nurse from "@/public/assets/images/womanFilm.png"
import doctor from "@/public/assets/images/doctor.svg"
import evaluate from "@/public/assets/images/evaluate.svg"
import science from "@/public/assets/images/science.svg"
import learn from "@/public/assets/images/learn.svg"
import innovate from "@/public/assets/images/innovate.svg"


const about = {
  
    title: 'My Profile',
    description: 'I am a dedicated and versatile Midwifery Officer with a nack for creating robust health and work environment.- Proficient in the use of modern obstetric machinery and technologies. Excellent patient care and interpersonal skills. Strong organizational and multitasking abilities. Expertise in electronic health records (EHR) systems .Knowledge of telehealth platforms and remote patient monitoring',
    info: [
      {
        fieldName: 'Name',
        fieldValue: 'Fosua Estella',
      },
      {
        fieldName: 'Nationality',
        fieldValue: 'Ghanaian',
      },
      {
        fieldName: 'Phone',
        fieldValue: '+233 549 698 545',
      },
      {
        fieldName: 'Experience',
        fieldValue: '4+ Years',
      },
      {
        fieldName: 'Email',
        fieldValue: 'fosuaEstella123@gmail.com',
      },
    ]
  
}

// Education data 
const education = {
  icon: '../public/assets/images/womanFilm.png',
  title: 'My Education',
  description: 'A young, energetic and versatile midwifery officer with a nack for creating robust health and work environment with both intensive, extensive and dynamic formal education utilizing other different technologies, for better performance.',
  items: [
    {
      company: 'Ghana Midwives Association',
      position: 'Certified Midwifery Officer (CMO)',
      duration: '2024'
    },
    {
      company: 'University of Ghana, Accra, Ghana',
      position: 'Bachelor of Science in Midwifery',
      duration: '2020'
    },
    {
      company: "KATH",
      position: "Advanced Life Support in Obstetrics (ALSO)",
      duration: "2021",
    },
    {
      company: "KATH",
      position: "Electronic Fetal Monitoring Certification ",
      duration: "2024",
    },
  ]
}

// Experience data 
const experience = {
  icon: '../public/assets/images/womanFilm.png',
  title: 'My Experience',
  description: 'I am a dedicated and versatile health assistant with a nack for creating robust health and work environment with over a decade of experience with different technologies.',
  items: [
    {
      company: 'Korle-Bu Teaching Hospital',
      position: 'Workshop on Advanced Obstetric Ultrasound',
      duration: '2024 - Present'
    },
    {
      company: "KATH",
      position: "Seminar on Digital Innovations in Maternal Health",
      duration: "2023",
    },
    {
      company: 'Hope Exchange Hospital',
      position: 'Training on Electronic Medication Administration',
      duration: ''
    },
    {
      company: 'KATH',
      position: 'Knowledge of telehealth platforms and remote patient monitoring',
      duration: '2024'
    },
  ]
}

const skills = {
  title: 'My Skills',
  description: 'Assisted in over 500 successful deliveries, employing state-of-the-art equipment for fetal monitoring and maternal care. Implemented evidence-based practices using advanced technological tools to enhance patient outcomes. Participated in the introduction and integration of new medical devices, ensuring smooth transitions and staff competency.',
  skillsList: [
    {
      icon: 
        <IconImage>
         <Image 
            src={innovate} 
            priority
            alt="lady Photo"
            quality={100}
            fill
            className="object-contain lg:mt-20"
          />

          <p>This is the the text</p>
        </IconImage>,
      name: 'Health'
    },
    {
      icon: <BedDoubleIcon size={47}/>,
      name: 'Bed Setups',
    },
    {
      icon: <BedDoubleIcon size={47}/>,
      name: 'Bed Setups',
    },
    {
      icon: <InboxIcon size={47}/>,
      name: 'Health'
    },
    {
      icon: <Heart size={47}/>,
      name: 'Health'
    },
    {
      icon: <Heart size={47}/>,
      name: 'Health'
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

const Resume = () => {
  return (
    <motion.div 
      initial = {{opacity: 0}}
      animate= {{opacity: 1,
        transition: {delay: 2.4, duration:0.4, easing: 'easeInOut'}
      }}
      className= "min-h-[80vh] flex items-center justify-center py-12 xl:py-0 place-content-center" 
    >
      <div className="container mx-auto lg:mt-[5rem]">
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>

          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="About">About Me</TabsTrigger>
          </TabsList>

          {/* Experience */}
          <div className="min-h-[80vh] w-full text-center lg:text-start">

            <TabsContent value="experience" className="w-full ring-0 shadow-md rounded-lg">
              <div className='flex flex-col gap-[30px] px-3'>
                <h3
                  className='font-mono tracking-tighter font-light text-center lg:text-start mb-2  text-3xl'
                >
                  {experience.title}
                </h3>
                <p className='max-w-[600px] text-white mx-auto xl:mx-0 text-center lg:text-start'>{experience.description}</p>

                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] p-5'>
                    {experience.items.map((item, index) => (

                      <li key={index} className='p-2 ring-1 ring-neutral-700 rounded-md hover:bg-[#232329] cursor-pointer'>
                        <small 
                          className='text-accent font-mono font-bold tracking-wide'
                        >
                          {item.duration}
                        </small>
                        <p className='font-mono font-semibold'>{item.position}</p>

            
                        <div className='flex items-center justify-center lg:justify-start gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent '></span>
                          <p>{item.company}</p>
                        </div>
                      </li>

                    ))}
                  </ul>
                </ScrollArea>
              </div> 
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full ring-0 shadow-md rounded-lg">
            <div className='flex flex-col gap-[30px] px-3'>
                <h3
                  className='font-mono tracking-tighter font-light text-center lg:text-start mb-2  text-3xl'
                >
                  {education.title}
                </h3>
                <p className='max-w-[600px] text-white mx-auto xl:mx-0 text-center lg:text-start'>{education.description}</p>

                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] p-5'>
                    {education.items.map((item, index) => (

                      <li key={index} className='p-2 ring-1 ring-neutral-700 rounded-md hover:bg-[#232329] cursor-pointer'>
                        <small 
                          className='text-accent font-mono font-bold tracking-wide'
                        >
                          {item.duration}
                        </small>
                        <p className='font-semibold font-mono'>{item.position}</p>

            
                        <div className='flex items-center justify-center lg:justify-start gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent '></span>
                          <p>{item.company}</p>
                        </div>
                      </li>

                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full ring-0 shadow-md rounded-2xl text-center lg:text-start">
                <div className="flex flex-col gap-[30px]">
                  <div className='flex flex-col gap-6'>

                    <h3 className='font-mono font-thin text-3xl'>{skills.title}</h3>
                    <p className='max-w-[600px] mx-auto xl:mx-0'>{skills.description}</p>
                  </div>

                  {/* For the icons */}
                  <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:gap-[30px] gap-4 pb-8 px-2'>
                    <li className='flex items-center justify-start hover:shadow-xl hover:transition-all p-3 rounded-2xl gap-4 w-full lg:flex-col lg:items-start bg-[#232329]'>
                      <Image 
                          src={innovate} 
                          priority
                          alt="lady Photo"
                          quality={100}
                          
                          width={80}
                          height={80}
                          className="object-cover rounded-2xl shadow-xl "
                      />

                      <p className='text-start font-thin text-sm'>Electronic Health Records (EHRs)</p>
                    </li>
                    <li className='flex items-center justify-start hover:shadow-xl hover:transition-all p-3 rounded-2xl gap-4 w-full lg:flex-col lg:items-start bg-[#232329]'>
                      <Image 
                          src={evaluate} 
                          priority
                          alt="lady Photo"
                          quality={100}
                          
                          width={80}
                          height={80}
                          className="object-cover rounded-2xl shadow-xl "
                      />

                      <p className='text-start font-thin text-sm'>Remote Patient Monitoring (RPM)</p>
                    </li>
                    <li className='flex items-center justify-start hover:shadow-xl hover:transition-all p-3 rounded-2xl gap-4 w-full lg:flex-col lg:items-start bg-[#232329]'>
                      <Image 
                          src={learn} 
                          priority
                          alt="lady Photo"
                          quality={100}
                          
                          width={80}
                          height={80}
                          className="object-cover rounded-2xl shadow-xl "
                      />

                      <p className='text-start font-thin text-sm'>Telehealth and Virtual Consultations</p>
                    </li>
                    <li className='flex items-center justify-start hover:shadow-xl hover:transition-all p-3 rounded-2xl gap-4 w-full lg:flex-col lg:items-start bg-[#232329]'>
                      <Image 
                          src={doctor} 
                          priority
                          alt="lady Photo"
                          quality={100}
                          
                          width={80}
                          height={80}
                          className="object-cover rounded-2xl shadow-xl "
                      />

                      <p className='text-start font-thin text-sm'>Advanced Ultrasound and Fetal Monitoring Systems</p>
                    </li>
                    <li className='flex items-center justify-start hover:shadow-xl hover:transition-all p-3 rounded-2xl gap-4 w-full lg:flex-col lg:items-start bg-[#232329]'>
                      <Image 
                          src={science} 
                          priority
                          alt="lady Photo"
                          quality={100}
                          
                          width={80}
                          height={80}
                          className="object-cover rounded-2xl shadow-xl "
                      />

                      <p className='text-start font-thin text-sm'>Online Collaboration Tools
                    
                      </p>
                    </li>
                    
                  </ul>
                </div>
            </TabsContent>

            {/* About Me */}
            <TabsContent value="About" className="w-full text-center xl:text-start ring-0 rounded-lg shadow-lg py-5 px-3">
              <div className="flex flex-col gap-[30px]">
                <h3 className='text-3xl font-thin font-mono'>{about.title}</h3>
                <p className='max-w-[600px] mx-auto lg:mx-0'>{about.description}</p>

                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-auto'>{about.info.map((item, index) => (
                  <li key={index} className='flex items-center justify-center lg:justify-start gap-4'>
                    <span className='tracking-tighter'>{item.fieldName}</span>
                    <span className='font-thin font-mono text-white/60 text-[1.2rem]'>{item.fieldValue}</span>
                  </li>
                ))}</ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>

        {/* Content */}

      </div>
    </motion.div>
  )
}

export default Resume
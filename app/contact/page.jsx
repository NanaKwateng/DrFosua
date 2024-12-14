'use client'

import React from 'react'
import Image from 'next/image'
import contact from '../../public/assets/images/contact.gif'
import { Button } from '@/components/ui/button'

const Form = () => {
  return (
    <div className='min-h-screen container mx-auto flex items-center justify-center'>
      <div className="mx-auto">
{/* 
        <div className="mb-12">
          <Image 
            src={contact}
            alt={`contact`}
            width={150}
            height={150} 
            priority 
            quality={100}
          />
        </div> */}

        <div className="flex items-center text-center justify-center flex-col gap-4 ">
          <h3 className="text-4xl font-mono font-bold tracking-wider lg:w-2/3">Hi there 👋, <br /> Are you bothered with some misunderstanding?  </h3>
          <p className='text-2xl tracking-wide lg:w-2/3' >All your challenges relating to maternal health issues and other childbirth related contents are educated over here  </p>
        </div>

        <div className="w-2/3 mt-15 ring flex items-center justify-center">
          <Button className="bg-white text-black mt-5" >
            Send a review
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Form
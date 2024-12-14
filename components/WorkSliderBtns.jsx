'use client'

import {  ArrowLeft, ArrowRight, } from "lucide-react"
import { useSwiper } from "swiper/react"

const WorkSliderBtns = ({containerStyles, btnStyles, iconStyles}) => {
    const swiper = useSwiper()
  return (
    <div className={containerStyles}>
        <button className={btnStyles}>
            <ArrowLeft size={25} className={iconStyles} onClick={() => swiper.slidePrev()} />
        </button>

        <button className={btnStyles}>
            <ArrowRight size={25} className={iconStyles} onClick={() => swiper.slideNext()} />
        </button>
    </div>
  )
}

export default WorkSliderBtns
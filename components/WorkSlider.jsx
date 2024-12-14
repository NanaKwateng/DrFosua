// import {useSwiper} from "swiper/react"

import { PilcrowLeftIcon, PilcrowRightIcon } from "lucide-react";

export default function WorkSlider({containerStlyles, btnStyles, iconStyles}) {

  return (
    <div className={containerStlyles}>
        <button className={btnStyles}>
            <PilcrowLeftIcon className={iconStyles} size={42} />
        </button>
        <button className={btnStyles}>
            <PilcrowRightIcon className={iconStyles} size={42} />
        </button>
    </div>
  )
}

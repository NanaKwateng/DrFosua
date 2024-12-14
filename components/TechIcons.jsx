'use client'

import { FlagTriangleRight, HeartPulse, LucideBed, FileArchiveIcon} from "lucide-react"
import Link from "next/link"

const socials = [
    {icon: <HeartPulse />, path: '/',},
    {icon: <LucideBed />, path: '/'},
    {icon: <FileArchiveIcon />, path: '/'},
]
const TechIcons = ({containerStyles, iconStyles}) => {

  return (
    <div className={containerStyles}>
        {socials.map((item, index) => (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        ))}
    </div>
  )
}

export default TechIcons

        {/* <FaProcedures className='text-7xl text-green-500'/>
        <FaFileMedical className='text-7xl text-red-400'/>
        <FaHeartbeat className='text-7xl text-blue-700'/>
        <FaChartLine className='text-7xl'/>
        <FaTabletAlt className='text-7xl text-cyan-700'/> */}
'use client'

import {Sheet, SheetContent, SheetFooter, SheetTitle, SheetTrigger} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { AlignRight, AlignRightIcon, MenuIcon } from 'lucide-react'

//creating the Links
const links =[
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Services',
        path: '/services'
    },
    {
        name: 'Resume',
        path: '/resume'
    },
    {
        name: 'Work',
        path: '/work'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
]

const MobileNav = () => {
    const pathname = usePathname()
  return (
   <Sheet>
        <SheetTrigger className='flex items-start justify-between'>
            <AlignRightIcon  className='text-zinc-400' size={35}/>
        </SheetTrigger>
        <SheetContent>
            <SheetTitle> <p>Menu</p> </SheetTitle>
            <SheetContent className="flex justify-start flex-col">
                <div className='text-2xl font-mono'>
                    <Link href="/">Fosua.</Link>
                </div>

                <nav className='flex items-start justify-center flex-col gap-8 mt-10'>
                    {links.map((link, i) => (
                        <Link href={link.path} key={i} 
                        className={`${link.path === pathname && "text-accent border-accent border-b-2 ml-5"} hover:text-slate-300 cursor-pointer w-2/3`}>
                            {link.name}
                        </Link>

                    ))}
                </nav>
            </SheetContent>

        </SheetContent>
   </Sheet>
  )
}

export default MobileNav
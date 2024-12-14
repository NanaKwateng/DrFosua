'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    },
]

const Nav = () => {

    const pathname = usePathname()
  return (
    <nav className="flex gap-8">
        {links.map((links, i) => {
            return <Link href={links.path} key={i} className={`${links.path === pathname && "text-slate-500 border-b-2 border-slate-500"} capitalize hover:text-slate-300 transition-colors`}>{links.name}</Link>
        })}
    </nav>
  )
}

export default Nav
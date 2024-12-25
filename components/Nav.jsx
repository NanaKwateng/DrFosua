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
]

const Nav = () => {

    const pathname = usePathname()
  return (
    <nav className="flex gap-8 px-9 py-3 rounded-3xl bg-white/100 shadow-sm dark:bg-[#232329]">
        {links.map((links, i) => {
            return <Link href={links.path} key={i} className={`${links.path === pathname && "text-accent border-b-2 border-accent"} capitalize hover:text-slate-300 transition-colors`}>{links.name}</Link>
        })}
    </nav>
  )
}
//bg-[#232329]
export default Nav
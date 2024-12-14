import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className='font-mono py-8 xl:py-8'>
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">Fosua</h1>
            </Link>

            {/* desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
                <Nav />

                <Link href="/contact">
                    <Button>Hire me</Button>
                </Link>
            </div>

            {/* Mobile Nav */}
            <div className="lg:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header
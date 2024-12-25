import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, DownloadIcon } from "lucide-react";
import TechIcons from "@/components/TechIcons";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

import Drawer from "@/components/Drawer";


export default function Home() {
  return (
    <section className="min-h-screen w-full overflow-x-hidden">
      <div className="container mx-auto h-full font-mono">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
            <div className="text-center xl:text-left order-2 xl:order-none">

              <span className="text-xl">Midwifery Officer - MO</span>

              <h1>Hi there, <span className="relative block">I&apos;m Dr. Fosua</span> </h1>

              <p className="max-w-[500px] mb-9 ">
                Experienced and dedicated Midwifery Officer with over four years in maternal and newborn care. Skilled in utilizing advanced medical technologies and machinery to enhance patient care and improve clinical outcomes.
              </p>

              {/* socialMedia Icons and other btns */}
              <div className="flex items-center flex-col xl:flex-row gap-8">

              
                  <span 
                    className="px-3 py-1 border rounded-xl hover:text-black hover:bg-white transition-colors "
                  > 
                    <Drawer /> 
                  </span>
             

                <div className="socials">
                  <TechIcons 
                    iconStyles="flex items-center justify-center rounded-full w-9 h-9 border border-accent text-accent p-1 hover:bg-accent hover:text-primary hover:transition-all duration-500"
                    containerStyles="flex gap-6 " 
                  />
                </div>
              </div>

            </div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
        </div>
      </div>

      <Stats />
    </section>
  );
}

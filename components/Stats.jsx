'use client'

import CountUp from "react-countup"

// import CountUp from "react-countup"

const stats = [
    {
        num: 4,
        text: "+ Years of Experience",
        sup: '+'
    },
    {
        num: 26,
        text: " + Projects completed",
        sup: '+'
    },
    {
        num: 8,
        text: "+ Technologies mastered",
        sup: '+'
    },
    {
        num: 500,
        text: " + Clients safe attended",
        sup: '+'
    },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 ">
        <div className="container mx-auto">
            <div 
                className="flex flex-wrap gap-6 max-w-[80vw] xl:max-w-none lg:mb-10"
            >

                {stats.map((item, index) => (

                    <div 
                        key={index} className="flex-1 flex gap-4 items-center xl:justify-start shadow-xl border-spacing-1 border-neutral-400 p-5 rounded-2xl"
                    >
                        <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold"/>
                        <p className={`${item.text.length < 15 ? "max-w-[100px]": "max-w-[150px]"} leading-snug text-white/80`}>{item.text} </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Stats
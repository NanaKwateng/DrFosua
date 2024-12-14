import { motion } from "framer-motion"

const stairAnimation = {
    initial: {
        top: "0%"
    },
    animate: { 
        top: "100%",
     },
    exit: {
        top: ["100%", "0%"]
    },
  
}

//calculate the reverse of the staggered delay
const reverseIndex = (index) => {
    const totalSteps = 6
    return totalSteps - index - 1
}
const Stairs = () => {
  return (
    <>
        {/* render 6 motion divs each representing a step of the steps 
            each div will have the same animation defined by the stair animation object
        */}
        {[...Array(6)].map((_, index) => {
            return  (
                <motion.div 
                    key={index} 
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ 
                        duration: 0.4, 
                        ease: "easeInOut",  
                        delay: reverseIndex(index) * 0.1,
                    }}  //stagger children animation

                    className="h-full w-full bg-slate-600 relative"
                />
            )
            
        })}
    </>
  )
}

export default Stairs
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full px-8 py-3 border-t-[2px] border-neutral-700 flex items-center justify-between flex-col md:flex-row'>
        <div className="text-md">
            Copyright &copy; 2024
        </div>

        <div className="text-md font-mono hover:text-white/60 transition-color cursor-pointer">
        🎖️ Dr. Estella Fosua - Powered
        </div>
    </div>
  )
}

export default Footer
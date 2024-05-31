import React from 'react'

function Hero({sopen}) {
  return (
    <div className={`absolute bg-[#171749] h-auto ${sopen?"md:min-h-[calc(100%-70px)] min-h-[calc(100%-140px)]":"min-h-[calc(100%-70px)]"} w-screen`}>
        
    </div>
  )
}

export default Hero
import React from 'react'
import remove from "../assets/remove.png"

function DropAlert({bgcolor,slidercolor,slidecolor,text,setOpen,open}) {
    const [width, setWidth] = React.useState('w-0')
    let x;
    React.useEffect(()=>{
        if(open){
            x = setTimeout(()=>{
                setWidth('w-full duration-[2000ms]')
            },2000)
        }
        return ()=>{
            clearTimeout(x)
            setWidth('w-0')
        }
    },[open])
    return (
        <div className={`w-[250px] h-[60px] fixed ${open?"top-[100px]":"top-[-100px]"} duration-100 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md flex flex-col justify-center items-center select-none`}>
            <div className={`w-full h-full ${bgcolor} text-white flex justify-around items-center rounded-tr-md rounded-tl-md`}>
                {text}
                <div onClick={()=>{
                    setOpen(false)
                }} className='flex justify-center items-center'>
                    <img src={remove} alt="remove" className='h-[20px] cursor-pointer hover:opacity-50' />
                </div>
            </div>
            <div className={`${slidecolor} w-full h-[10px] rounded-br-md rounded-bl-md`}>
                <div className={`${width} ease-linear h-full ${slidercolor} rounded-full`}>
                </div>
            </div>
        </div>
  )
}

export default DropAlert
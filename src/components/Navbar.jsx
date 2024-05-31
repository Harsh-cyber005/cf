import React, { useEffect } from 'react'
import codeforces from "../assets/codeforces.png"
import menudark from "../assets/menu-dark.png"
import downarrow from "../assets/down-arrow.png"
import searchicon from "../assets/search.png"
import DropAlert from './DropAlert'
import SearchBar from './SearchBar'

function Navbar({ menu, setMenu, sopen, setSopen}) {
    const [dropdown, setDropdown] = React.useState(false)
    const [submenu, setSubmenu] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const [empty, setEmpty] = React.useState(false)
    const [search, setSearch] = React.useState('')
    const [s, setS] = React.useState(`https://codeforces.com/api/user.info?handles=${search}&checkHistoricHandles=false`)
    const [data, setData] = React.useState([])
    useEffect(() => {
        setEmpty(false)
        setS(`https://codeforces.com/api/user.info?handles=${search}&checkHistoricHandles=false`)
    }, [search])
    useEffect(() => {
        console.log("data=", data)
    }, [data])
    let x;
    useEffect(() => {
        if (open) {
            x = setTimeout(() => {
                setOpen(false)
            }, 4100)
        }
        return () => {
            clearTimeout(x)
        }
    }, [open])
    async function searchUser() {
        if (search === '') {
            setEmpty(true)
            setOpen(true)
            return
        }
        await fetch(s).then(res => res.json()).then((res) => {
            if (res.status === 'FAILED') {
                alert("User Not Found")
            }
            else {
                setData(res.result)
            }
        })
    }
    return (
        <div className='relative'>
            <nav className=' h-[70px] bg-[#2D2E5B] text-white flex justify-between items-center px-2 pr-5 shadow-2xl'>
                <div className=' flex justify-start items-center font-semibold md:max-w-max lg:w-1/3'>
                    <img src={codeforces} alt="Codeforces" className='h-[70px]' />
                    &nbsp;
                    <h1><span>CodeForces </span><span className='text-[#8D85EB]'>LeaderBoard</span></h1>
                </div>
                <div className='lg:w-1/3 w-[50%] md:flex hidden justify-start'>
                    <div onClick={() => {
                        setEmpty(false)
                    }} className='w-full relative flex justify-center items-center z-0'>
                        <input onChange={(e) => {
                            setSearch(e.target.value)
                        }} type='search' placeholder='Search Here' className={`w-full px-4 py-1 rounded-sm bg-[#42437d] focus:outline-none focus:outline-violet-400 ${empty ? "outline-red-600 outline-3 outline outline-offset-2" : "outline-none"} relative duration-[30ms]`} />
                        <button onClick={(e) => {
                            e.stopPropagation()
                            searchUser()
                        }} className='absolute right-0 bg-[#686498] h-full rounded-tr-sm rounded-br-sm px-2 font-semibold text-sm hover:bg-[#8D85EB] duration-200 active:bg-[white] active:text-black'>SEARCH</button>
                    </div>
                </div>
                <div className='lg:flex hidden w-max justify-end h-full'>
                    <ul className='flex justify-center font-semibold gap-1'>
                        <li className='px-4 flex justify-center items-center h-full'><a href='/' className='opacity-[80%] hover:opacity-[100%] cursor-pointer'>Home</a></li>
                        <li onMouseOver={()=>{
                            setDropdown(true)
                        }} onMouseOut={()=>{
                            setDropdown(false)
                        }} className='relative px-4 flex justify-between items-center h-full w-[110px] cursor-pointer z-40'>
                            <a className='opacity-[80%] hover:opacity-[100%] cursor-pointer'>Options</a>
                            <img className={`h-[15px] ${dropdown ? "rotate-[180deg]" : "rotate-0"} duration-200`} src={downarrow} alt='downarrow' />
                            <ul className={`absolute shadow-2xl bg-[#42437D] bottom-0 translate-x-[-60%] translate-y-[calc(100%)] ${dropdown ? "flex flex-col" : "hidden"} duration-200 border-t-2 border-t-indigo-400 w-[200px] z-10`}>
                                <li className='px-4 py-2 w-full hover:bg-[#6e6fa9]'><a className=' cursor-pointer'><span className=''>Top 100 users</span></a></li>
                                <li className='px-4 py-2 w-full hover:bg-[#6e6fa9]'><a className=' cursor-pointer'><span className=''>Top 1000 users</span></a></li>
                                <li className='px-4 py-2 w-full hover:bg-[#6e6fa9]'><a className='cursor-pointer'><span className=''>Top 10000 users</span></a></li>
                            </ul>
                        </li>
                        <li className='px-4 flex justify-center items-center h-full'><a href='' className='opacity-[80%] hover:opacity-[100%] cursor-pointer'>About</a></li>
                        <li className='px-4 flex justify-center items-center h-full'><a target='_blank' href='https://codeforces.com/' className='opacity-[80%] hover:opacity-[100%] cursor-pointer'>CodeForces</a></li>
                    </ul>
                </div>
                <div onClick={(e) => {
                    e.stopPropagation()
                }} className='relative lg:hidden flex justify-end max-w-max md:w-1/3 cursor-pointer z-10'>
                    <button onClick={(e)=>{
                        setSopen(!sopen)
                        setMenu(false)
                    }} className=' mr-4 md:hidden flex active:opacity-35 active:scale-90'>
                        <img src={searchicon} alt='search' className='h-[25px]'/>
                    </button>
                    <button onClick={() => {
                        setMenu(!menu)
                    }} className='active:opacity-35 active:scale-90'>
                        <img src={menudark} alt="Menu" className='h-[25px]' />
                    </button>
                    <ul className={`absolute shadow-2xl bg-[#42437D] bottom-0 right-0  translate-y-[100%] ${menu ? "opacity-[100%] w-[200px]" : "opacity-0 w-0"} duration-200 border-t-2 border-t-indigo-400`}>
                        <li className='px-4 py-2 w-full hover:bg-[#6e6fa9]'><a href='/' className=' cursor-pointer'><span className=''>Home</span></a></li>
                        <li className='px-4 py-2 w-full hover:bg-[#6e6fa9]'><a href='' className=' cursor-pointer'><span className=''>About</span></a></li>
                        <li className='px-4 py-2 w-full hover:bg-[#6e6fa9]'><a target='_blank' href='https://codeforces.com/' className='cursor-pointer'><span className=''>CodeForces</span></a></li>
                        <li onMouseOver={() => {
                            setSubmenu(true)
                        }} onMouseOut={() => {
                            setSubmenu(false)
                        }} onClick={()=>{
                            setSubmenu(!submenu)
                        }} className='px-4 py-2 w-full hover:bg-[#6e6fa9] flex justify-between items-center'>
                            <a className='cursor-pointer'>Options</a>
                            <img className={`h-[20px] ${submenu ? "rotate-[180deg]" : "rotate-0"} duration-200`} src={downarrow} alt='downarrow' />
                        </li>
                        {<div onMouseOver={() => {
                            setSubmenu(true)
                        }} onMouseOut={() => {
                            setSubmenu(false)
                        }} className={`absolute shadow-2xl bg-[#42437D] bottom-0 translate-y-[100%] duration-200 border-t-2 border-t-indigo-400 -z-20 w-full ${submenu?"h-full opacity-[100%]":"h-0 opacity-0"} ${menu?"":"text-[0px]"}`}>
                            <div onMouseOver={(e)=>{
                                if(!submenu){e.stopPropagation()}
                            }} className='px-4 py-2 w-full hover:bg-[#6e6fa9]'><a className=' cursor-pointer'><span className=''>Top 100 users</span></a></div>
                            <div onMouseOver={(e)=>{
                                if(!submenu){e.stopPropagation()}
                            }} className='px-4 py-2 w-full hover:bg-[#6e6fa9]'><a className=' cursor-pointer'><span className=''>Top 1000 users</span></a></div>
                            <div onMouseOver={(e)=>{
                                if(!submenu){e.stopPropagation()}
                            }} className='px-4 py-2 w-full hover:bg-[#6e6fa9]'><a className='cursor-pointer'><span className=''>Top 10000 users</span></a></div>
                            <div onMouseOver={(e)=>{
                                if(!submenu){e.stopPropagation()}
                            }} className='px-4 py-2 w-full hover:bg-[#6e6fa9]'><a className='cursor-pointer'><span className=''>Top IIT KGP users</span></a></div>
                        </div>}
                    </ul>
                </div>
            </nav>
            <SearchBar sopen={sopen} setSearch={setSearch} searchUser={searchUser}/>
            <DropAlert bgcolor="bg-red-600" slidercolor="bg-red-800" slidecolor="bg-[#c45a5a]" text="Search Field Required" setOpen={setOpen} open={open} />
        </div>
    )
}

export default Navbar
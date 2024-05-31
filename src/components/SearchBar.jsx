import React from 'react'

function SearchBar({ sopen, setSearch, searchUser}) {
    return (
        <div className={`px-[20px] py-[17px] h-[70px] md:hidden flex w-full justify-start bg-[#323363] text-white ${sopen ? "flex" : "hidden"}`}>
            <div className='h-full w-full relative flex justify-center items-center'>
                <input onChange={(e) => {
                    setSearch(e.target.value)
                }} type='search' placeholder='Search Here' className={`w-full px-4 py-1 rounded-sm bg-[#42437d] focus:outline-none focus:outline-violet-400 h-full`} />
                <button onClick={(e) => {
                    e.stopPropagation()
                    searchUser()
                }} className='absolute right-0 bg-[#686498] h-full rounded-tr-sm rounded-br-sm px-2 font-semibold text-sm hover:bg-[#8982db] duration-200 active:bg-[white] active:text-black'>SEARCH</button>
            </div>
        </div>
    )
}

export default SearchBar
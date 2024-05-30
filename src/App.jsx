import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  const [menu, setMenu] = React.useState(false)
  return (
    <div onClick={()=>{
      if(menu){
        setMenu(false)
      }
    }} className="absolute w-screen h-screen overflow-x-hidden z-40">
      <Navbar menu={menu} setMenu={setMenu}/>
      <Hero/>
    </div>
  )
}

export default App
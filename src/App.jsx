import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  const [menu, setMenu] = React.useState(false)
  const [sopen, setSopen] = React.useState(false)
  return (
    <div onClick={()=>{
      if(menu){
        setMenu(false)
      }
    }} className="w-screen h-screen overflow-x-hidden">
      <Navbar menu={menu} setMenu={setMenu} sopen={sopen} setSopen={setSopen}/>
      <Hero sopen={sopen}/>
    </div>
  )
}

export default App
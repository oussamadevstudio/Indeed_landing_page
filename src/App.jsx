import Navbar from './components/layouts/Navbar'
import Sidebar from './components/layouts/Sidebar'
import Footer from './components/layouts/Footer/Footer'
import Hero from './components/sections/Hero'
import Bentogrid from './components/sections/Bentogrid'
import Cards from './components/sections/Cards'
import Normalgrid from './components/sections/Normalgrid'
import Comparator from './components/sections/Comparator'
import { createContext, useState } from 'react'
import clsx from 'clsx'




function App() {


  const [isOpenSideBar, setIsOpenSideBar] = useState(false)
 
  const handleToggle = () => setIsOpenSideBar(!isOpenSideBar)



  {/*
    

    
    
<TogglerContext.Provider value={isOpenSideBar}>
      <Navbar />
    </TogglerContext.Provider>
    
const TogglerContext = createContext()


    */}

    
   

  return (
    <>
    
    

    <Navbar/>

    

    
    <Hero />
    <Bentogrid />
    <Cards />
    <Normalgrid />
    <Comparator />
    

    <Footer />

      
    </>
  )
}

export default App

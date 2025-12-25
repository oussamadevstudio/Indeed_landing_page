import { IoMenuOutline } from "react-icons/io5";
import Sidebar from '../layouts/Sidebar'
import { useState } from 'react'


const Sidebarselector = () => {
    
    const [isOpenSideBar, setIsOpenSideBar] = useState(false)

    const sideBarToggler = () => {setIsOpenSideBar(!isOpenSideBar)}


    return(
        <>
         <button onClick={sideBarToggler} className="md:hidden border border-black/20 rounded-md p-1 bg-blue-900 text-3xl text-white"><IoMenuOutline /></button>
        
        <aside>{isOpenSideBar && <Sidebar />}</aside>

        </>
    )
}

export default Sidebarselector
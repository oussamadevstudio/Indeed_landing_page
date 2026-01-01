import { IoMenuOutline } from "react-icons/io5";




const Sidebarselector = () => {
    
    
{/*    
    import { useContext } from 'react'
    
    const {isOpenSideBar, setIsOpenSideBar} = useContext(TogglerContext)

    const sideBarToggler = () => {setIsOpenSideBar(!isOpenSideBar)}
    
    onClick={sideBarToggler}
    

    const abah = useContext(TogglerContext)
    console.log(abah)
    
    */}


    

    return(
        <>
         <button className="md:hidden border border-black/20 rounded-md p-1 bg-blue-900 text-3xl text-white"><IoMenuOutline /></button>
        
         
        </>
    )
}

export default Sidebarselector
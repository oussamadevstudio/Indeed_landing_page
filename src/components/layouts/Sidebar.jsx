import {navLinks} from '../../data/navLinks'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import Sidebarselector from '../ui/Sidebarselector'



const Sidebar = () => {

    let navItem = navLinks.map((Link) => 
        <li key={Link.id}>
            <a href="#" className="text-black hover:text-black/70 active:text-black/40">{Link.label}</a>
        </li>
        )
    
    
    
    
    return(
        <>

        
        

        <div className="flex flex-col justify-center items-center h-screen md:h-20 bg-slate-50 shadow-md shadow-gray-600/10">
                
                <Logo color="text-black"/>

                <Sidebarselector />

                <ul className="hidden md:flex md:center md:gap-10 ">
                    {navItem}
                </ul>

                <Button text="Sign up" width="w-[90%]"/>
                

            </div>
        </>
    )
}

export default Sidebar
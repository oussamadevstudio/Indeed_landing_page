import {navLinks} from '../../data/navLinks'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import Sidebarselector from '../ui/Sidebarselector'

const Navbar = () => {

    let navItem = navLinks.map((Link) => 
    <li key={Link.id}>
        <a href="#" className="text-black hover:text-black/70 active:text-black/40">{Link.label}</a>
    </li>
    )

   

    return(
        <>
            <div className="flex justify-between md:justify-evenly items-center z-990 fixed w-full h-15 md:h-20 bg-slate-50 ">
                <Logo color="text-black"/>

                <ul className="hidden md:flex md:center md:gap-10 ">
                    {navItem}
                </ul>

                <Button text="Sign up" isHiddenOnPhones={true}/>
                <Sidebarselector />

            </div>
        
        </>
    )
}

export default Navbar
import {navLinks} from '../../data/navLinks'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import Sidebarselector from '../ui/Sidebarselector'

const Navbar = () => {

    let navItem = navLinks.map((Link) => <li key={Link.id}>{Link.label}</li>)

   

    return(
        <>
            <div className="flex justify-between md:justify-around items-center z-0 fixed w-full h-20 bg-amber-300 ">
                <Logo />

                <ul className="hidden md:flex md:justify-between md:gap-4 ">
                    {navItem}
                </ul>

                <Button text="Sign up" isHiddenOnPhones={true}/>
                <Sidebarselector />

            </div>
        
        </>
    )
}

export default Navbar
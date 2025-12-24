import Logo from '../../ui/Logo'
import Input from '../../ui/Input'

const Newsletter = () => {

    return(
        <>

             <div className="flex flex-col items-start justify-center gap-y-4 pt-12 md:pt-12 ">
                <Logo />
                <p className="text-white">Subscribe to our weekly newsletter</p>
                <Input />
            </div>
        
        </>
    )
}

export default Newsletter




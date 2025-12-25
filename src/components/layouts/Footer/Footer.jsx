import Newsletter from './Newsletter'
import Quicklinks from './Quicklinks'
import Footerbase from './Footerbase'

const Footer = () => {

    return(
        <>
        
        <section className="w-full flex flex-col md:grid md:grid-rows-2 md:grid-cols-2 px-4 md:px-40 mt-20 gap-5 bg-linear-to-tr from-slate-900 to-slate-950 ">
            <Newsletter  />
            <Quicklinks />
            <Footerbase />

        </section>
        
        </>
    )
}

export default Footer
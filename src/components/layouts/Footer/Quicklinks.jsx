import {footerLinks} from '../../../data/footerLinks'


const Quicklinks = () => {

    let exploreIndeed = footerLinks.exploreIndeed.map(
        (Link) => 
            <li key={Link.label}>
                <a href={Link.href}>{Link.label}</a>
            </li>)



    let empty = footerLinks.empty.map(
        (Link) => 
            <li key={Link.label}>
                <a href={Link.href}>{Link.label}</a>
            </li>)



    let more = footerLinks.more.map(
        (Link) => 
            <li key={Link.label}>
                <a href={Link.href}>{Link.label}</a>
            </li>)

    return(
        <>

             <div className="flex flex-col md:flex-row  justify-around gap-2 mt-14 ">

                <div className="border-gray-100 uppercase">
                    <h3 className="text-xs text-white">Explore Indeed</h3>
                    <ul className="text-gray-400">{exploreIndeed}</ul>
                </div>

                <div className="border-gray-100 uppercase">
                    <h3 className="text-xs text-transparent">abah</h3>
                    <ul className="text-gray-400">{empty}</ul>
                </div>

                <div className="border-gray-100 uppercase">
                    <h3 className="text-xs text-white">More</h3>
                    <ul className="text-gray-400">{more}</ul>
                </div>
                
            </div>
        
        </>
    )
}

export default Quicklinks
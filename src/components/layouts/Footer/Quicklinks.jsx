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

             <div className="flex flex-col md:flex-row justify-around gap-2 border-2 border-black">

                <div className="border-1 border-gray-100">
                    <ul>{exploreIndeed}</ul>
                </div>

                <div className="border-1 border-gray-100">
                    <ul>{empty}</ul>
                </div>

                <div className="border-1 border-gray-100">
                    <ul>{more}</ul>
                </div>
                
            </div>
        
        </>
    )
}

export default Quicklinks
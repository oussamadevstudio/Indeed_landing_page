import Button from '../ui/Button'
import Card from '../ui/Card'

const Cards = () => {

    return(
        <>
        <section className="flex justify-center items-center md:h-120 px-5 md:px-78 py-9 md:py-18 bg-gradient-to-tr from-blue-200 via-blue-50 to-cyan-50">

            <div className="flex flex-col justify-center items-center gap-y-11 ">

                    <div className="w-full flex flex-col md:flex-row justify-center gap-y-3 md:justify-between items-center">
                        <h2>Job openings in United States</h2>
                        <Button text="View All " width="w-full md:w-auto "/>
                    </div>

                    <div className="flex gap-y-4 md:gap-x-4 flex-col md:flex-row">

                        <Card cardTitle="Hotel Front Desk" price="$20 - $21 /hour" cat1="Full-time" cat2="Southamp" companyName="Southampton Hotel" datePosted="27 minutes ago"/>
                        <Card cardTitle="Aviation Front Desk " price="$19 /hour" cat1="Full-time" cat2="Warwick" companyName="Atlantic Aviation3.5" datePosted="12 hours ago"/>
                        <Card cardTitle="Part Time Front Desk" price="$12 - $15 /hour" cat1="Part-time" cat2="Las" companyName="HOTWORX3.1" datePosted="39 minutes ago"/>

                    </div>
            </div>
        </section>
        </>
    )
}

export default Cards
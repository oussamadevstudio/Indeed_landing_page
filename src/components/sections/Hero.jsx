import Bookinginput from '../ui/Bookinginput'

const Hero = () => {

    return(
        <>
        <section className="flex flex-col gap-y-15 justify-center items-center h-110 w-full bg-indigo-400">

            <div className="flex flex-col justify-center items-center border-2 border-black mx-5 md:w-1/2 md:mx-0 ">
                <h1>Build a career you'll love</h1>
                <p>Build a career you'll love with our curated job listings tailored to your skills and passions.
                     Explore opportunities that align with your goals, connect with top employers, 
                     and take the next step toward a fulfilling professional journey.
                </p>
            </div>

            <Bookinginput />

        </section>
        </>
    )
}

export default Hero
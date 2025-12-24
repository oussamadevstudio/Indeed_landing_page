import Bookinginput from '../ui/Bookinginput'

const Hero = () => {

    return(
        <>
        <section className="flex flex-col gap-y-15 justify-center items-center min-h-110 w-full bg-gradient-to-tr from-blue-200 via-blue-50 to-cyan-50">

            <div className="flex flex-col justify-center items-center gap-y-6  mt-17 md:mt-34 mb-5 md:mb-29 mx-5 lg:mx-97 md:w-1/2">
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
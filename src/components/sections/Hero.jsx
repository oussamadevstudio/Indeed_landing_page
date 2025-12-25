import Bookinginput from '../ui/Bookinginput'

const Hero = () => {

    return(
        <>
        <section className="relative flex flex-col gap-y-15 justify-center items-center min-h-130 w-full mb-35 bg-gradient-to-tr from-blue-200 via-blue-50 to-cyan-100">

            <div className="flex flex-col justify-center items-center gap-y-7 mt-17 md:mt-50 mb-5 md:mb-22 mx-5 lg:mx-97 md:w-1/2">
                <h1 className="text-4xl font-bold leading-[120%] tracking-tight uppercase">Build a <span className="bg-clip-text bg-gradient-to-l from-blue-900 to-blue-900/40 text-transparent">career</span> you'll love</h1>
                <p className="text-[#535353] text-center">Build a career you'll love with our curated job listings tailored to your skills and passions.
                     Explore opportunities that align with your goals, connect with top employers, 
                     and take the next step toward a fulfilling professional journey.
                </p>
            </div>

            <div className="absolute top-19 left-11 lg:left-83"><Bookinginput /></div>

        </section>
        </>
    )
}

export default Hero
import Button from '../ui/Button'
import Card from '../ui/Card'

const Cards = () => {

    return(
        <>
        <section className="flex justify-center items-center md:h-120 px-5 md:px-78 py-9 md:py-18 bg-pink-200">

            <div className="flex flex-col justify-center items-center md:w-1/2">

                    <div className="flex justify-between gap-x-30">
                        <h2>Job openings in United States</h2>
                        <Button />
                    </div>

                    <div className="flex gap-y-4 md:gap-x-4 flex-col md:flex-row">

                        <Card />
                        <Card />
                        <Card />

                    </div>
            </div>
        </section>
        </>
    )
}

export default Cards
import Bentogridcard from '../ui/Bentogridcard'

const Bentogrid = () => {

    return(
        <>
            <section className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-4 px-5 md:px-78 py-9 md:py-18 bg-green-200">
                <Bentogridcard />
                <Bentogridcard />
                <Bentogridcard isSpan={true}/>
            </section>
        
        </>
    )
}

export default Bentogrid
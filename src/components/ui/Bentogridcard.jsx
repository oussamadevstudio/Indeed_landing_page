import clsx from 'clsx'

const Bentogridcard = ({isSpan}) => {

    return(
        <>
            <div className={clsx("h-55 border-2 border-black", isSpan && "col-span-2")}>
                Bentogridcard
            
            </div>
            
        </>
    )
}

export default Bentogridcard
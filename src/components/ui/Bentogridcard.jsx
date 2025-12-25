import clsx from 'clsx'

const Bentogridcard = ({isSpan, bgColor, ChildDiv, isTaller}) => {

    return(
        <>
            <div className={clsx("rounded-2xl h-55 shadow-md shadow-gray-500/20", isSpan && "col-span-2", bgColor, isTaller && "h-95 md:h-55")}>
                {ChildDiv}
            
            </div>
            
        </>
    )
}

export default Bentogridcard
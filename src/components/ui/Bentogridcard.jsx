import clsx from 'clsx'

const Bentogridcard = ({isSpan, bgColor, ChildDiv}) => {

    return(
        <>
            <div className={clsx("rounded-2xl  h-55", isSpan && "col-span-2", bgColor)}>
                {ChildDiv}
            
            </div>
            
        </>
    )
}

export default Bentogridcard
const Card = ({isSpan}) => {

    return(
        <>
            <div className="border-2 border-black ">
                Card
                <div className="">
                    <div className="">
                        <h3>card-title</h3>
                        <div>icon</div>
                    </div>
                    
                    <div className="">categorie1 categorie2</div>
                    <h3>p r i c e</h3>
                </div>

                <hr />
                
                <div className="">
                    <h3>Company-name</h3>
                    <p>date-posted</p>
                </div>
            
            </div>
            
        </>
    )
}

export default Card
import { GoArrowUpRight } from "react-icons/go";
import { CgTime } from "react-icons/cg";



const Card = ({cardTitle, price, cat1, cat2, companyName, datePosted}) => {

    return(
        <>
            <div className="h-65 w-63 rounded-xl p-6 bg-white">
                <div className="flex flex-col justify-between h-32 ">
                    <div className="flex justify-between items-center ">
                        <h3>{cardTitle}</h3>
                        <div className="w-5 h-5 flex justify-center items-center rounded-full text-white bg-blue-800 hover:bg-blue-700 active:bg-blue-600">
                            <GoArrowUpRight />
                        </div>
                    </div>
                    
                    <div className="flex "><span className="rounded-4xl py-2 px-3 text-blue-800 bg-slate-100">{cat1}</span> <span className="rounded-4xl py-2 px-3 text-blue-800 bg-slate-100">{cat2}</span></div>
                    <h3 className="my-4 ">{price}</h3>
                </div>

                <hr className="mt-7 "/>
                
                <div className="flex flex-col justify-center items-start">
                    <h3 className="text-blue-800">{companyName}</h3>
                    <div className="flex items-center gap-1"><CgTime />{" "}<p>{datePosted}</p></div>
                </div>
            
            </div>
            
        </>
    )
}

export default Card
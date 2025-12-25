import { GoArrowUpRight } from "react-icons/go";
import { CgTime } from "react-icons/cg";



const Card = ({cardTitle, price, cat1, cat2, companyName, datePosted}) => {

    return(
        <>
            <div className="min-h-65 w-63 rounded-xl p-6 bg-white shadow-gray-600/20 shadow-md">
                <div className="flex flex-col justify-between gap-y-5 h-32 ">
                    <div className="flex justify-between items-center ">
                        <h3 className="text-lg font-bold leading-[130%] tracking-tighter">{cardTitle}</h3>
                        <div className="w-5 h-5 flex justify-center items-center rounded-full text-white bg-blue-900 hover:bg-blue-800/70 active:bg-blue-300">
                            <GoArrowUpRight />
                        </div>
                    </div>
                    
                    <div className="flex gap-x-2 text-xs font-light tracking-tighter leading-[130%]"><span className="rounded-4xl py-2 px-3 text-blue-900 bg-slate-100">{cat1}</span> <span className="rounded-4xl py-2 px-3 text-blue-900 bg-slate-100">{cat2}</span></div>
                    <h3 className="my-4 text-lg font-bold tracking-tighter ">{price}</h3>
                </div>

                <hr className="mt-7 text-gray-600/10"/>
                
                <div className="flex flex-col justify-center items-start gap-y-2 mt-7 mb-1">
                    <h3 className="text-blue-900 text-base font-medium tracking-tighter leading-[130%]">{companyName}</h3>
                    <div className="flex items-center gap-1"><CgTime />{" "}<p>{datePosted}</p></div>
                </div>
            
            </div>
            
        </>
    )
}

export default Card
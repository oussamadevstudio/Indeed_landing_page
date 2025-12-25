import { CiStar } from "react-icons/ci";

const Normalgridcard = ({cityAbv, cityName, numberOfSalariesReported, SalaryPerHour}) => {

    return(
        <>
            <div className="w-63 h-37 rounded-xl px-7 md:py-6 bg-[#f3fdff]">
                <div className="flex gap-x-3 my-4">
                    <div className="flex justify-center items-center w-11 h-11 rounded-full bg-[#2457a6] text-white">{cityAbv}</div>
                    <div className="">
                        <h3 className="text-lg font-bold tracking-tighter">{cityName}</h3>
                        <div className="flex items-center gap-y-1 text-gray-500/80 text-xs font-light tracking-tighter"><CiStar /><p>{numberOfSalariesReported}{" "}Salaries reported</p></div>
                    </div>
                </div>
                <hr className="text-gray-600/10" />
                <div className="h-12 py-4 leading-[130%] tracking-tighter text-2xl flex items-end">
                    <h3>{SalaryPerHour}</h3>
                </div>
            </div>
        
        </>
    )
}

export default Normalgridcard
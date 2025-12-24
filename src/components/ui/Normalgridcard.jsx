import { CiStar } from "react-icons/ci";

const Normalgridcard = ({cityAbv, cityName, numberOfSalariesReported, SalaryPerHour}) => {

    return(
        <>
            <div className="w-63 h-37 rounded-xl p-6 bg-cyan-50">
                <div className="flex gap-x-1">
                    <div className="flex justify-center items-center w-11 h-11 rounded-full bg-blue-800 ">{cityAbv}</div>
                    <div className="">
                        <h3>{cityName}</h3>
                        <div className="flex items-center"><CiStar /><p>{numberOfSalariesReported}{" "}Salaries reported</p></div>
                    </div>
                </div>
                <hr />
                <div className="my-4">
                    <h3>{SalaryPerHour}</h3>
                </div>
            </div>
        
        </>
    )
}

export default Normalgridcard
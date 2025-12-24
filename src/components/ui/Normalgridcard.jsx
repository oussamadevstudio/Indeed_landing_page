const Normalgridcard = ({cityAbv, cityName, numberOfSalariesReported, SalaryPerHour}) => {

    return(
        <>
            <div className="w-63 h-37 border-2 border-black">
                <div className="flex ">
                    <div className="flex justify-center items-center w-11 h-11 rounded-full bg-blue-800 ">{cityAbv}</div>
                    <div className="">
                        <h3>{cityName}</h3>
                        <p>{numberOfSalariesReported}{" "}Salaries reported</p>
                    </div>
                </div>
                <hr />
                <div className="">
                    <h3>{SalaryPerHour}</h3>
                </div>
            </div>
        
        </>
    )
}

export default Normalgridcard
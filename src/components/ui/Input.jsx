import { FaArrowRightLong } from "react-icons/fa6";


const Input = () => {

    return(
        <>
        <div className="relative w-full md:w-full  ">
            <input type="text" placeholder="Enter your email" className="h-11 w-full px-4 rounded-3xl bg-white outline-none focus:ring-1 focus:ring-blue-600"/>    
            <button className="absolute right-2 top-1/6 flex items-center justify-center w-7 h-7 rounded-full bg-blue-800 hover:bg-blue-700 active:bg-blue-600 text-white"><FaArrowRightLong /></button>
        </div>
        </>
    )
}

export default Input
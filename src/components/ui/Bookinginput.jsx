import Button from './Button'
import { MdKeyboardArrowDown } from "react-icons/md";


const Bookinginput = () => {

    return(
        <>

        <div className="md:hidden absolute flex flex-col md:flex-row justify-center items-center gap-y-4 top-95 min-h-50 w-[70vw] md:w-200 p-3 md:p-9 rounded-2xl border border-gray-500/10 bg-white shadow-md shadow-gray/20">
            
            <div className="group relative h-9 w-[90%] md:w-[20%] ">
                <div className="absolute text-xl top-2 right-2 transition-transform duration-400 group-active:rotate-180">
                    <MdKeyboardArrowDown />
                </div>
                <select name="" id="" className="appearance-none h-full w-full px-5 rounded-3xl border border-black/10 outline-none focus:ring-1 focus:ring-blue-300 text-gray-400 focus:text-black focus:shadow-blue-900/30 shadow-md shadow-gray/60">
                    <option value="remote" selected>Remote </option>
                    <option value="hybrid">Hybrid</option>
                    <option value="onsite">On Site</option>
                </select>
            </div>

            <input type="text" placeholder="Front desk agent" className="h-9 w-[90%] md:w-[60%] px-5 rounded-3xl border border-black/10 outline-none focus:ring-1 focus:ring-blue-300 text-gray-400 focus:text-black focus:shadow-blue-900/30 shadow-md shadow-gray/60"/>
                
            <Button text="Search" width="w-[90%] md:w-auto"/>
        </div>





        <div className="hidden absolute md:flex flex-col md:flex-row justify-center items-center gap-2 top-95 min-h-29 w-[70vw] md:w-200 p-3 md:p-9 rounded-2xl border border-gray-500/10 bg-white shadow-md shadow-gray/60">
            
            <div className="group relative h-12 w-[90%] md:w-[20%]">
                <div className="absolute top-3 right-2 text-2xl transition-transform duration-400 group-active:rotate-180"><MdKeyboardArrowDown /></div>
                <select name="" id="" className="appearance-none w-full h-full px-5 rounded-3xl border border-black/10 outline-none focus:ring-1 focus:ring-blue-900/30 text-gray-400 focus:text-black  focus:shadow-blue-900/30 shadow-md shadow-gray/60">
                    <option value="remote" selected className="text-gray-400 focus:text-black">Remote</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="onsite">On Site</option>
                </select>
            </div>

            <div className="relative h-12 w-[90%] md:w-[60%] ">
                <input type="text" placeholder="Front desk agent" className="h-full w-full px-5 rounded-3xl border border-black/10 outline-none focus:ring-1 focus:ring-blue-900/30 text-gray-400 focus:text-black focus:shadow-blue-900/30 shadow-md shadow-gray/60"/>
                
                <div className="absolute top-2 right-2"><Button text="Search" width="w-[90%] md:w-auto"/></div>
            </div>
        </div>
        </>
    )
}

export default Bookinginput


//200 29
import Bentogridcard from '../ui/Bentogridcard'
import { TbMoneybag } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";

const Bentogrid = () => {

    const div1 = <div className="w-full h-full flex flex-col justify-center items-start gap-y-5 px-9">
                    <h2 className="font-bold text-2xl tracking-tight uppercase leading-[130%]">Front desk agent salary in United States</h2>
                    <p className="text-[#535353]">How much does a Front Desk Agent make in the United States?</p>
                 </div>

    const div2 = <div className="w-full h-full flex flex-col-reverse justify-center items-start gap-y-5 px-9">
                    <div className="w-full flex justify-end "><TbMoneybag /></div>
                    <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-x-4"><h2 className="text-6xl font-medium tracking-tight">$15.92 </h2> <div className="w-16 h-5 rounded-3xl  bg-blue-900 text-gray-200 text-xs tracking-tight flex justify-center items-center">per hour</div></div>
                    <h3 className="text-lg font-medium tracking-tight leading-[130%] capitalize">Average base salary</h3>
                    
                 </div>

    const div3 = <div className="w-full h-full flex justify-center items-center gap-y-5 px-9">
                    <div className=""> 
                        <h2 className="font-bold text-2xl tracking-tight uppercase leading-[130%]">Graphical presentation</h2>
                        <p className="text-[#535353]">The average salary for a front desk agent is $15.92 per hour in the United States. 80.2k salaries reported,</p>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center">
                        <BsGraphUpArrow />
                    </div>
                 </div>

    return(
        <>
            <section className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-4 px-5 md:px-78 py-9 md:py-18 bg-white">
                <Bentogridcard bgColor={"bg-green-50"} ChildDiv={div1}/>
                <Bentogridcard bgColor={"bg-sky-50"} ChildDiv={div2}/>
                <Bentogridcard bgColor={"bg-indigo-50"} ChildDiv={div3} isSpan={true}/>
            </section>
        
        </>
    )
}

export default Bentogrid
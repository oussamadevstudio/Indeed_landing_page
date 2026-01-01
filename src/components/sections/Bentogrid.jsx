import Bentogridcard from '../ui/Bentogridcard'
import { FaDatabase } from "react-icons/fa6";
import graph from '../../assets/images/graph.png'


const Bentogrid = () => {

    const div1 = <div className="w-full h-full flex flex-col justify-center items-start gap-y-5 px-9">
                    <h2 className="font-bold text-2xl tracking-tight uppercase leading-[130%]">Front desk agent salary in The world</h2>
                    <p className="text-[#535353]">How much does a Front Desk Agent make in the World?</p>
                 </div>

    const div2 = <div className="relative w-full h-full flex flex-col-reverse justify-end md:justify-center items-start gap-y-5 px-9 pt-9 md:pt-0">
                    <div className="absolute bottom-20 md:bottom-4 left-30 md:left-77 w-full text-8xl opacity-25 text-cyan-700"><FaDatabase /></div>
                    <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-x-4"><h2 className="text-6xl font-medium tracking-tight">$15.92 </h2> <div className="w-16 h-5 rounded-3xl  bg-blue-900 text-gray-200 text-xs tracking-tight flex justify-center items-center">per hour</div></div>
                    <h3 className="text-lg font-medium tracking-tight leading-[130%] capitalize">Average base salary</h3>
                    
                 </div>

    const div3 = <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-y-5 px-9">
                    <div className=""> 
                        <h2 className="font-bold text-2xl tracking-tight uppercase leading-[130%]">Graphical presentation</h2>
                        <p className="text-[#535353] w-3/4">The average salary for a front desk agent is $15.92 per hour in the World. 80.2k salaries reported,</p>
                    </div>

                    <div className="md:w-[30%] md:h-[70%] flex flex-col justify-center items-center opacity-65">
                        <img src={graph} alt="" className="z-999 w-full h-full" loading="lazy"/>
                    </div>
                 </div>

    return(
        <>
            <section className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-4 px-5 md:px-78 py-9 md:py-18 bg-white">
                <Bentogridcard bgColor={"bg-[#ebfce4]"} ChildDiv={div1}/>
                <Bentogridcard bgColor={"bg-[#e8faff]"} ChildDiv={div2} isTaller={true}/>
                <Bentogridcard bgColor={"bg-[#f5f5ff]"} ChildDiv={div3} isSpan={true} isTaller={true}/>
            </section>
        
        </>
    )
}

export default Bentogrid
import { SiPluscodes } from "react-icons/si";

const Logo = ({color}) => {

    return(
        <>
        <div className="flex items-center gap-x-2 ml-4"><span className={color}><SiPluscodes /></span> <span className="text-4xl font-extrabold tracking-tighter bg-clip-text bg-linear-to-l from-indigo-900/50 to-cyan-700/50 text-transparent capitalize">Indeed</span></div>
        </>
    )
}

export default Logo
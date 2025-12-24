import { IoMdMailOpen } from "react-icons/io";



const Footerbase = () => {

    return(
        <>
            <div className="col-span-2 flex flex-col  border-green-900 border-2">

                <div className="flex flex-col md:flex-row md:justify-around border-green-400 border-1">
                    <div className="">
                        <p>For any inquiry get connected with us</p>
                        <div className="flex"><h3>hello@indeed.com</h3></div>
                    </div>

                    <div className="">
                        social media icons
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:justify-around border-red-900 border-1">
                    <div className="">copyright1</div>
                    <div className="">copyrigh2</div>
                    <div className="">copyright3</div>
                </div>

            </div>
             
        
        </>
    )
}

export default Footerbase
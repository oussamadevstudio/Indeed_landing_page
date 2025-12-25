import { IoMdMailOpen } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";



const Footerbase = () => {

    return(
        <>
            <div className="col-span-2 flex flex-col">

                <div className="flex flex-col md:flex-row md:justify-between gap-y-4 my-4">
                    <div className="flex flex-col justify-center items-start gap-y-1 text-white">
                        <p>For any inquiry get connected with us</p>
                        <div className="flex items-center gap-x-2 text-2xl"><IoMdMailOpen /><h3 className="">hello@indeed.com</h3></div>
                    </div>

                    <div className="flex items-center justify-start md:justify-center gap-x-2 text-2xl text-gray-400">
                        <FaFacebookSquare />
                        <FaSquareXTwitter />
                        <FaSquareInstagram />
                        <BsLinkedin />

                    </div>
                </div>

                <hr />

                <div className="flex flex-col md:flex-row md:justify-around mt-4">
                    <div className="text-sm text-gray-400">Your Privacy Choices</div>
                    <div className="text-sm text-gray-400">© 2024 Indeed, Inc. All rights reserved</div>
                    <div className="text-sm text-gray-400">Accessibility at Indeed</div>
                </div>

            </div>
             
        
        </>
    )
}

export default Footerbase
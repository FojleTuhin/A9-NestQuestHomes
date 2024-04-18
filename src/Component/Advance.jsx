import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { FaLocationDot, FaMoneyBill1Wave } from "react-icons/fa6";
import { MdOutlineCloudDone } from "react-icons/md";
import { PiShootingStar } from "react-icons/pi";

const Advance = () => {
    return (
        <div className="bg-[#F5F5F5] px-4 md:px-8 lg:px-[100px] py-20">

            <div className=" mb-4">

                <button className="font-bold text-xl border border-black rounded-2xl px-6 py-3 ">OUR ADVANCE</button>
            </div>
            <p className="font-semibold text-5xl">Giving you peace of mind</p>

            <div className="grid md:grid-cols-3 mt-12 ">
                <div className="p-2 ">
                    <AiFillHeart className="text-5xl text-[#4F95FF]"></AiFillHeart>
                    <p className="mt-4 text-2xl font-bold">Comfortable</p>
                    <p className="mt-4 text-[#73788C] font-normal">Enjoy lifestyle amenities designed to provide every homeowners modern comfort, a stone's throw away from schools, churches, and hospitals.</p>
                </div>
                <div className="p-2">
                <MdOutlineCloudDone className="text-5xl text-[#4F95FF]" />
                    <p className="mt-4 text-2xl font-bold">Extra security</p>
                    <p className="mt-4 text-[#73788C] font-normal">Enjoy lifestyle amenities designed to provide every homeowners modern comfort, a stone's throw away from schools, churches, and hospitals.</p>
                </div>
                <div className="p-2">
                <AiFillStar className="text-5xl text-[#4F95FF]"/>
                    <p className="mt-4 text-2xl font-bold">Luxury</p>
                    <p className="mt-4 text-[#73788C] font-normal">Enjoy lifestyle amenities designed to provide every homeowners modern comfort, a stone's throw away from schools, churches, and hospitals.</p>
                </div>

            </div>
            <div className="grid md:grid-cols-3 mt-12">
                <div className="p-2">
                <PiShootingStar className="text-5xl text-[#4F95FF]"/>
                    <p className="mt-4 text-2xl font-bold">Best price</p>
                    <p className="mt-4 text-[#73788C] font-normal">Enjoy lifestyle amenities designed to provide every homeowners modern comfort, a stone's throw away from schools, churches, and hospitals.</p>
                </div>
                <div className="p-2">
                <FaLocationDot className="text-5xl text-[#4F95FF]" />
                    <p className="mt-4 text-2xl font-bold">Strategic location</p>
                    <p className="mt-4 text-[#73788C] font-normal">Enjoy lifestyle amenities designed to provide every homeowners modern comfort, a stone's throw away from schools, churches, and hospitals.</p>
                </div>
                <div className="p-2">
                <FaMoneyBill1Wave className="text-5xl text-[#4F95FF]"/>
                    <p className="mt-4 text-2xl font-bold">Efficient</p>
                    <p className="mt-4 text-[#73788C] font-normal">Enjoy lifestyle amenities designed to provide every homeowners modern comfort, a stone's throw away from schools, churches, and hospitals.</p>
                </div>

            </div>
        </div>
    );
};

export default Advance;
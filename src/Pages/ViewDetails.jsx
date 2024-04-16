import { FaBed, FaLocationDot } from "react-icons/fa6";
import { TfiTimer } from "react-icons/tfi";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BiBath } from "react-icons/bi";
import { GiKitchenKnives } from "react-icons/gi";
import { BsCurrencyDollar } from "react-icons/bs";

const ViewDetails = () => {
    return (
        <div className="px-[100px]">
            <p className="mt-8 text-2xl font-semibold">Modern Haven Villa this stunning 5-bedroom, 4-bathroom </p>
            <div className="mt-5 flex justify-between mb-10">
                <div className="flex gap-3 items-center"><FaLocationDot />511/2, Kafrul, Taltola, Dhaka</div>
                <div className="flex gap-3 items-center"><TfiTimer />March 19, 2023</div>
                <div className="flex gap-12 items-center">
                    <button className="flex gap-3 items-center btn border-black"><AiOutlineHeart />Save</button>
                    <button className="flex gap-3 items-center btn border-black"><AiOutlineShareAlt />Share</button>
                </div>

            </div>

            <div className="grid grid-cols-8 gap-8 h-[380px] mb-12">
                <div className="col-span-5">
                    <img className="h-auto bg-cover" src="/public/1.png" alt="" />
                </div>
                <div className="col-span-3 flex flex-col gap-8">
                    <div>
                        <img className="h-[174px] w-full" src="/public/2.png" alt="" />
                    </div>
                    <div>
                        <img className="h-[174px] w-full" src="/public/2.png" alt="" />
                    </div>
                </div>


            </div>
            <div className="grid grid-cols-8 gap-8">

                <div className="col-span-5">
                    <div className="flex justify-between border-2 border-gray-300 rounded-xl mb-10 px-[55px] py-[20px]">
                        <div className="flex flex-col gap-6 text-xl  items-center">
                            <div><span>5</span> Beds</div>
                            < FaBed className="text-xl text-[#A7A7A7]" />
                        </div>
                        <div className="flex flex-col gap-6 text-xl items-center">
                            <div><span>5</span> Bath</div>
                            < BiBath  className="text-xl text-[#A7A7A7]" />
                        </div>
                        <div className="flex flex-col gap-6 text-xl items-center">
                            <div><span>5</span> Kitchen</div>
                            < GiKitchenKnives  className="text-xl text-[#A7A7A7]" />
                        </div>
                        
                    </div>

                </div>
                <div className="col-span-3">
                    <div className="border-2 border-gray-300 rounded-xl p-8">
                        <p className="mb-5">Price</p>
                        <p className="text-2xl font-bold flex items-center "><BsCurrencyDollar className="text-[#BF9500] font-bold" />1,700,00</p>
                        <div className="flex gap-5 mt-7 mb-8">
                            <button className="btn border-[#4F95FF] text-[#4F95FF]">Book aTour</button>
                            <button className="btn bg-[#4F95FF] text-white">Contact Agent</button>
                        </div>
                        <hr className="border-2 mb-6"/>
                        <p className="font-medium text-xl text-center">Highlights</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ViewDetails;
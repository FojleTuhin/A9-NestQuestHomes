import { FaBed, FaLocationDot } from "react-icons/fa6";
import { TfiTimer } from "react-icons/tfi";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BiBath } from "react-icons/bi";
import { GiKitchenKnives } from "react-icons/gi";
import { BsCurrencyDollar } from "react-icons/bs";

const ViewDetails = () => {
    return (
        <div className="px-[100px]">
            <div className="flex justify-between">
                <p className="mt-8 text-2xl font-semibold">Modern Haven Villa this stunning 5-bedroom, 4-bathroom </p>
                <p className="mt-8 text-2xl font-semibold">001</p>
            </div>
            <p className="mt-8 text-xl font-medium">Single-family home</p>
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
                            < BiBath className="text-xl text-[#A7A7A7]" />
                        </div>
                        <div className="flex flex-col gap-6 text-xl items-center">
                            <div><span>5</span> Kitchen</div>
                            < GiKitchenKnives className="text-xl text-[#A7A7A7]" />
                        </div>

                    </div>
                    <div className="mb-10">
                        <p className="font-medium text-2xl mb-5">About This Home</p>
                        <p>Introducing the ultimate modern oasis in the heart of New York! This stunning 5-bedroom, 4-bathroom home boasts sleek and stylish finishes throughout, including state-of-the-art appliances, elegant fixtures, and premium materials. With an open-concept layout that seamlessly blends indoor and outdoor living, this home is perfect for entertaining guests or simply relaxing in your own private sanctuary. Enjoy the convenience of being located in the heart of one of the world's most vibrant cities, while still enjoying the peace and tranquility of your own modern haven. Don't miss your chance to experience the ultimate in contemporary luxury living!</p>
                        <hr className="border-2 text-[#E4E7E9] mt-10 mb-16" />

                        <p className="font-medium text-2xl mb-8">More Details</p>
                        <div className="bg-[#F5F5F5] p-7 rounded-xl">
                            <p className="font-bold text-xl mb-3">Property Information</p>
                            <div className="grid grid-cols-2 ">
                                <div>
                                    <p className="mb-3"><span className="font-bold text-[#5E5E5E]">Bed:</span> 5</p>
                                    <p className="mb-3"><span className="font-bold text-[#5E5E5E]">Bath:</span> 5</p>
                                    <p className="mb-3"><span className="font-bold text-[#5E5E5E]">Kitchen:</span> 5</p>
                                    <p className="mb-3"><span className="font-bold text-[#5E5E5E]">Living area:</span> Shingle</p>
                                    <p className="mb-3"><span className="font-bold text-[#5E5E5E]">Date listed:</span> Carpet, Engineered Wood,
                                        Marble</p>
                                    <p className="mb-3"><span className="font-bold text-[#5E5E5E]">Year built:</span> Heating and Cooling</p>
                                </div>
                                <div>
                                    <p className="mb-3"><span className="font-bold text-[#5E5E5E]">School district:</span> Shingle</p>
                                    <p className="mb-3"><span className="font-bold text-[#5E5E5E]">Neighborhood features:</span></p>
                                    <ul className="list-disc ml-6">
                                        <li>Parks</li>
                                        <li>Shopping centers</li>
                                        <li>Schools</li>
                                    </ul>
                                    <p className="mt-3"><span className="font-bold text-[#5E5E5E]">Location:</span> Shingle</p>

                                   

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <div className="col-span-3">
                    <div className="border-2 border-gray-300 rounded-xl p-8">
                        <div className="mb-5 flex justify-between">
                            <p className="font-bold">Price</p>
                            <p className="font-bold text-2xl text-[#4F95FF]">Sale</p>
                        </div>
                        <p className="text-2xl font-bold flex items-center "><BsCurrencyDollar className="text-[#BF9500] font-bold" />1,700,00</p>
                        <div className="flex justify-between mt-7 mb-8">
                            <button className="btn border-[#4F95FF] text-[#4F95FF]">Book aTour</button>
                            <button className="btn bg-[#4F95FF] text-white">Contact Agent</button>
                        </div>
                        <hr className="border-2 mb-6" />
                        <p className="font-medium text-xl text-center mb-4">Facilities</p>
                        <div className="bg-[#F5F5F5] p-6 rounded-xl">
                            <ul className="list-disc ml-6">

                                <li>Living room</li>
                                <li>Backyard</li>
                                <li>Garage</li>

                            </ul>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ViewDetails;
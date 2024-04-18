import { FaBed, FaLocationDot } from "react-icons/fa6";
import { TfiTimer } from "react-icons/tfi";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BiBath } from "react-icons/bi";
import { GiKitchenKnives } from "react-icons/gi";
import { BsCurrencyDollar } from "react-icons/bs";
import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ViewDetails = () => {

    const homes = useLoaderData();
    const { id } = useParams();
    const home = homes.find(home => home.id === id);

    return (
        <div className="px-4 md:px-8 lg:px-[100px]">

            <Helmet>
                <title>NestQuest | ViewDetails</title>
            </Helmet>

            <div className="flex justify-between">
                <p className="mt-8 text-2xl font-semibold">{home.estate_title} </p>
                <p className="mt-8 text-2xl font-semibold">{id}</p>
            </div>
            <p className="mt-8 text-xl font-medium">{home.segment_name}</p>
            <div className="mt-5 md:flex justify-between mb-10">
                <div className="flex gap-3 items-center"><FaLocationDot />{home.location}</div>
                <div className="flex gap-3 items-center mt-2 md:mt-0"><TfiTimer />{home.date_listed}</div>
                <div className="flex md:gap-12 gap-6 items-center mt-2 md:mt-0">
                    <button className="flex gap-3 items-center btn border-black"><AiOutlineHeart />Save</button>
                    <button className="flex gap-3 items-center btn border-black"><AiOutlineShareAlt />Share</button>
                </div>

            </div>

            <div className="md:grid md:grid-cols-8 md:gap-8 gap-4 md:h-[380px] mb-12">
                <div className="md:col-span-5 w-full mb-8 md:mb-0">
                    <img className="h-auto bg-cover" src={home.images[0]} alt="" />
                </div>
                <div className="md:col-span-3 flex md:flex-col md:gap-8 gap-4">
                    <div>
                        <img className="md:h-[174px] h-[85px] w-full" src={home.images[1]} alt="" />
                    </div>
                    <div>
                        <img className="md:h-[174px] h-[85px] w-full" src={home.images[2]} alt="" />
                    </div>
                </div>


            </div>
            <div className="md:grid md:grid-cols-8 md:gap-8">

                <div className="col-span-5">
                    <div className="flex justify-between border-2 border-gray-300 rounded-xl mb-10 px-[55px] py-[20px]">
                        <div className="flex flex-col gap-6 text-xl  items-center">
                            <div><span>{home.bedrooms}</span> Beds</div>
                            < FaBed className="text-xl text-[#A7A7A7]" />
                        </div>
                        <div className="flex flex-col gap-6 text-xl items-center">
                            <div><span>{home.bathrooms}</span> Bath</div>
                            < BiBath className="text-xl text-[#A7A7A7]" />
                        </div>
                        <div className="flex flex-col gap-6 text-xl items-center">
                            <div><span>{home.kitchens}</span> Kitchen</div>
                            < GiKitchenKnives className="text-xl text-[#A7A7A7]" />
                        </div>

                    </div>
                    <div className="mb-10">
                        <p className="font-medium text-2xl mb-5">About This Home</p>
                        <p>{home.description}</p>
                        <hr className="border-2 text-[#E4E7E9] mt-10 mb-16" />

                        <p className="font-medium text-2xl mb-8">More Details</p>
                        <div className="bg-[#F5F5F5] p-7 rounded-xl">
                            <p className="font-bold text-xl mb-3">Property Information</p>
                            <div className="md:grid md:grid-cols-2 ">
                                <div>
                                    <p className="mb-3"><span className="font-bold text-[#5e5e5e]">Bed:</span> {home.bedrooms}</p>
                                    <p className="mb-3"><span className="font-bold text-[#5E5E5E]">Bath:</span> {home.bathrooms}</p>
                                    <p className="mb-3"><span className="font-bold text-[#5E5E5E]">Kitchen:</span> {home.kitchens}</p>
                                    <p className="mb-3"><span className="font-bold text-[#5E5E5E]">Living area:</span> {home.area}</p>
                                    <p className="mb-3"><span className="font-bold text-[#5E5E5E]">Date listed:</span> {home.date_listed}</p>
                                    <p className="mb-3"><span className="font-bold text-[#5E5E5E]">Year built:</span> {home.year_built}</p>
                                </div>
                                <div>
                                    <p className="mb-3"><span className="font-bold text-[#5E5E5E]">School district:</span> {home.school_district}</p>
                                    <p className="mb-3"><span className="font-bold text-[#5E5E5E]">Neighborhood features:</span></p>
                                    <ul className="list-disc ml-6">
                                        <li>{home.neighborhood_features[0]}</li>
                                        <li>{home.neighborhood_features[1]}</li>
                                        <li>{home.neighborhood_features[2]}</li>

                                    </ul>
                                    <p className="mt-3"><span className="font-bold text-[#5E5E5E]">Location:</span> {home.location}</p>



                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <div className="col-span-3">
                    <div className="border-2 border-gray-300 rounded-xl p-8 mb-10">
                        <div className="mb-5 flex justify-between">
                            <p className="font-bold">Price</p>
                            <p className="font-bold text-2xl text-[#4F95FF]">{home.status}</p>
                        </div>
                        <p className="text-2xl font-bold flex items-center "><BsCurrencyDollar className="text-[#BF9500] font-bold" />{home.price}</p>
                        <div className="flex flex-col justify-between mt-7 mb-8">
                            <button className="btn border-[#4F95FF] text-[#4F95FF]">Book aTour</button>
                            <button className="btn bg-[#4F95FF] text-white mt-2">Contact Agent</button>
                        </div>
                        <hr className="border-2 mb-6" />
                        <p className="font-medium text-xl text-center mb-4">Facilities</p>
                        <div className="bg-[#F5F5F5] p-6 rounded-xl">
                            <ul className="list-disc ml-6">

                                <li>{home.facilities[0]}</li>
                                <li>{home.facilities[1]}</li>
                                <li>{home.facilities[2]}</li>


                            </ul>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ViewDetails;
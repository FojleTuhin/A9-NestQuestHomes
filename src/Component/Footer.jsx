import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#1F2744] px-4 md:px-8 lg:px-[100px] py-16 grid md:grid-cols-3 gap-6 justify-center text-white">
            <div>
                <Link to='/'><a className="btn btn-ghost text-xl font-bold">NestQuestHomes</a></Link>
                <p className="mt-9 text-[#9D9EA1]">Customer Supports:</p>
                <p>(629) 555-0129</p>
                <p className="mt-3 text-[#9D9EA1]">4517 Washington Ave. <br /> Manchester, Kentucky 39495</p>
                <p className="mt-3">fojletuhin@gmail.com</p>
                <div className="flex gap-12 mt-5 mb-5 text-4xl">
                    <BsFacebook />
                    <BsInstagram />
                    <BsGithub />
                </div>
                <p>© 2021 . All rights reserved.</p>
            </div>
            <div>
                <p className="font-semibold mt-2 mb-8 text-xl text-center md:text-left">Properties</p>
                <ul>
                    <li className="mb-2">About us</li>
                    <li className="mb-2">Our Mission</li>
                    <li className="mb-2">Privacy Policy</li>
                    <li className="mb-2">Help Center</li>
                    <li className="mb-2">Contact us</li>
                </ul>
            </div>
            <div>
                <p className="font-semibold mt-2 mb-8 text-xl text-center md:text-left">All pages</p>
                <ul>
                    <li className="mb-2">Cocker Spaniel</li>
                    <li className="mb-2">Cockapoo</li>
                    <li className="mb-2">Labrador Retriever</li>
                    <li className="mb-2">German Shepherd</li>
                    <li className="mb-2">French Bulldog</li>
                    <li className="mb-2">Dachshund</li>
                    <li className="mb-2">Cavapoo</li>
                </ul>
            </div>

        </div>
    );
};

export default Footer;
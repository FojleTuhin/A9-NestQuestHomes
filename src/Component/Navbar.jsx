import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";


const Navbar = () => {

    const links = <>
        <Link to='/'><li><a className="font-medium">Home</a></li></Link>
        <li><a className="font-medium">Properties</a></li>
        <li><a className="font-medium">Blog</a></li>
        <li><a className="font-medium">Agents</a></li>

    </>

    return (
        <div className="px-[100px] bg-[#F5F5F5]">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                            <Link to='/login'> <a className="border border-black flex gap-2 justify-center items-center px-6 py-3 font-medium rounded-3xl"><FaRegUser /> Login</a></Link>

                        </ul>
                    </div>

                    <div className="flex items-center">
                        <img src="/public/Group 1000004335.png" alt="" />
                        <Link to='/'><a className="btn btn-ghost text-xl font-bold">NestQuestHomes</a></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>

                </div>
                <div className="navbar-end max-sm:hidden">
                    <Link to='/login'> <a className=" border border-black flex gap-2 justify-center items-center px-6 py-3 font-medium rounded-3xl"><FaRegUser /> Login</a></Link>
                </div>





            </div>

            <hr className=" border-black" />
        </div>

    );
};

export default Navbar;
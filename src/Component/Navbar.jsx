import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";



const Navbar = () => {

    const{user, logOut}=useContext(AuthContext)

    const handleSignOut=()=>{
        logOut()
        .then()
        .catch()
    }

    const links = <>
        <Link to='/'><li><a className="font-medium">Home</a></li></Link>
        <Link to='/updateProfile'><li><a className="font-medium">Update profile</a></li></Link>
        
        


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
                        <img src="https://i.ibb.co/7zDTKyp/Group-1000004335.png
" alt="" />
                        <Link to='/'><a className="btn btn-ghost text-xl font-bold">NestQuestHomes</a></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                    

                </div>
                <div className="navbar-end max-sm:hidden">
                  
                  
                  {
                    user && <img className="w-12 h-12 border border-black mr-3 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
                  }

                        {
                            user ?
                            
                            <Link> <a onClick={handleSignOut} className=" border border-black flex gap-2 justify-center items-center px-6 py-3 font-medium rounded-3xl"><FaRegUser /> Sign out</a></Link>
                            :
                            <Link to='/login'> <a className=" border border-black flex gap-2 justify-center items-center px-6 py-3 font-medium rounded-3xl"><FaRegUser /> Login</a></Link>
                        }

                    
                </div>





            </div>

            <hr className=" border-black" />
        </div>

    );
};

export default Navbar;
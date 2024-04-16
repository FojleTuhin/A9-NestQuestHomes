import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";

const Register = () => {

    const logInStyle = {
        backgroundImage:
            "url('/public/layered-waves-haikei.png')",
        height: "130vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }

    const {createUser}= useContext(AuthContext);


    const handleLSignIn = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;

        createUser(email, password)
        .then(result =>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div style={logInStyle}>

            <div className="hero min-h-screen ">
                <div className=" flex-col ">
                    <div className="text-center mt-5 mb-5">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full shadow-2xl bg-[#c8d7d7]">
                        <form onSubmit={handleLSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#8aabab] font-extrabold text-white">Sign in</button>
                            </div>


                        </form>
                        <div className="flex gap-8 justify-evenly mb-3 px-4">
                            <button className="btn "><FaGoogle />Google </button>
                            <button className="btn"><FaGithub />Github</button>
                        </div>
                        <div className="mb-8 px-6 text-center">
                            <p>Already have an account? <span className="font-bold text-blue-600"><Link to='/login'>Login</Link></span></p>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
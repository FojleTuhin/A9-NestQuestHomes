import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";

const Login = () => {

    const logInStyle = {
        backgroundImage:
            "url('/public/layered-waves-haikei.png')",
        height: "110vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }

    const {signIn}=useContext(AuthContext);
    const location =useLocation();
    const navigate=useNavigate();


    const handleLogIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
        .then(result=>{

            navigate(location?.state? location.state: '/')
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div style={logInStyle}>

            <div className="hero min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0  max-w-sm shadow-2xl bg-[#c8d7d7]">
                        <form onSubmit={handleLogIn} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover font-bold text-blue-600">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#8aabab] font-extrabold text-white">Login</button>
                            </div>


                        </form>
                        <div className="flex gap-8 justify-evenly mb-3 px-4">
                            <button className="btn "><FaGoogle />Google </button>
                            <button className="btn"><FaGithub />Github</button>
                        </div>
                        <div className="mb-8 px-6">
                            <p>New to NestquestHome? <span className="font-bold text-blue-600"><Link to='/register'>Sign in</Link></span></p>
                        </div>
                        


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
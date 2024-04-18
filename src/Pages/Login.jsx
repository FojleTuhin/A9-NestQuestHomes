import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import 'animate.css';
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {

    const logInStyle = {
        backgroundImage:
            "url('https://i.ibb.co/mS4fXSD/layered-waves-haikei.png')",
        height: "110vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }

    const { signIn, googleLogin, facebookLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                
                toast.success('Successfully sign in')
                console.log(result);
            })
            .catch(error => {
                toast.error('Something wrong')
            })
    }



    const handleFacebookLogin = () => {
        facebookLogin()
            .then(result => {
                toast.success('Successfully sign in')

            })
            .catch(error => {
                toast.error('Something wrong')
            })
    }


    const handleLogIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
        
            .then(result => {
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                toast.error("Password or email don't match")
            })
    }

    return (
        <div style={logInStyle}>
             <Helmet>
                <title>NestQuest | Login</title>
            </Helmet>
            <div><Toaster /></div>

            <div className="hero min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-4xl font-bold animate__animated animate__backInDown">Login now!</h1>
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
                            <button onClick={handleGoogleLogin} className="btn "><FaGoogle />Google </button>
                            <button onClick={handleFacebookLogin} className="btn"><FaFacebook />Facebook</button>
                        </div>
                        
                        <div className="mb-8 px-6">
                            <p>New to NestquestHome? <span className="font-bold text-blue-600"><Link to='/register'>Sign up</Link></span></p>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
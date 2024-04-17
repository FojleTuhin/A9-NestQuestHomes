import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>

            <Helmet>
                <title>NestQuest | Error</title>
            </Helmet>
            <img className="max-h-screen bg-cover m-auto" src="https://i.ibb.co/V97VBr5/Oops-404-Error-with-a-broken-robot-rafiki.png" alt="" />

            <div className="w-1/2 m-auto  ">
                <Link to='/'><button className="btn bg-[#87909A] flex mt-[-60px] m-auto font-bold text-white text-2xl">Back to home</button></Link>
            </div>
        </div>
    );
};

export default Error;
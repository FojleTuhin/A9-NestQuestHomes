import { Helmet } from "react-helmet-async";


const Agent = () => {
    return (
        <div className="px-[100px]">

            <Helmet>
                <title>NestQuest | Agent</title>
            </Helmet>
            

            <p className="font-bold text-3xl text-center mt-16 mb-6">Fojle Rabbi Tuhin</p>
            <div className="flex justify-center">
                <img className="w-[300px] h-[300px] rounded-full" src="https://i.ibb.co/SX082Np/437980426-1828738407552335-7597958578566773852-n.jpg" alt="" />
            </div>

            <p className="text-center text-xl mt-6 "><span className="font-bold text-xl">Contact:</span> 01877127***</p>
            <p className="text-center text-xl  mb-6"><span className="font-bold text-xl">Email:</span> fojletuhin@gmail.com</p>
            <p className="text-center text-xl  mb-6"><span className="font-bold text-xl">Office:</span> Taltola, Agargaon, Dhaka 1207</p>


        </div>
    );
};

export default Agent;
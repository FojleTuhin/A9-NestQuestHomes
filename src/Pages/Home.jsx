import { useLoaderData } from "react-router-dom";
import Advance from "../Component/Advance";
import Banner from "../Component/Banner";
import Cities from "../Component/Cities";
import Discover from "../Component/Discover";
import Feature from "../Component/Feature";
import { Helmet } from "react-helmet-async";

const Home = () => {

    

    return (
        <div>
             <Helmet>
                <title>NestQuest | Home</title>
            </Helmet>
    

            <Banner></Banner>
            <div className="bg-[#FCFCFC]">
                <div className="px-[100px]">
                    <p className="text-2xl font-medium mb-7">Featured Listings</p>
                    <Feature></Feature>
                </div>

                <Discover></Discover>
                <Cities></Cities>
            </div>
            <Advance></Advance>
        </div>
    );
};

export default Home;
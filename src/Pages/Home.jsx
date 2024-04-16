import { useLoaderData } from "react-router-dom";
import Advance from "../Component/Advance";
import Banner from "../Component/Banner";
import Cities from "../Component/Cities";
import Discover from "../Component/Discover";
import Feature from "../Component/Feature";

const Home = () => {

    

    return (
        <div>
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
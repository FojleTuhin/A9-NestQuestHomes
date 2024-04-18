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
                <Feature></Feature>
                <Discover></Discover>
                <Cities></Cities>
            </div>
            <Advance></Advance>
        </div>
    );
};

export default Home;
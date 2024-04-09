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
                <Feature></Feature>
                <Discover></Discover>
                <Cities></Cities>
            </div>
            <Advance></Advance>
        </div>
    );
};

export default Home;
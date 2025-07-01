import About from "../components/About";
import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import RunningCampaign from "../components/RunningCampaign";

const Home = () => {
    return (
        <div>
            <Banner/>
            <RunningCampaign/>
            <About/>
            <ContactUs/>
        </div>
    );
};

export default Home;
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import CampaignCard from "../components/CampaignCard";

const Home = () => {
    const loadedData = useLoaderData();
    console.log(loadedData);
    return (
        <div>
            <Banner />
            <div>
                <div className="text-center my-6">
                    <h2 className="font-semibold text-2xl lg:text-3xl">All Campaign</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        loadedData.map((products) => <CampaignCard key={products?._id} product={products} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
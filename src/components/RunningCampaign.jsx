/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import RunnginCampaignCard from "./RunnginCampaignCard";

const RunningCampaign = () => {
    const [campaign, setCampaign] = useState([]);
    useEffect(() => {
        fetchAllData();
    }, [])
    const fetchAllData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-campaign`)
            setCampaign(data);
            console.log(campaign);

        } catch (error) {
            console.log(error);
        }
    }
    console.log(campaign);
    return (
        <div className="pt-8">
            <div className="text-center">
                <h2 className="text-2xl font-semibold">Running Campaign</h2>
                <p className="mt-2 font-light">Collaboratively unleash orthogonal infrastructures for intuitive systems. Quickly incubate worldwide e-services through.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                {
                    campaign.map((card) => <RunnginCampaignCard key={card?._id} card={card}/>)
                }
            </div>
        </div>
    );
};

export default RunningCampaign;
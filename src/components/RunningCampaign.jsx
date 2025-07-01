/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import RunnginCampaignCard from "./RunnginCampaignCard";
import toast from "react-hot-toast";

const RunningCampaign = () => {
    const [campaign, setCampaign] = useState([]);
    useEffect(() => {
        fetchAllData();
    }, [])
    const fetchAllData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-campaign`)
            setCampaign(data);

        } catch (error) {
            toast.error(error)
        }
    }
    console.log(campaign);
    return (
        <div className="pt-8">
            <div className="text-center">
                <h2 className="text-center font-semibold text-2xl lg:text-3xl">Running <span className="text-indigo-500">Campaign</span></h2>
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
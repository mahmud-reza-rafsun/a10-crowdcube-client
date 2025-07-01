/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import axios from "axios";
import MyDonationCard from "../components/MyDonationCard";
import toast from "react-hot-toast";

const MyDonations = () => {
    const { user } = useContext(AuthContext);
    const [campaign, setCampaign] = useState([]);
    useEffect(() => {
        fetchAllData();
    }, [user])
    const fetchAllData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/myDonation/${user?.email}`)
            setCampaign(data);

        } catch (error) {
            toast.error(error)
        }
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                campaign.map((camp) => <MyDonationCard camp={camp} key={camp?._id}/>)
            }
        </div>
    );
};

export default MyDonations;
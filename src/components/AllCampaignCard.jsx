/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const AllCampaignCard = () => {
    const {user} = useContext(AuthContext);
    const { id } = useParams();
    const [campaign, setCampaign] = useState();
    useEffect(() => {
        fetchAllData();
    }, [])
    const fetchAllData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/campaigns/${id}`)
            setCampaign(data);

        } catch (error) {
            console.log(error);
        }
    }
    const handleDonate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const ammount = form.ammount.value;
        const donationData = {name, email, ammount};
        
        try{
            const {data} =  await axios.post(`${import.meta.env.VITE_API_URL}/donation`, donationData);
            console.log(data);
            toast.success('Donation Successfull!!!')
        }catch(error){
            console.log(error);
        }
    }
    return (
        <div
            className="hero min-h-[80vh]"
            style={{
                backgroundImage:
                    `url(${campaign?.photo})`,
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-white text-center">
                <div className="max-w-md">
                    <div className="hero bg-transparent backdrop-blur-md">
                        <div className="card w-full max-w-lg shrink-0 shadow-2xl">
                            <div className="card-body">
                                <form onSubmit={handleDonate} className="fieldset space-y-3">
                                    <input defaultValue={user?.displayName} name="name" disabled={true} type="text" className="input border-amber-50 bg-transparent" placeholder="Name" />
                                    <input defaultValue={user?.email} disabled={true} type="email" className="input border-amber-50 bg-transparent" name="email" placeholder="Email" />
                                    <input defaultValue={campaign?.ammount} name="ammount" type="number" className="input border-amber-50 bg-transparent" placeholder="Ammount" />
                                    <button className="btn bg-indigo-500 border-none shadow-none text-white mt-4">Donate</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCampaignCard;
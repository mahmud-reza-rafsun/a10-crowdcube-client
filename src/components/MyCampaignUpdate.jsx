/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const MyCampaignUpdate = () => {
    const {user} = useContext(AuthContext);
    const {id} = useParams();
    const navigate = useNavigate();
     const [campaign, setCampaign] = useState([]);
    useEffect(() => {
        fetchAllData();
    }, [user])
    const fetchAllData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/myCampaign/${id}`)
            setCampaign(data);
            
        } catch (error) {
            console.log(error);
        }
    }
    console.log(campaign);
    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const photo = form.photo.value;
        const type = form.type.value;
        const ammount = form.ammount.value;
        const description = form.description.value;
        const formData = {title, photo, type, ammount, description}
        
        try{
            const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/addCampaign/${id}`, formData)
            console.log(data);
            toast.success('Data Updated')
            navigate('/myCampaign')
        }catch(error){
            console.log(error);
        }

    }
    return (
        <div className="hero bg-base-200 min-h-screen rounded-md">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleUpdate} className="">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="label">Title</label>
                                <input defaultValue={campaign?.title} type="text" name="title" className="input" placeholder="Title" />
                            </div>
                            <div>
                                <label className="label">Photo URL</label>
                                <input defaultValue={campaign?.photo} type="url" name="photo" className="input" placeholder="Photo URL" />
                            </div>
                            <div>
                                <label className="label">Campaing Type</label>
                                <select
                                    name="type"
                                    className="input"
                                    defaultValue={campaign?.type}
                                >
                                    <option value="" disabled>
                                    </option>
                                    <option value="personal-issue">Personal Issue</option>
                                    <option value="startup">Startup</option>
                                    <option value="business">Business</option>
                                    <option value="creative-ideas">Creative Ideas</option>
                                </select>
                            </div>
                            <div>
                                <label className="label">Ammount</label>
                                <input defaultValue={campaign?.ammount} type="number" name="ammount" className="input" placeholder="Ammount" />
                            </div>
                        </div>
                        <label className="label">Date</label>
                        <input type="date" className="input w-full" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="label">Name</label>
                                <input defaultValue={user?.displayName} disabled type="text" className="input" />
                            </div>
                            <div>
                                <label className="label">Email</label>
                                <input defaultValue={user?.email} type="email" disabled className="input" />
                            </div>
                        </div>
                        <textarea defaultValue={campaign?.description} className="textarea w-full mt-4" name="description" placeholder="Description"></textarea>
                        <button className="btn btn-success w-full text-white mt-4">Add Campaign</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyCampaignUpdate;
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import axios from 'axios'
import toast from 'react-hot-toast'

const AddNewCampaign = () => {
    const {user} = useContext(AuthContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const photo = form.photo.value;
        const type = form.type.value;
        const ammount = form.ammount.value;
        const description = form.description.value;
        const formData = {title, photo, type, ammount, description, userData:{name: user?.name, email: user?.email}}
        console.log(formData);

        try{
            await axios.post(`${import.meta.env.VITE_API_URL}/addCampaign`, formData);
            toast.success('Data add Successfull')
        }catch(error){
            toast.error(error);
        }
    }
    return (
        <div className="hero bg-base-200 min-h-screen rounded-md">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="label">Title</label>
                                <input type="text" name="title" className="input" placeholder="Title" />
                            </div>
                            <div>
                                <label className="label">Photo URL</label>
                                <input type="url" name="photo" className="input" placeholder="Photo URL" />
                            </div>
                            <div>
                                <label className="label">Campaing Type</label>
                                <select
                                name="type"
                                    className="input"
                                >
                                    <option value="" disabled>
                                        -- Choose an option --
                                    </option>
                                    <option value="personal-issue">Personal Issue</option>
                                    <option value="startup">Startup</option>
                                    <option value="business">Business</option>
                                    <option value="creative-ideas">Creative Ideas</option>
                                </select>
                            </div>
                            <div>
                                <label className="label">Ammount</label>
                                <input type="number" name="ammount" className="input" placeholder="Ammount" />
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
                                <input defaultValue={user?.email} type="email" disabled className="input"/>
                            </div>
                        </div>
                        <textarea className="textarea w-full mt-4" name="description" placeholder="Description"></textarea>
                        <button className="btn btn-success w-full text-white mt-4">Add Campaign</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNewCampaign;
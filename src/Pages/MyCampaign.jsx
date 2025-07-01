/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import { GoTrash } from "react-icons/go";
import { LiaUserEditSolid } from "react-icons/lia";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const MyCampaign = () => {
    const { user } = useContext(AuthContext);
    const [campaign, setCampaign] = useState([]);
    useEffect(() => {
        fetchAllData();
    }, [user])
    const fetchAllData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-campaign/${user?.email}`)
            setCampaign(data);

        } catch (error) {
            toast.error(error)
        }
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/campaign/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingCampaing = campaign.filter((camp) => camp._id !== id);
                            setCampaign(remainingCampaing);
                        }
                    })
            }
        });
    }
    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Ammount</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        campaign.map((camp, idx) => <tr key={camp?._id}>
                            <th>{idx + 1}</th>
                            <td>{camp?.title}</td>
                            <td>{camp?.type}</td>
                            <td>{camp?.ammount}</td>
                            <td>{camp?.description.substring(0, 18)}...</td>
                            <td className="flex gap-3">
                                <Link to={`/myCampaign/${camp?._id}`}>
                                    <button className="btn btn-success btn-xs">
                                        <span className=" text-white text-[15px]"><LiaUserEditSolid /></span>
                                    </button>
                                </Link>
                                <button onClick={() => handleDelete(camp?._id)} className="btn btn-error btn-xs">
                                    <span className=" text-white text-[15px]"><GoTrash /></span>
                                </button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyCampaign;
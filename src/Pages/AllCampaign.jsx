/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCampaign = () => {
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
        <div>
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
                        {/* row 1 */}
                        {
                            campaign.map((card, idx) => <tr>
                            <th>{idx + 1}</th>
                            <td>{card?.title}</td>
                            <td>{card?.type}</td>
                            <td>${card?.ammount}</td>
                            <td>{card?.description.substring(0, 18)}...</td>
                            <td>
                                <Link to={`/campaign/${card?._id}`}>See More</Link>
                            </td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCampaign;
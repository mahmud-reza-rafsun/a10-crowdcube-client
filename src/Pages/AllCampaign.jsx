import { useLoaderData } from "react-router-dom";
import AllCampaignTable from "../components/AllCampaignTable";

const AllCampaign = () => {
    const AllCampaignData = useLoaderData();
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Ammount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        AllCampaignData.map((table) => <AllCampaignTable key={table?._id} table={table} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllCampaign;
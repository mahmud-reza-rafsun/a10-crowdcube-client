import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyCampaignTable from "../components/MyCampaignTable";

const MyCampaign = () => {
    const loadedData = useLoaderData();
    const singleData = useLoaderData();
    const [data, setData] = useState(loadedData)

    console.log(data);
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
                        data.map((table) => <MyCampaignTable singleData={singleData} data={data} setData={setData} table={table} key={table?._id} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyCampaign;
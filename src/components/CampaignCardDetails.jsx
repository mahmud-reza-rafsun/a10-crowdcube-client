import { useLoaderData } from "react-router-dom";

const CampaignCardDetails = () => {
    const singleData = useLoaderData();
    console.log(singleData);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Ammount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={singleData?.photo}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{singleData?.title}</div>
                                        <div className="text-sm opacity-50"></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {singleData?.type}
                            </td>
                            <td>{singleData?.description}</td>
                            <td>{singleData?.ammount}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CampaignCardDetails;
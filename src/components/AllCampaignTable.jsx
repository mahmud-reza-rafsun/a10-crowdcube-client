const AllCampaignTable = ({ table }) => {
    const { _id, title, photo, type, ammount, description } = table;
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={photo}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50"></div>
                    </div>
                </div>
            </td>
            <td>
                {type}
            </td>
            <td>{description}</td>
            <td>{ammount}</td>
            <td><button className="btn btn-error btn-sm text-white">X</button></td>
        </tr>
    );
};

export default AllCampaignTable;
import { FaUserEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import Swal from "sweetalert2";
import Modal from "./Modal";

const MyCampaignTable = ({ table, data, setData, singleData }) => {
    const { _id, title, photo, type, ammount, description } = table;
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
                fetch(`https://a10-crowdcube-server.vercel.app/campaign/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(type => {
                        if (type) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = data.filter((user) => user?._id !== id);
                        setData(remaining);
                    })
            }
        });

    }
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={photo}
                                alt={title} />
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
            <td><button className="btn btn-error btn-sm text-white" onClick={() => document.getElementById('my_modal_3').showModal()}><FaUserEdit /></button></td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-error btn-sm text-white"><GoTrash /></button></td>
            <Modal singleData={singleData} />
        </tr>
    );
};

export default MyCampaignTable;
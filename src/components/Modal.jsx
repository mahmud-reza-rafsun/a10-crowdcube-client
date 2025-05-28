const Modal = ({ singleData }) => {
    const { _id, title, photo, type, ammount, description } = singleData;
    const handleChangeCampaign = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const photo = e.target.photo.value;
        const type = e.target.type.value;
        const description = e.target.description.value;
        const ammount = e.target.ammount.value;
        const user = { _id, title, photo, type, description, ammount }
        fetch(`http://localhost:5000/campaign/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(user);
            })
    }
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleChangeCampaign}>
                        <div>
                            <div className="hero min-h-[30vh]">
                                <div className="hero-content flex-col">
                                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                        <div className="space-y-4 p-5">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block mb-1 font-medium text-gray-700">Campaign Title</label>
                                                    <input
                                                        defaultValue={title}
                                                        name="title"
                                                        type="text"
                                                        placeholder="Enter campaign title"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block mb-1 font-medium text-gray-700">Image URL (Thumbnail)</label>
                                                    <input
                                                        defaultValue={photo}
                                                        name="photo"
                                                        type="text"
                                                        placeholder="https://image-url"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block mb-1 font-medium text-gray-700">Campaign Type</label>
                                                    <select name="type" defaultValue={type} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                        <option value="">Select type</option>
                                                        <option value="personal">Personal Issue</option>
                                                        <option value="startup">Startup</option>
                                                        <option value="business">Business</option>
                                                        <option value="creative">Creative Ideas</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block mb-1 font-medium text-gray-700">Description</label>
                                                    <textarea
                                                        defaultValue={description}
                                                        name="description"
                                                        rows="4"
                                                        placeholder="Write something about your campaign..."
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block mb-1 font-medium text-gray-700">Minimum Donation Amount</label>
                                                <input
                                                    defaultValue={ammount}
                                                    name="ammount"
                                                    type="number"
                                                    placeholder="e.g. 100"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
                                            >
                                                Make change
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;
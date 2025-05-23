import Swal from "sweetalert2";

const AddNewCampaign = () => {
    const handleAddNewCampaign = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const photo = form.photo.value;
        const type = form.type.value;
        const description = form.description.value;
        const ammount = form.ammount.value;
        const data = { title, photo, type, description, ammount };
        fetch('https://a10-crowdcube-server.vercel.app/campaign', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Successfully Add",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }
    return (
        <div>
            <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Add New Campaign</h2>
                <form onSubmit={handleAddNewCampaign} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Campaign Title</label>
                        <input
                            name="title"
                            type="text"
                            placeholder="Enter campaign title"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Image URL (Thumbnail)</label>
                        <input
                            name="photo"
                            type="text"
                            placeholder="https://image-url"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Campaign Type</label>
                        <select name="type" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
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
                            name="description"
                            rows="4"
                            placeholder="Write something about your campaign..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Minimum Donation Amount</label>
                        <input
                            name="ammount"
                            type="number"
                            placeholder="e.g. 100"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
                    >
                        Submit Campaign
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNewCampaign;
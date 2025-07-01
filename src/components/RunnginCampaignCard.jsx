const RunnginCampaignCard = ({card}) => {
    const {title, photo, type, ammount, description} = card || {};
    return (
        <div className="p-4 border border-gray-500 rounded-md">
            <figure>
                <img
                    src={photo}
                    className="rounded-md h-56 object-cover w-full"
                    alt="Shoes" />
            </figure>
            <div className="my-4">
                <h2 className="font-semibold text-lg mb-2">{title}</h2>
                <p className="text-sm"><span className="font-semibold">Description</span>: {description.substrin}</p>
                <p className="text-sm"><span className="font-semibold">Ammount</span>: {ammount}</p>
                <p className="text-sm"><span className="font-semibold">Type</span>: {type}</p>
            </div>
        </div>
    );
};

export default RunnginCampaignCard;
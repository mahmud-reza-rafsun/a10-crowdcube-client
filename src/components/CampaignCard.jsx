import { Link } from "react-router-dom";

const CampaignCard = ({ product }) => {
    const { _id, title, photo, type, ammount, description } = product;
    return (
        <div className="border p-5 rounded-md">
            <figure>
                <img
                    className="w-full h-56 object-cover rounded-md"
                    src={photo}
                    alt={title} />
            </figure>
            <div className="mt-3">
                <h2 className="card-title">{title}</h2>
                <p>Description: {description}</p>
                <p>Type: {type}</p>
                <p>Ammount: {ammount}</p>
                <div className="card-actions justify-center">
                    <Link to={`/campaign/${_id}`}>
                        <button className="btn btn-accent ">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;
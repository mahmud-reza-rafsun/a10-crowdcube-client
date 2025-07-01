const MyDonationCard = ({ camp }) => {
    console.log(camp);
    return (
        <div className="card bg-base-100 card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{camp?.title}</h2>
                <h2 className="text-md">Ammount: {camp?.ammount}</h2>
                <p>Type: {camp?.type}</p>
                <p>Description: {camp?.description}</p>
                <p>Email: {camp?.userData?.email}</p>
            </div>
        </div>
    );
};

export default MyDonationCard;
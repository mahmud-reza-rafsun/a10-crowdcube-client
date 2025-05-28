import { useLoaderData } from "react-router-dom";

const MyDonation = () => {
    const data = useLoaderData();
    return (
        <div>
            {
                data.map((card) => <div key={card?._id} className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={card?.photo}
                            alt={card?.title} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{card?.title}</h2>
                        <p>{card?.description}</p>
                        <p>Ammount: {card?.ammount}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyDonation;
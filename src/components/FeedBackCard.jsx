const FeedBackCard = ({ data }) => {
    return (
        <div className="card bg-base-100 w-full shadow-xl">
            <div className="card-body w-80 lg:w-96 rounded-md bg-sky-500 text-white">
                <div className="flex gap-5 relative">
                    <img className="w-14 h-14 rounded-full object-cover" src={data?.userImg} alt={data?.name} />
                    <h2 className="card-title">{data?.name}</h2>
                </div>
                <p>{data?.review}</p>
                <div className="card-actions justify-start items-center">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <button className="btn btn-sm btn-error text-white">Review</button>
                </div>
            </div>
        </div>
    );
};

export default FeedBackCard;
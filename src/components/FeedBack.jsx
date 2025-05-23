import Marquee from "react-fast-marquee";
import FeedBackCard from "./FeedBackCard";
import { useEffect, useState } from "react";

const FeedBack = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    console.log(user);
    return (
        <div>
            <h2 className="text-center font-semibold text-2xl lg:text-3xl pb-6">Our Global Review </h2>
            <Marquee pauseOnHover={true} speed={150}>
                <div className="grid grid-cols-6 gap-4 pl-4">
                    {
                        user.map((data) => <FeedBackCard key={data?.reviewId} data={data} />)
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default FeedBack;
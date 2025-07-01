import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-6xl mx-auto min-h-[calc(100vh-285px)] px-5 lg:px-0 py-3 lg:py-5">
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default Root;
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all-campaigns">All Campaign</NavLink></li>
        {
            user && <>
                <li><NavLink to="/addCampaign">Add New Campaign</NavLink></li>
                <li><NavLink to="/myCampaign">My Campaign</NavLink></li>
                <li><NavLink to="/myDonations">My Donations</NavLink></li>
            </>
        }
    </>
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success('Logout Successfull')
            })
            .catch((err) => {
                toast.error(err.message)
            })
    }
    return (
        <div className="bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="navbar max-w-6xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">Crowdcube</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="flex gap-4">
                            <div className="dropdown dropdown-end">
                                <div className="btn btn-ghost btn-circle avatar">
                                    <div className="w-24 rounded-full">
                                        <img
                                            // alt="Tailwind CSS Navbar component"
                                            src={user?.photoURL ? user?.photoURL : 'https://files.catbox.moe/ts4hmy.jpg'} className="w-24" />
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleSignOut} className="btn btn-error text-white">Sign Out</button>
                        </div >
                            :
                            <div className="flex gap-3">
                                <Link to="/sign-in" className="btn bg-indigo-500 text-white">Sign In</Link>
                                <Link to="/register" className="btn btn-success text-white">Register</Link>
                            </div>
                    }
                </div>
            </div >
        </div >
    );
};

export default Navbar;
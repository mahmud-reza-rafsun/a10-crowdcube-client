import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import ThemeToggle from "../Pages/ThemeToggle";

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
            <div className="navbar max-w-6xl mx-auto px-6 lg:px-0">
                <div className="navbar-start">
                    <Link to="/" className="font-bold text-xl">Crowdcube</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
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
                            <button onClick={handleSignOut} className="btn btn-error text-white hidden lg:flex">Sign Out</button>
                        </div >
                            :
                            <div className="hidden lg:flex gap-3">
                                <Link to="/sign-in" className="btn bg-indigo-500 text-white">Sign In</Link>
                                <Link to="/register" className="btn btn-success text-white">Register</Link>
                            </div>
                    }
                    <ThemeToggle />
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-sm bg-indigo-500 text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content absolute right-0 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                            <div className="flex gap-4">
                                {
                                    user ? <>
                                        <button onClick={handleSignOut} className="btn-sm btn lg:btn btn-error text-white">Sign Out</button>
                                    </>
                                        :
                                        <>
                                            <Link to="/sign-in" className="btn bg-indigo-500 text-white">Sign In</Link>
                                            <Link to="/register" className="btn btn-success text-white">Register</Link>
                                        </>
                                }
                            </div>
                        </ul>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Navbar;
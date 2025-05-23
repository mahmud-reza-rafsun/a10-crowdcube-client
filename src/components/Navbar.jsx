import { useContext } from "react";
import { Link, NavLink, } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const handleLogOut = () => {
        signOutUser();
    }
    return (
        <div className="bg-base-100 shadow-xl sticky top-0 z-50">
            <div className="navbar mx-auto max-w-6xl px-5 lg:px-0">
                <div className="navbar-start">

                    <Link to="/" className="font-semibold text-xl lg:text-2xl">Crowdcube</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="all-campaign">All Campaign</NavLink></li>
                        {
                            user && <>
                                <li><NavLink to="add-new-campaign">Add New Campaign</NavLink></li>
                                <li><NavLink to="my-campaign">My Campaign</NavLink></li>
                                <li><NavLink to="my-donations">My Donations</NavLink></li>
                            </>
                        }
                    </ul>
                </div>
                <div className="navbar-end gap-2 lg:gap-4">
                    {
                        user ?
                            <>
                                <div className="dropdown dropdown-end tooltip tooltip-left" data-tip={user?.displayName}>
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt={user?.displayName}
                                                src={user?.photoURL} />
                                        </div>
                                    </div>
                                </div>
                                <button onClick={handleLogOut} className="btn btn-error text-white">Log Out</button>
                            </>
                            :
                            <>
                                <NavLink to="/login">
                                    <button className="btn">Login</button>
                                </NavLink>
                                <NavLink to="/register">
                                    <button className="btn">Register</button>
                                </NavLink>
                            </>
                    }
                    <div>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost bg-slate-200 lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 absolute right-0 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="all-campaign">All Campaign</NavLink></li>
                                {
                                    user && <>
                                        <li><NavLink to="add-new-campaign">Add New Campaign</NavLink></li>
                                        <li><NavLink to="my-campaign">My Campaign</NavLink></li>
                                        <li><NavLink to="my-donations">My Donations</NavLink></li>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
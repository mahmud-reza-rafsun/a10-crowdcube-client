import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const { signInWithGoogle, createUserWithEmail } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const data = { name, photo, email, password };

        // create user
        createUserWithEmail(email, password)
            .then(result => {
                manageProfile(name, photo)
                alert('success')
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const handleGoogleRegister = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-[88vh]">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Register now</h1>
                </div>
                <div className="card bg-base-100 w-full lg:max-w-lg shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo-url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                                <div onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute top-12 right-4">
                                    {
                                        showPassword ? <FaEyeSlash /> : <FaEye />
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="text-center pb-3">
                        <button onClick={handleGoogleRegister} className="btn btn-sm bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </div>
                    <p className="text-sm p-3">Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import toast from 'react-hot-toast'

const Register = () => {
    const { createUserWithGoogle, createUserWithEmail } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        const regEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (!regEx.test(password)) {
            toast.error('Password must be 6-16 characters long, include at least one number and one special character.')
        }

        // create user
        createUserWithEmail(email, password)
            .then(() => {
                toast.success('Register Successfull')
            })
            .catch((err) => {
                toast.error(err.message)
            })
    }
    const handleGoogleSingIn = () => {
        createUserWithGoogle()
            .then((result) => {
                console.log(result.user);
                toast.success('Register Successfull')
            })
            .catch((err) => {
                console.log(err.message);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-[80vh] rounded-md">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <h1 className="text-3xl text-center pt-6 font-bold">Register</h1>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="label">Name</label>
                                <input type="text" name="name" className="input w-full" placeholder="Name" />
                            </div>
                            <div>
                                <label className="label">Photo URL</label>
                                <input type="url" name="photo" className="input w-full" placeholder="Photo URL" />
                            </div>
                            <div>
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input w-full" placeholder="Email" />
                            </div>
                            <div>
                                <label className="label">Password</label>
                                <input type={showPassword ? "password" : "text"} name="password" className="input w-full" placeholder="Password" />
                                <div onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute top-[190px] right-10">
                                    {
                                        showPassword ? <IoEye /> : <IoEyeOff />
                                    }
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-success text-amber-100 mt-4">Register</button>
                    </form>
                    <button onClick={handleGoogleSingIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
                <p className="text-sm pl-6 pb-3">Already have an account? <Link className="underline" to="/register">Sing In</Link> </p>
            </div>
        </div>
    );
};

export default Register;
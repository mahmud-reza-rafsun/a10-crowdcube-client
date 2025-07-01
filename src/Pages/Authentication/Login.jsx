import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import toast from "react-hot-toast";

const Login = () => {
    const { createUserWithGoogle, signInUserWithEmail } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const from = location.state || "/";
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const regEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(!regEx.test(password)){
            toast.error('Password must be 6-16 characters long, include at least one number and one special character.')
        }   

        // create user
        signInUserWithEmail(email, password)
            .then(() => {
                toast.success('Sign In Successfull')
                navigate(from);
            })
            .catch((err) => {
                toast.error(err.message)
            })
    }
    const handleGoogleSingIn = () => {
        createUserWithGoogle()
            .then((result) => {
                console.log(result.user);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-[80vh] rounded-md">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-3xl text-center pt-6 font-bold">Sign in!</h1>
                <div className="card-body">
                    <form onSubmit={handleSignIn} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type={showPassword ? "password" : "text"} name="password" className="input w-full" placeholder="Password" />
                        <div onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute top-[190px] right-10">
                            {
                                showPassword ? <IoEye /> : <IoEyeOff />
                            }
                        </div>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-success text-amber-100 mt-4">Sign in</button>
                    </form>
                    <button onClick={handleGoogleSingIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
                <p className="text-sm pl-6 pb-3">New to this website? <Link className="underline" to="/register">Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;
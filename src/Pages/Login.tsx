import loginPic from '../assets/login.png';
import { Key } from 'lucide-react';
import { NavLink } from "react-router-dom";

export default  function Login() {
    return (
        <div className="grid sm:grid-cols-2 gap-1 h-screen">
            <div className="flex items-center justify-center sm:order-first m-5 p-6">
                <form className="card gap-3 place-items-center p-6 rounded-box">
                    <div className="chat chat-end p-3">
                        <div className="chat-bubble text-4xl m-3 ">Admin Login</div>
                    </div>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70">
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70">
                            <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                        </svg>
                        <input type="password" className="grow" placeholder="Password" />
                    </label>
                    <label className="flex place-items-center  w-[50%] btn btn-outline btn-accent">
                        <Key color='green' size={30} />
                        <input type="submit" className='text-xl' value="login" />
                    </label>
                    <NavLink to="/"
                        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""
                        }>🏡Go to Homepage?
                    </NavLink>
                </form>
            </div>
            <div className="flex items-center justify-center sm:h-full md:h-screen bg-base-300 p-6">
                <img src={loginPic} alt="nopic" />
            </div>
        </div>
    );
}

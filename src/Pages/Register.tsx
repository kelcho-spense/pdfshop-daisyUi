import { Key } from 'lucide-react';
import loginPic from '../assets/login.png';
export function Register() {
  return (
    <div className="grid sm:grid-cols-2 gap-1 h-screen">
      <div className="flex items-center justify-center sm:order-first m-5 p-6">
        <form className="card gap-3 place-items-center p-6 rounded-box">
          <div className="chat chat-end p-3">
            <div className="chat-bubble text-4xl m-3 ">Register</div>
          </div>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Full Name" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input type="password" className="grow" placeholder="Phone" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input type="password" className="grow" placeholder="Address" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input type="password" className="grow" placeholder="Email" />
          </label> 
            
          <label className="input input-bordered flex items-center gap-2">
            <input type="password" className="grow" placeholder="Password" />
          </label>       
           <button type='submit' className='btn btn-outline btn-info w-11/12'>Register</button>       
        </form>
      </div>
      <div className="flex items-center justify-center sm:h-full md:h-screen bg-base-300 p-6">
        <img src={loginPic} alt="nopic" />
      </div>
    </div>
  )
}



import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";


function Login() {

  const { 
    register, 
    handleSubmit,
      formState: { errors },
     } = useForm();

  const onSubmit = (data) => console.log(data);
   

    return (
    <div>


<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link 
      to={"/"}
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>


    
    <h3 className="font-bold text-lg text-teal-400">Login</h3>
   
   {/* Email */}
    <div className="mt-4 space-y-2">
       <span>Email</span>
        <br/>
        <input type="email" placeholder="Enter Your email"  className="w-80 px-3 py-1 rounded-md outline-none"
         {...register("email", { required: true })} />
         <br/>
   {errors.email && <span className="text-sm text-red-500" >This field is required</span>}
    </div>
{/* Password*/}
       <div className="mt-4 space-y-2">
        <span>Password</span>
        <br/>
        <input type="password" placeholder="Enter Your password"  className="w-80 px-3 py-1 rounded-md outline-none"
        {...register("password", { required: true })} />
        <br/>
   {errors.password && <span className="text-sm text-red-500">This field is required</span>}
    </div>

{/* Button */}
<div className="flex justify-around mt-4">
    <button className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-800 duration-200">Login</button>
       
    <p>Not Registered ? {""}
        <Link to="/signup" 
        className="underline text-blue-500 cursor-pointer">
             Signup
             </Link>
             {""}
    
    </p>
</div>
</form>
  </div>
</dialog>


    </div>
  );
}

export default Login;
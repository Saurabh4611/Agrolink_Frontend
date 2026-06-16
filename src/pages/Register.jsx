import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../api/axios';
import Navbar from '../components/Navbar';

export default function Register() {

   const navigate = useNavigate();

   const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      password: '',
      phone: '',
      address: '',
      role: 'BUYER',
   });

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = async (e) => {

      e.preventDefault();

      try {

         await API.post('/auth/register', formData);

         alert('Registration Successful');

         navigate('/login');

      }
      catch (error) {
         console.log(error);
         alert('Registration Failed');
      }
   };

   return (
      <>
      <Navbar/>
      <main className="min-h-screen flex items-center justify-center py-4 px-4 md:px-8 bg-green-50">

         <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden">

            <div className="grid items-center w-full gap-4 md:grid-cols-2">

               <div className="hidden md:block h-full">

                  <img
                     src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop"
                     alt="register"
                     className="w-full h-full object-cover"
                  />
               </div>

               <div className="py-6 px-6 lg:px-8">

                  <div className="max-w-md mx-auto w-full">

                     <h1 className="text-slate-900 text-3xl font-bold mb-2">
                        Create Account
                     </h1>

                     <p className="text-slate-500 mb-8">
                        Join AgroLink today.
                     </p>

                     <form className="space-y-4" onSubmit={handleSubmit}>

                        <input
                           type="text"
                           name="fullName"
                           placeholder="Full Name"
                           value={formData.fullName}
                           onChange={handleChange}
                           required
                           className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        />

                        <input
                           type="email"
                           name="email"
                           placeholder="Email"
                           value={formData.email}
                           onChange={handleChange}
                           required
                           className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        />

                        <input
                           type="password"
                           name="password"
                           placeholder="Password"
                           value={formData.password}
                           onChange={handleChange}
                           required
                           className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        />

                        <input
                           type="text"
                           name="phone"
                           placeholder="Phone Number"
                           value={formData.phone}
                           onChange={handleChange}
                           required
                           className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        />

                        <input
                           type="text"
                           name="address"
                           placeholder="Address"
                           value={formData.address}
                           onChange={handleChange}
                           required
                           className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        />

                       <select
   name="role"
   value={formData.role}
   onChange={handleChange}
   className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
>
   <option value="BUYER">Buyer</option>
   <option value="FARMER">Farmer</option>
</select>

<button
   type="submit"
   className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all"
>
   Register
</button>

</form>

<p className="text-center text-sm text-slate-600 mt-6">
   Already have an account?
   <Link
      to="/login"
      className="text-green-700 font-semibold hover:underline ml-1"
   >
      Login
   </Link>
</p>

</div>
</div>
</div>
</div>
</main>
</>
);
}
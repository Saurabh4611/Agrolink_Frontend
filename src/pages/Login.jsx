import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../api/axios';
import Navbar from '../components/Navbar';

export default function Login() {

   const [isVisible, setIsVisible] = useState(false);

   const toggleVisibility = () => {
      setIsVisible((prevState) => !prevState);
   };

   const navigate = useNavigate();

   const [formData, setFormData] = useState({
      email: '',
      password: '',
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

         const response = await API.post('/auth/login', formData);

         localStorage.setItem('token', response.data.token);
         localStorage.setItem('role', response.data.role);
         localStorage.setItem("userId", response.data.userId);
         
         alert('Login Successful');

         const role = response.data.role;

         if (role === 'FARMER') {
            navigate('/farmer-dashboard');
         }
         else if (role === 'BUYER') {
            navigate('/buyer-dashboard');
         }
         else if (role === 'ADMIN') {
            navigate('/admin-dashboard');
         }

      }
      catch (error) {
         console.log(error);
         alert('Invalid Credentials');
      }
   };

   return (
      <>
         <Navbar/>
      <main className="min-h-screen flex items-center justify-center py-4 px-4 md:px-8 bg-green-50">

         <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden">

            <div className="grid items-center w-full gap-4 md:grid-cols-2">

               <div className="md:aspect-[8/10] bg-gray-50 relative before:absolute before:inset-0 before:bg-black/40 overflow-hidden w-full h-full">

                  <img
                     src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop"
                     className="w-full h-full object-cover"
                     alt="AgroLink"
                  />

                  <div className="absolute inset-0 flex items-end justify-center">

                     <div className="w-full bg-gradient-to-t from-black/70 via-black/50 to-transparent absolute bottom-0 p-6 max-md:hidden">

                        <h2 className="text-white text-3xl font-bold">
                           Welcome Back Farmer
                        </h2>

                        <p className="text-slate-200 text-base mt-4 leading-relaxed">
                           Buy and sell crops online, detect plant diseases using AI,
                           and connect farmers directly with buyers using AgroLink.
                        </p>

                     </div>
                  </div>
               </div>

               <div className="py-6 px-6 lg:px-8 max-md:-order-1">

                  <div className="max-w-md mx-auto w-full">

                     <h1 className="text-slate-900 text-3xl font-bold mb-2">
                        AgroLink Login
                     </h1>

                     <p className="text-slate-500 mb-8">
                        Sign in to continue to your dashboard.
                     </p>

                     <form className="space-y-6" onSubmit={handleSubmit}>

                        <div>

                           <label className="mb-2 text-slate-900 font-medium text-sm inline-block">
                              Email
                           </label>

                           <input
                              type="email"
                              name="email"
                              placeholder="Enter your email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="px-3 py-3 text-sm text-slate-900 rounded-md bg-white w-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                           />
                        </div>

                        <div className="relative">

                           <label className="mb-2 text-slate-900 font-medium text-sm inline-block">
                              Password
                           </label>

                           <button
                              type="button"
                              onClick={toggleVisibility}
                              className="absolute top-9 right-3"
                           >
                              {isVisible ? '🙈' : '👁️'}
                           </button>

                           <input
                              type={isVisible ? 'text' : 'password'}
                              name="password"
                              placeholder="Enter your password"
                              value={formData.password}
                              onChange={handleChange}
                              required
                              className="px-3 py-3 text-sm text-slate-900 rounded-md bg-white w-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                           />
                        </div>

                        <button 
                           type="submit"
                           className="w-full py-3 px-3.5 text-sm rounded-md font-semibold cursor-pointer text-white bg-green-600 hover:bg-indigo-500 transition-all"
                        >
                           Sign In
                        </button>

                     </form>

                     <div className="mt-6 text-slate-900 text-sm text-center">
                        Don't have an account?
                        <Link
                           to="/register"
                           className="text-green-700 hover:underline ml-1 font-medium"
                        >
                           Sign Up
                        </Link>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </main>
      </>
   );
}
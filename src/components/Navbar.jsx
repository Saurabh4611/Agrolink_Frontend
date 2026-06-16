import React from "react";
import { Link } from "react-router-dom";
import Agrolink from "../image/Agrolink.png";

export default function Navbar() {

   const token = localStorage.getItem("token");
   const role = localStorage.getItem("role");

   const handleLogout = () => {
localStorage.clear();

      window.location.href = "/";
   };

   return (

      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">

         {/* Logo */}
         <Link
           
            to="/"
            className="text-3xl font-bold text-green-700 "
         >
            <img src={Agrolink} srcset="" alt="logo"  />
            
         </Link>

         {/* Nav Links */}
         <div className="flex items-center gap-4">

            <Link
               to="/"
               className="text-slate-700 hover:text-green-700 font-medium"
            >
               Home
            </Link>

            <Link
               to="/marketplace"
               className="text-slate-700 hover:text-green-700 font-medium"
            >
               Marketplace
            </Link>

            <Link
               to="/detect-disease"
               className="text-slate-700 hover:text-green-700 font-medium"
            >
               AI Detection
            </Link>

            {/* Farmer Dashboard */}
            {role === "FARMER" && (
               <Link
                  to="/farmer-dashboard"
                  className="text-slate-700 hover:text-green-700 font-medium"
               >
                  Farmer Dashboard
               </Link>
            )}

            {/* Buyer Dashboard */}
            {role === "BUYER" && (
               <Link
                  to="/buyer-dashboard"
                  className="text-slate-700 hover:text-green-700 font-medium"
               >
                  Buyer Dashboard
               </Link>
            )}

            {/* Admin Dashboard */}
            {role === "ADMIN" && (
               <Link
                  to="/admin-dashboard"
                  className="text-slate-700 hover:text-green-700 font-medium"
               >
                  Admin Dashboard
               </Link>
            )}

            {/* Login/Register or Logout */}
            {!token ? (
               <>
                  <Link
                     to="/login"
                     className="px-4 py-2 rounded-lg border border-green-600 text-green-700 hover:bg-green-100"
                  >
                     Login/Register
                  </Link>

                  
               </>
            ) : (
               <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
               >
                  Logout
               </button>
            )}

         </div>

      </nav>
   );
}
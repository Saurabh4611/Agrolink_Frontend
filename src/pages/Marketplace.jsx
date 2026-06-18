import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import BuyerDashboard from "./BuyerDashboard";
import axios from "axios";

export default function Marketplace() {

   const [crops, setCrops] = useState([]);
   const [search, setSearch] = useState("");
   const navigate = useNavigate();
   const user_id = localStorage.getItem("userId");
   useEffect(() => {
      fetchCrops();
   }, []);

   console.log(user_id);

  const handlesingleunit = async (cropId) => {

   if (!user_id) {
      alert("Please Login First!");
      navigate("/login");
      return;
      console.log(user_id);
   }

   try {

      await API.post("/cart/add", {
         buyerId: Number(user_id),
         cropId: cropId,
         quantity:1
      });

      alert("Crop Added To Cart");

   } catch(error) {
      console.log(error);
   }
};

const handleBulkBuy = async (cropId, crop) => {

   if (!user_id) {
      alert("Please Login First!");
      navigate("/login");
      return;
   }

   const quantity = Number(prompt("Enter Quantity (Kg)"));

   if (!quantity || quantity <= 0) {
      alert("Please enter a valid quantity");
      return;
   }

   if (quantity > crop.quantity) {
      alert(`Only ${crop.quantity} Kg available`);
      return;
   }

   try {

      await API.post("/cart/add", {
         buyerId: Number(user_id),
         cropId: cropId,
         quantity: quantity
      });

      alert(`${quantity} Kg Added To Cart`);

   } catch (error) {
      console.log(error);
      alert("Failed To Add Crop");
   }
};
   const fetchCrops = async () => {

      try {

         const response = await API.get("/crops");

         setCrops(response.data);

      }
      catch (error) {
         console.log(error);
      }
   };

   const filteredCrops = crops.filter((crop) =>
      crop.cropName.toLowerCase().includes(search.toLowerCase())
   );

   return (

      <div className="min-h-screen bg-green-50">

         <Navbar />

         {/* Header */}
         <div className="bg-green-700 text-white py-14 px-6 text-center">

            <h1 className="text-5xl font-bold mb-4">
               Agro Marketplace
            </h1>

            <p className="text-lg text-green-100">
               Buy fresh crops directly from farmers
            </p>

         </div>

         {/* Search */}
         <div className="max-w-7xl mx-auto px-6 mt-10">

            <input
               type="text"
               placeholder="Search crops..."
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               className="w-full p-4 rounded-xl border border-slate-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            />

         </div>

         {/* Crop Cards */}
         <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredCrops.map((crop) => (

               <div
                  key={crop.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
               >

                  {/* Crop Image */}
                  <img
                     src={
                        crop.imageUrl 
                         ? `https://agrolink-backend-k4eo.onrender.com/uploads/${crop.imageUrl}`
                        : "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop"
                     }
                     alt={crop.cropName}
                     className="h-56 w-full object-cover"
                  />

                  {/* Crop Details */}
                  <div className="p-6">

                     <div className="flex justify-between items-center mb-3">

                        <h2 className="text-2xl font-bold text-slate-800">
                           {crop.cropName}
                        </h2>

                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                           {crop.category}
                        </span>

                     </div>

                     <p className="text-slate-600 mb-4 line-clamp-3">
                        {crop.description}
                     </p>

                     <div className="space-y-2 text-sm text-slate-700">

                        <p>
                           <span className="font-semibold">Price:</span>
                           {" "}₹{crop.price}
                        </p>

                        <p>
                           <span className="font-semibold">Quantity:</span>
                           {" "}{crop.quantity} Kg
                        </p>

                        <p>
                           <span className="font-semibold">Location:</span>
                           {" "}{crop.location}
                        </p>

                        <p>
                           <span className="font-semibold">Farmer:</span>
                           {" "}{crop.farmer?.fullName}
                        </p>

                     </div>

                     {/* Buttons */}
                     <div className="mt-6 flex gap-3">

                        <button
   onClick={() => handlesingleunit(crop.id)}
   className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all"
>
   Buy Single unit
</button>
<button
   onClick={() => handleBulkBuy(crop.id,crop)}
   className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all"
>
   Buy In Bulk
</button>
                        

                     </div>

                  </div>

               </div>

            ))}

         </div>

      </div>
   );
}
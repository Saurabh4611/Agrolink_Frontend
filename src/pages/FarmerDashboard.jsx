import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/axios";
import { Link } from "react-router-dom";

export default function FarmerDashboard() {

   const [crops, setCrops] = useState([]);
   const [orders, setOrders] = useState([]);

   useEffect(() => {
      fetchFarmerCrops();
        fetchOrders();

   }, []);

   const fetchFarmerCrops = async () => {

      try {

         const farmerId = localStorage.getItem("userId");

         const response = await API.get(
            `/crops/farmer/${farmerId}`
         );

         setCrops(response.data);

      }
      catch (error) {
         console.log(error);
      }
   };

   const fetchOrders = async () => {
  try {
    const farmerId = localStorage.getItem("userId");

    const response = await API.get(
      `/order/farmer/${farmerId}`
    );

    setOrders(response.data);
  } catch (error) {
    console.log(error);
  }
};

const updateStatus = async (orderId, status) => {
  try {

    const response = await API.put(
      `/order/status/${orderId}?status=${status}`
    );

    alert(response.data);

    fetchOrders();

  } catch (error) {

    console.log(error);
    alert("Failed to update order");

  }
};
   const handleDelete = async (cropId) => {

      try {

         await API.delete(`/crops/${cropId}`);

         alert("Crop Deleted Successfully");

         fetchFarmerCrops();

      }
      catch (error) {

         console.log(error);
         alert("Delete Failed");
      }
   };

   return (

      <div className="min-h-screen bg-green-50">

         <Navbar />

         {/* Header */}
         <div className="bg-green-700 text-white py-12 px-6">

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

               <div>

                  <h1 className="text-4xl font-bold">
                     Farmer Dashboard
                  </h1>

                  <p className="text-green-100 mt-2">
                     Manage your crops and marketplace listings
                  </p>

               </div>

               <Link
                  to="/add-crop"
                  className="bg-white text-green-700 px-6 py-3 rounded-xl font-semibold hover:bg-green-100 transition-all"
               >
                  + Add Crop
               </Link>

            </div>

         </div>

         {/* Stats */}
         <div className="max-w-7xl mx-auto px-6 mt-10 grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow-md">

               <h2 className="text-slate-500 text-lg">
                  Total Crops
               </h2>

               <p className="text-4xl font-bold text-green-700 mt-3">
                  {crops.length}
               </p>

            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">

               <h2 className="text-slate-500 text-lg">
                  Active Listings
               </h2>

               <p className="text-4xl font-bold text-blue-600 mt-3">
                  {crops.length}
               </p>

            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">

               <h2 className="text-slate-500 text-lg">
                  AI Disease Tool
               </h2>

               <Link
                  to="/detect-disease"
                  className="inline-block mt-4 text-green-700 font-semibold hover:underline"
               >
                  Open Tool →
               </Link>

            </div>

         </div>

         {/* Crop Section */}
         <div className="max-w-7xl mx-auto px-6 py-12">

            <div className="flex justify-between items-center mb-8">

               <h2 className="text-3xl font-bold text-slate-800">
                  My Crops
               </h2>

            </div>

            {crops.length === 0 ? (

               <div className="bg-white rounded-2xl p-12 text-center shadow-md">

                  <h2 className="text-2xl font-bold text-slate-700">
                     No Crops Added
                  </h2>

                  <p className="text-slate-500 mt-3">
                     Start selling by adding your first crop.
                  </p>

               </div>

            ) : (

               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                  {crops.map((crop) => (

                     <div
                        key={crop.id}
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all"
                     >

                        <img
   src={
      crop.imageUrl
         ? `http://localhost:8080/uploads/${crop.imageUrl}`
         : "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop"
   }
   alt={crop.cropName}
   className="h-56 w-full object-cover"
/>

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
                                 <span className="font-semibold">
                                    Price:
                                 </span>
                                 {" "}₹{crop.price}
                              </p>

                              <p>
                                 <span className="font-semibold">
                                    Quantity:
                                 </span>
                                 {" "}{crop.quantity} Kg
                              </p>

                              <p>
                                 <span className="font-semibold">
                                    Location:
                                 </span>
                                 {" "}{crop.location}
                              </p>

                           </div>

                           {/* Buttons */}
                           <div className="mt-6 flex gap-3">

                              <Link
                                 to={`/edit-crop/${crop.id}`}
                                 className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all"
                              >
                                 Edit
                              </Link>

                              <button
                                 onClick={() => handleDelete(crop.id)}
                                 className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition-all"
                              >
                                 Delete
                              </button>

                           </div>

                        </div>

                     </div>


                  ))}



                  <div className="grid gap-6">
  {orders.map((order) => (

    <div
      key={order.id}
      className="bg-white p-6 rounded-xl shadow"
    >

      <h2 className="text-xl font-bold">
        Order #{order.id}
      </h2>

      <p>
        Buyer: {order.buyer?.fullName}
      </p>

      <p>
        Crop: {order.crop?.cropName}
      </p>

      <p>
        Quantity: {order.quantity}
      </p>

      <p>
        Total Price: ₹{order.totalPrice}
      </p>

      <p>
        Status:
        <span className="font-bold ml-2">
          {order.status}
        </span>
      </p>

      <div className="flex gap-3 mt-4">

       <button
  onClick={() => updateStatus(order.id, "CONFIRMED")}
  className="bg-blue-600 text-white px-4 py-2 rounded"
>
  Accept Order
</button>

<button
  onClick={() => updateStatus(order.id, "SHIPPED")}
  className="bg-yellow-600 text-white px-4 py-2 rounded"
>
  Ship Order
</button>

<button
  onClick={() => updateStatus(order.id, "DELIVERED")}
  className="bg-green-600 text-white px-4 py-2 rounded"
>
  Delivered
</button>

      </div>

    </div>

  ))}
</div>

               </div>

            )}

         </div>

      </div>
   );
}
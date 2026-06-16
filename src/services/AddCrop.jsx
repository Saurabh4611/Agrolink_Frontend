import React, { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function AddCrop() {

   const navigate = useNavigate();
   

   const [formData, setFormData] = useState({

      cropName: "",
      description: "",
      category: "",
      price: "",
      quantity: "",
      location: "",
      imageUrl: "",
     farmerId: Number(localStorage.getItem("userId")),
   });

   

  const handleChange = (e) => {

   const { name, value, files } = e.target;

   setFormData({
      ...formData,
      [name]: files ? files[0] : value,
   });
};

   const handleSubmit = async (e) => {

   e.preventDefault();

   try {

      const data = new FormData();

      data.append("cropName", formData.cropName);
      data.append("description", formData.description);
      data.append("category", formData.category);
      data.append("price", formData.price);
      data.append("quantity", formData.quantity);
      data.append("location", formData.location);
      data.append("farmerId", formData.farmerId);

      data.append("image", formData.imageUrl);

      await API.post("/crops/add", data, {
         headers: {
            "Content-Type": "multipart/form-data",
         },
      });

      alert("Crop Added Successfully");

      navigate("/farmer-dashboard");

   } catch (error) {

      console.log(error);
      alert("Failed To Add Crop");
   }
};


   
   return (

      <div className="min-h-screen bg-green-50">

         <Navbar />

         {/* Header */}
         <div className="bg-green-700 text-white py-12 text-center">

            <h1 className="text-4xl font-bold">
               Add New Crop
            </h1>

            <p className="mt-3 text-green-100">
               Sell your crops directly in marketplace
            </p>

         </div>

         {/* Form */}
         <div className="max-w-3xl mx-auto px-6 py-12">

            <div className="bg-white rounded-2xl shadow-xl p-8">

               <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
               >

                  {/* Crop Name */}
                  <div>

                     <label className="block mb-2 font-semibold text-slate-700">
                        Crop Name
                     </label>

                     <input
                        type="text"
                        name="cropName"
                        value={formData.cropName}
                        onChange={handleChange}
                        placeholder="Enter crop name"
                        required
                        className="w-full border border-slate-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
                     />

                  </div>

                  {/* Description */}
                  <div>

                     <label className="block mb-2 font-semibold text-slate-700">
                        Description
                     </label>

                     <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Write crop details..."
                        required
                        className="w-full border border-slate-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
                     />

                  </div>

                  {/* Category */}
                  <div>

                     <label className="block mb-2 font-semibold text-slate-700">
                        Category
                     </label>

                     <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="w-full border border-slate-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
                     >

                        <option value="">
                           Select Category
                        </option>

                        <option value="Vegetable">
                           Vegetable
                        </option>

                        <option value="Fruit">
                           Fruit
                        </option>

                        <option value="Grain">
                           Grain
                        </option>

                        <option value="Pulses">
                           Pulses
                        </option>

                     </select>

                  </div>

                  {/* Price & Quantity */}
                  <div className="grid md:grid-cols-2 gap-6">

                     <div>

                        <label className="block mb-2 font-semibold text-slate-700">
                           Price (₹)
                        </label>

                        <input
                           type="number"
                           name="price"
                           value={formData.price}
                           onChange={handleChange}
                           placeholder="Enter price"
                           required
                           className="w-full border border-slate-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
                        />

                     </div>

                     <div>

                        <label className="block mb-2 font-semibold text-slate-700">
                           Quantity (Kg)
                        </label>

                        <input
                           type="number"
                           name="quantity"
                           value={formData.quantity}
                           onChange={handleChange}
                           placeholder="Enter quantity"
                           required
                           className="w-full border border-slate-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
                        />

                     </div>

                  </div>

                  {/* Location */}
                  <div>

                     <label className="block mb-2 font-semibold text-slate-700">
                        Location
                     </label>

                     <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Enter location"
                        required
                        className="w-full border border-slate-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
                     />

                  </div>

                  {/* Image URL */}
                  <div>

                     <label className="block mb-2 font-semibold text-slate-700">
                        Image URL
                     </label>

                     <input
                        type="file"
                        name="imageUrl"
                        onChange={handleChange}
                        placeholder="Upload image Here"
                        className="w-full border border-slate-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
                     />

                  </div>

                  {/* Submit Button */}
                  <button
                     type="submit"
                     className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg transition-all"
                  >
                     Add Crop
                  </button>

               </form>

            </div>

         </div>

      </div>
   );
}
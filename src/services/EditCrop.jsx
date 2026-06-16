import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/axios";
import { useParams, useNavigate } from "react-router-dom";

const EditCrop = () => {

   const { cropId } = useParams();
   const navigate = useNavigate();

   const [formData, setFormData] = useState({
      cropName: "",
      description: "",
      category: "",
      price: "",
      quantity: "",
      location: "",
   });

   useEffect(() => {
      fetchCrop();
   }, []);

   const fetchCrop = async () => {
      try {

         const response = await API.get(`/crops/${cropId}`);

         setFormData({
            cropName: response.data.cropName,
            description: response.data.description,
            category: response.data.category,
            price: response.data.price,
            quantity: response.data.quantity,
            location: response.data.location,
         });

      } catch (error) {
         console.log(error);
      }
   };

   const handleChange = (e) => {

      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });

   };

   const handleSubmit = async (e) => {

      e.preventDefault();

      try {

         await API.put(`/crops/${cropId}`, formData);

         alert("Crop Updated Successfully");

         navigate("/farmer-dashboard");

      } catch (error) {

         console.log(error);
         alert("Update Failed");

      }
   };

   return (
      <div className="min-h-screen bg-green-50">

         <Navbar />

         <div className="bg-green-700 text-white py-10 text-center">
            <h1 className="text-4xl font-bold">
               Edit Crop
            </h1>
         </div>

         <div className="max-w-3xl mx-auto py-10 px-6">

            <div className="bg-white p-8 rounded-2xl shadow-lg">

               <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
               >

                  <input
                     type="text"
                     name="cropName"
                     value={formData.cropName}
                     onChange={handleChange}
                     placeholder="Crop Name"
                     className="w-full border p-4 rounded-xl"
                  />

                  <textarea
                     name="description"
                     value={formData.description}
                     onChange={handleChange}
                     rows="4"
                     placeholder="Description"
                     className="w-full border p-4 rounded-xl"
                  />

                  <select
                     name="category"
                     value={formData.category}
                     onChange={handleChange}
                     className="w-full border p-4 rounded-xl"
                  >
                     <option value="Vegetable">Vegetable</option>
                     <option value="Fruit">Fruit</option>
                     <option value="Grain">Grain</option>
                     <option value="Pulses">Pulses</option>
                  </select>

                  <input
                     type="number"
                     name="price"
                     value={formData.price}
                     onChange={handleChange}
                     placeholder="Price"
                     className="w-full border p-4 rounded-xl"
                  />

                  <input
                     type="number"
                     name="quantity"
                     value={formData.quantity}
                     onChange={handleChange}
                     placeholder="Quantity"
                     className="w-full border p-4 rounded-xl"
                  />

                  <input
                     type="text"
                     name="location"
                     value={formData.location}
                     onChange={handleChange}
                     placeholder="Location"
                     className="w-full border p-4 rounded-xl"
                  />

                  <button
                     type="submit"
                     className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold"
                  >
                     Update Crop
                  </button>

               </form>

            </div>

         </div>

      </div>
   );
};

export default EditCrop;
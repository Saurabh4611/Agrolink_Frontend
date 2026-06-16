import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/axios";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Heart,
  Truck,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function BuyerDashboard() {
  const [orders, setOrders] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchBuyerData();
  }, []);
const placeOrder = async (item) => {
  try {
    const buyerId = localStorage.getItem("userId");

    const orderData = {
      buyerId: buyerId,
      cropId: item.crop.id,
      quantity: item.quantity,
    };

    

    await API.post("/order/place", orderData);

    await API.delete(`/cart/remove/${item.id}`);

    alert("Order Placed Successfully");

    fetchBuyerData();

  } catch (error) {
    console.log(error);
    alert("Order Failed");
  }
};
const removeCart = async (item) => {
  try {
    const buyerId = localStorage.getItem("userId");

    const orderData = {
      buyerId: buyerId,
      cropId: item.crop.id,
      quantity: item.quantity,
    };

    await API.delete(`/cart/remove/${item.id}`);

    alert("Deleted Item Sucessfully");

    fetchBuyerData();

  } catch (error) {
    console.log(error);
    alert("Delete Failed");
  }
};


  const fetchBuyerData = async () => {
    try {
      const buyerId = localStorage.getItem("userId");
      

      // Orders
      const ordersResponse = await API.get(`/order/${buyerId}`);
      setOrders(ordersResponse.data || []);

      // Cart Items
      const cartResponse = await API.get(`/cart/${buyerId}`);
      setCartItems(cartResponse.data || []);

      // User Info (change endpoint if different)
      const userResponse = await API.get(`/users/${buyerId}`);
     
      setUserData(userResponse.data);

      setLoading(false);
      console.log(ordersResponse.data);
    } catch (error) {
      console.log("Error fetching data:", error);
      setLoading(false);
    }
  };

  const totalOrders = orders.length;

  const totalSpent = orders.reduce(
    (sum, order) => sum + (order.totalPrice || 0),
    0
  );

  const activeOrders = orders.filter(
  (order) =>
    order.status === "PENDING" ||
    order.status === "CONFIRMED" ||
    order.status === "SHIPPED"
).length;

  const completedOrders = orders.filter(
    (order) => order.status === "DELIVERED"
  ).length;

  const getStatusColor = (status) => {
  switch (status) {
    case "PENDING":
      return "bg-yellow-100 text-yellow-800";

    case "CONFIRMED":
      return "bg-blue-100 text-blue-800";

    case "SHIPPED":
      return "bg-purple-100 text-purple-800";

    case "DELIVERED":
      return "bg-green-100 text-green-800";

    case "CANCELLED":
      return "bg-red-100 text-red-800";

    default:
      return "bg-gray-100 text-gray-800";
  }
};

  const getStatusIcon = (status) => {
  switch (status) {
    case "PENDING":
      return <Clock className="w-4 h-4 mr-1" />;

    case "CONFIRMED":
      return <CheckCircle className="w-4 h-4 mr-1" />;

    case "SHIPPED":
      return <Truck className="w-4 h-4 mr-1" />;

    case "DELIVERED":
      return <CheckCircle className="w-4 h-4 mr-1" />;

    case "CANCELLED":
      return <span className="mr-1">❌</span>;

    default:
      return null;
  }
};

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />

      <div className="bg-green-700 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">
  Welcome, {userData?.fullName || "Buyer"}!
</h1>

          <p className="text-green-100 mt-2">
            Track your orders and discover fresh produce
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 mt-10 grid md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Total Orders</h3>
          <p className="text-3xl font-bold">{totalOrders}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Total Spent</h3>
          <p className="text-3xl font-bold">₹{totalSpent}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Active Orders</h3>
          <p className="text-3xl font-bold">{activeOrders}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Completed</h3>
          <p className="text-3xl font-bold">{completedOrders}</p>
        </div>
      </div>

      {/* CART SECTION */}
<div className="max-w-7xl mx-auto px-6 py-10">
  <h2 className="text-3xl font-bold mb-6">
    My Cart
  </h2>

  {cartItems.length === 0 ? (
    <div className="bg-white p-6 rounded-xl shadow">
      No crops added to cart.
    </div>
  ) : (
    <div className="grid md:grid-cols-3 gap-6">

      {cartItems.map((item) => (

        <div
          key={item.id}
          className="bg-white p-5 rounded-xl shadow"
        >

          <img
            src={
              item.crop?.imageUrl
                ? `http://localhost:8080/uploads/${item.crop.imageUrl}`
                : "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop"
            }
            alt={item.crop?.cropName}
            className="h-48 w-full object-cover rounded-lg mb-4"
          />

          <h3 className="text-xl font-bold">
            {item.crop?.cropName}
          </h3>

          <p className="mt-2">
            <span className="font-semibold">
              Price:
            </span>{" "}
            ₹{item.crop?.price}
          </p>

          <p>
            <span className="font-semibold">
              Quantity:
            </span>{" "}
            {item.quantity}
          </p>

          <p>
            <span className="font-semibold">
              Farmer:
            </span>{" "}
            {item.crop?.farmer?.fullName}
          </p>

          <p>
            <span className="font-semibold">
              Location:
            </span>{" "}
            {item.crop?.location}
          </p>

          <button
            onClick={() => placeOrder(item)}
            className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-all"
          >
            Place Order
          </button>
           <button
            onClick={() => removeCart(item)}
            className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-all"
          >
            Remove 
          </button>

        </div>

      ))}

    </div>
  )}
</div>
     

      {orders.map((order) => (

  <div
    key={order.id}
    className="bg-white rounded-xl p-5 shadow mb-4"
  >

    <div className="flex justify-between items-center mb-4">

      <h3 className="font-bold text-lg">
        Order #{order.id}
      </h3>

      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}
      >
        {getStatusIcon(order.status)}
        {order.status}
      </span>

    </div>

    <div className="grid md:grid-cols-2 gap-4">

      <div>
        <p>
          <strong>Crop:</strong> {order.crop?.cropName}
        </p>

        <p>
          <strong>Quantity:</strong> {order.quantity} Kg
        </p>

        <p>
          <strong>Price:</strong> ₹{order.totalPrice}
        </p>
      </div>

      <div>
        <p>
          <strong>Farmer:</strong>{" "}
          {order.crop?.farmer?.fullName}
        </p>

        <p>
          <strong>Location:</strong>{" "}
          {order.crop?.location}
        </p>
      </div>

    </div>

  </div>

))}
    </div>
  );
}
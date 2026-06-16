import React from "react";
import {
  RefreshCw,
  Leaf,
  Truck,
  ShieldCheck,
  Star,
  Sprout,
  ShoppingBag,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";


const HeroBanner = () => {
  const navigate = useNavigate();

  const stats = [
    { number: "14k+", label: "Products" },
    { number: "50k+", label: "Happy Customers" },
    { number: "10+", label: "Store Locations" },
    { number: "99%", label: "Fresh Delivery" },
  ];

  const features = [
    {
      icon: <RefreshCw size={36} />,
      title: "Fresh from Farm",
      description:
        "Directly sourced from local farmers with same-day freshness.",
      bg: "from-green-500 to-green-700",
    },
    {
      icon: <Leaf size={36} />,
      title: "100% Organic",
      description:
        "Naturally grown produce without harmful chemicals or pesticides.",
      bg: "from-slate-700 to-slate-900",
    },
    {
      icon: <Truck size={36} />,
      title: "Fast Delivery",
      description:
        "Lightning-fast delivery to your doorstep with live tracking.",
      bg: "from-orange-500 to-red-500",
    },
  ];

  const categories = [
    "Vegetables",
    "Fruits",
    "Grains",
    "Organic Seeds",
    "Dairy",
    "Farm Fresh",
  ];

  return (
    <div className="bg-[#f7fff4] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-20 py-20 bg-gradient-to-br from-yellow-300 via-yellow-200 to-green-100">

        {/* Background Blur */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-400/30 rounded-full blur-3xl"></div>

        {/* LEFT */}
        <div className="flex-1 z-10">

          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md px-5 py-2 rounded-full shadow-md mb-6">
            <Sprout className="text-green-700" size={18} />
            <span className="font-semibold text-green-800">
              India’s Trusted Organic Marketplace
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight text-slate-900">
            Fresh <span className="text-green-700">Organic</span> Food
            Delivered to Your Doorstep
          </h1>

          <p className="mt-8 text-xl text-slate-700 max-w-2xl leading-relaxed">
            AgroLink connects farmers directly with customers, ensuring
            farm-fresh vegetables, fruits, grains, and organic products at
            affordable prices.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <button
              onClick={() => navigate("/marketplace")}
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:scale-105 transition-all"
            >
              Explore Marketplace
            </button>

            <button
              onClick={() => navigate("/register")}
              className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:scale-105 transition-all"
            >
              Become Seller
            </button>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition-all"
              >
                <h2 className="text-4xl font-black text-green-700">
                  {item.number}
                </h2>
                <p className="text-slate-700 mt-2 font-medium">
                  {item.label}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex justify-center mt-16 lg:mt-0 z-10">

          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop"
            alt="Organic Vegetables"
            className="w-full max-w-2xl rounded-[40px] shadow-2xl hover:scale-105 transition-all duration-500"
          />

        </div>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-8 px-6 lg:px-20 py-20">

        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${feature.bg} text-white rounded-[32px] p-10 shadow-2xl hover:-translate-y-3 transition-all`}
          >
            <div className="mb-6">{feature.icon}</div>

            <h2 className="text-3xl font-bold mb-4">
              {feature.title}
            </h2>

            <p className="text-lg opacity-90 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}

      </section>

      {/* CATEGORY SECTION */}
      <section className="px-6 lg:px-20 py-20 bg-white">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-black text-slate-900">
            Shop by Categories
          </h2>

          <p className="text-slate-600 text-xl mt-4">
            Explore our wide range of fresh and organic products
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-green-50 hover:bg-green-700 hover:text-white rounded-3xl p-8 text-center shadow-lg transition-all cursor-pointer"
            >
              <ShoppingBag className="mx-auto mb-4" size={40} />
              <h3 className="font-bold text-lg">{category}</h3>
            </div>
          ))}

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 lg:px-20 py-24 bg-gradient-to-r from-green-700 to-green-900 text-white">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-5xl font-black leading-tight">
              Why Customers Trust AgroLink
            </h2>

            <p className="mt-8 text-xl text-green-100 leading-relaxed">
              We ensure quality, affordability, sustainability, and direct
              farmer support with every purchase.
            </p>

            <div className="space-y-6 mt-10">

              <div className="flex items-center gap-4">
                <ShieldCheck size={30} />
                <span className="text-xl">
                  Verified Organic Products
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Truck size={30} />
                <span className="text-xl">
                  Fast & Secure Delivery
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Users size={30} />
                <span className="text-xl">
                  Supporting Local Farmers
                </span>
              </div>

            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop"
              alt="Farm"
              className="rounded-[40px] shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 lg:px-20 py-24 bg-[#f7fff4]">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-black text-slate-900">
            What Customers Say
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-[32px] p-10 shadow-xl hover:-translate-y-2 transition-all"
            >

              <div className="flex text-yellow-500 mb-5">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>

              <p className="text-slate-700 text-lg leading-relaxed">
                “AgroLink delivers the freshest vegetables I’ve ever bought
                online. Amazing quality and service.”
              </p>

              <div className="mt-6">
                <h4 className="font-bold text-xl">
                  Happy Customer
                </h4>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 lg:px-20 py-24 bg-slate-900 text-white text-center">

        <h2 className="text-5xl font-black leading-tight">
          Start Your Organic Journey Today
        </h2>

        <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
          Join thousands of customers and farmers building a healthier and
          greener future together.
        </p>

        <button
          onClick={() => navigate("/marketplace")}
          className="mt-10 bg-green-600 hover:bg-green-700 px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl hover:scale-105 transition-all"
        >
          Shop Now
        </button>

      </section>

    </div>
  );
};

export default HeroBanner;
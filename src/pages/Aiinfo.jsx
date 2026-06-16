import React from "react";
import Navbar from "../components/Navbar";
import Aiinfoimage from "../image/Aiinfopage.png";
import {
  ScanLine,
  Leaf,
  ShieldCheck,
  BrainCircuit,
  Camera,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Aiinfo = () => {

  const navigate = useNavigate();

  const features = [
    {
      icon: <ScanLine size={40} />,
      title: "Instant Disease Detection",
      desc: "Upload a crop leaf image and get fast AI-powered disease analysis within seconds.",
    },
    {
      icon: <Leaf size={40} />,
      title: "Healthy Crop Monitoring",
      desc: "Monitor the health of your crops and identify issues before they spread.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Accurate AI Predictions",
      desc: "Advanced machine learning models provide reliable and accurate disease detection.",
    },
  ];

  return (
    <div className="bg-[#f7fff4] min-h-screen overflow-hidden">

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative px-6 lg:px-20 py-20 bg-gradient-to-br from-green-100 via-white to-yellow-100">

        {/* Background Blur Effects */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-300/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-300/30 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT CONTENT */}
          <div>

            <div className="inline-flex items-center gap-3 bg-white shadow-lg px-5 py-3 rounded-full mb-8">
              <BrainCircuit className="text-green-700" size={22} />
              <span className="font-semibold text-green-700">
                AI Powered Smart Farming
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900">
              AI Crop <span className="text-green-700">Disease</span> Detection
            </h1>

            <p className="mt-8 text-xl text-slate-700 leading-relaxed">
              AgroLink’s AI Disease Detection system helps farmers identify
              crop diseases quickly and accurately using advanced Artificial
              Intelligence technology.
            </p>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Simply upload an image of your crop leaf and our AI model will
              analyze the image, detect possible diseases, and help you take
              early action to protect your crops and improve productivity.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-10">

              <button
                onClick={() => navigate("/Aiupload")}
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all"
              >
                Detect Disease
              </button>

              <button
                onClick={() => navigate("/marketplace")}
                className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all"
              >
                Explore Marketplace
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">

            <img
              src={Aiinfoimage}
              alt="AI Disease Detection"
              className="rounded-[40px] shadow-2xl w-full max-w-2xl hover:scale-105 transition-all duration-500"
            />

          </div>

        </div>

      </section>

      {/* FEATURES SECTION */}
      <section className="px-6 lg:px-20 py-24">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-black text-slate-900">
            Smart Features for Farmers
          </h2>

          <p className="text-xl text-slate-600 mt-5 max-w-3xl mx-auto">
            Empowering modern agriculture with intelligent technology and
            real-time crop analysis.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-[35px] p-10 shadow-xl hover:-translate-y-3 transition-all"
            >

              <div className="bg-green-100 text-green-700 w-20 h-20 rounded-3xl flex items-center justify-center mb-8">
                {feature.icon}
              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-5">
                {feature.title}
              </h3>

              <p className="text-slate-600 text-lg leading-relaxed">
                {feature.desc}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white px-6 lg:px-20 py-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-black">
              How It Works
            </h2>

            <p className="text-green-100 text-xl mt-5">
              Detect crop diseases in just 3 simple steps
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {/* STEP 1 */}
            <div className="bg-white/10 backdrop-blur-md rounded-[35px] p-10 text-center border border-white/20">

              <div className="w-24 h-24 bg-white text-green-700 rounded-full flex items-center justify-center mx-auto mb-8">
                <Camera size={42} />
              </div>

              <h3 className="text-3xl font-bold mb-5">
                Upload Image
              </h3>

              <p className="text-green-100 text-lg leading-relaxed">
                Capture or upload a clear image of the affected crop leaf.
              </p>

            </div>

            {/* STEP 2 */}
            <div className="bg-white/10 backdrop-blur-md rounded-[35px] p-10 text-center border border-white/20">

              <div className="w-24 h-24 bg-white text-green-700 rounded-full flex items-center justify-center mx-auto mb-8">
                <BrainCircuit size={42} />
              </div>

              <h3 className="text-3xl font-bold mb-5">
                AI Analysis
              </h3>

              <p className="text-green-100 text-lg leading-relaxed">
                Our intelligent AI system scans and analyzes the crop image.
              </p>

            </div>

            {/* STEP 3 */}
            <div className="bg-white/10 backdrop-blur-md rounded-[35px] p-10 text-center border border-white/20">

              <div className="w-24 h-24 bg-white text-green-700 rounded-full flex items-center justify-center mx-auto mb-8">
                <Sparkles size={42} />
              </div>

              <h3 className="text-3xl font-bold mb-5">
                Get Results
              </h3>

              <p className="text-green-100 text-lg leading-relaxed">
                Receive disease prediction and take preventive action instantly.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="px-6 lg:px-20 py-24 text-center bg-white">

        <h2 className="text-5xl font-black text-slate-900 leading-tight">
          Protect Your Crops with AI Technology
        </h2>

        <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto leading-relaxed">
          Detect diseases early, improve crop quality, and maximize your farm
          productivity using AgroLink’s intelligent AI solutions.
        </p>

        <button
          onClick={() => navigate("/detect-disease")}
          className="mt-10 bg-green-700 hover:bg-green-800 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all"
        >
          Start Detection
        </button>

      </section>

    </div>
  );
};

export default Aiinfo;
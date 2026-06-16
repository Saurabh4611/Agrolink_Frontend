import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroBanner from "../layouts/HeroBanner";

export default function Home() {
  return (
    <div className="bg-green-50 min-h-screen">

    <Navbar/>
    <HeroBanner/>

    </div>
  );
}
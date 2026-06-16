import React, { useState } from "react";
import axios from "axios";
import { Upload, Leaf, AlertCircle } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Aiupload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setResult(null);
    }
  };

  const detectDisease = async () => {
    if (!file) {
      alert("Please select an image");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        "https://agrolink-backend-k4eo.onrender.com/api/disease/detect",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Disease detection failed");
    } finally {
      setLoading(false);
    }
  };

  return (
      <div>
        <Navbar/>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 px-6 py-10">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-5xl font-black text-green-700">
            AI Crop Disease Detection
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Upload a crop leaf image and get instant AI-powered disease analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Upload Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">

            <div className="flex items-center gap-3 mb-6">
              <Upload className="text-green-700" />
              <h2 className="text-2xl font-bold">
                Upload Image
              </h2>
            </div>

            <label className="border-2 border-dashed border-green-300 rounded-3xl p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-green-50 transition">

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleFileChange}
              />

              <Upload size={50} className="text-green-600 mb-4" />

              <p className="font-semibold text-gray-700">
                Click to upload crop image
              </p>

              <p className="text-sm text-gray-500 mt-2">
                JPG, PNG supported
              </p>

            </label>

            <button
              onClick={detectDisease}
              disabled={loading}
              className="w-full mt-6 bg-green-700 hover:bg-green-800 text-white py-4 rounded-2xl font-bold text-lg transition"
            >
              {loading ? "Analyzing..." : "Detect Disease"}
            </button>

          </div>

          {/* Preview */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Image Preview
            </h2>

            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="rounded-2xl w-full h-80 object-cover"
              />
            ) : (
              <div className="h-80 flex items-center justify-center bg-gray-100 rounded-2xl">
                <p className="text-gray-500">
                  No image selected
                </p>
              </div>
            )}

          </div>

        </div>

        {/* Result Section */}
        {result && (
          <div className="mt-10 bg-white rounded-3xl shadow-2xl p-8">

            <div className="flex items-center gap-3 mb-6">
              <Leaf className="text-green-700" />
              <h2 className="text-3xl font-bold">
                Detection Result
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="font-bold text-lg text-green-700">
                  Disease Name
                </h3>

                <p className="text-2xl mt-2">
                  {result.disease}
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="font-bold text-lg text-blue-700">
                  Confidence
                </h3>

                <p className="text-2xl mt-2">
                  {result.confidence}%
                </p>
              </div>

            </div>

            {result.solution && (
              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl">

                <div className="flex gap-2 items-center">
                  <AlertCircle className="text-yellow-600" />
                  <h3 className="font-bold">
                    Recommendation
                  </h3>
                </div>

                <p className="mt-3 text-gray-700">
                  {result.solution}
                </p>

              </div>
            )}
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
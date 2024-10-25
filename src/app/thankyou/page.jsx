"use client"; 
import React from "react";
import { useRouter } from "next/navigation";
import SIMG from "../../../public/checked.png";
import logo from "../../../public/map.png"; 
import Image from "next/image";
import Footer from "../components/Footer"; 

export default function ThankYouPage() {
  const router = useRouter(); 
  const goBack = () => {
    document.cookie = "hasSeenPopup=true; path=/";
    router.push("/"); 
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-1 z-50 flex justify-center items-center">
      <Image
            src={logo}
            alt="Logo"
            width={147}
            height={55}
            priority={true}
          />
        </div>
      <div className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="bg-white p-10 rounded-lg shadow-2xl text-center w-4/5 max-w-2xl">
          <div className="flex justify-center mb-6">
            <Image
              quality={100}
              src={SIMG}
              width={80}
              height={75}
              alt="Success"
            />
          </div>
          <h2 className="text-4xl font-bold mb-4">Thank you!</h2>
          <p className="text-lg mb-6">Our team will reach out to you soon.</p>

          <button
            onClick={goBack}
            className="bg-gray-700 text-white py-3 px-6 rounded hover:bg-gray-800 text-xl mt-4"
          >
            Back To Homepage
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

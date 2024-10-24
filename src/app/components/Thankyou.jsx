"use client";
import React from 'react';
import SIMG from "../../../public/checked.png";
import Image from "next/image";
export default function ThankYouPopup({ closePopup }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
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
          onClick={closePopup}
          className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800 text-xl"
        >
          Close
        </button>
      </div>
    </div>
  );
}

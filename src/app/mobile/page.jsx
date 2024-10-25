"use client";
import Hero from "../components/Hero";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  function getCookieValue(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split("; "); 
    for (let cookie of cookies) {
      const [key, value] = cookie.split("="); 
      if (key === name) {
        return decodeURIComponent(value); 
      }
    }
    return null; 
  }
  useEffect(() => {
    const hasSeenPopup = getCookieValue("hasSeenPopup");
    if(!hasSeenPopup){
      setTimeout(() => {
        router.push("/mobile-popup");
      }, 5000);
    }
  }, [router]);
  return (
    <div>
      <main className="mx-auto">
        <Hero />
        <Form  />
        <Gallery />
        <Footer />
      </main>
    </div>
  );
}

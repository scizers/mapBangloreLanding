"use client";
import Hero from "../components/Hero";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import ThankYouPopup from "../components/Thankyou";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [isThankYouVisible, setIsThankYouVisible] = useState(false);
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
  const showThankYouPopup = () => {
    setIsThankYouVisible(true);
  };
  const closeThankYouPopup = () => {
    setIsThankYouVisible(false);
  };
  return (
    <div>
      <main className="mx-auto">
        <Hero />
        <Form showThankYouPopup={showThankYouPopup} />
        <Gallery />
        {isThankYouVisible && <ThankYouPopup closePopup={closeThankYouPopup} />}
        <Footer />
      </main>
    </div>
  );
}

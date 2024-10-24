"use client";
import Hero from "../components/Hero";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import ThankYouPopup from "../components/Thankyou";
import { useState } from "react";
export default function Home() {
  const [isThankYouVisible, setIsThankYouVisible] = useState(false);
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

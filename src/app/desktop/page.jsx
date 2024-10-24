"use client"; // Add this at the top
import Footer from "../components/Footer";
import DesktopHero from "../components/DesktopHero";
import DesktopGallery from "../components/DesktopGallery";
import DesktopFormSection from "../components/DesktopFormSection";
import DesktopPopup from "../components/DesktopPopup";
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
        <DesktopHero showThankYouPopup={showThankYouPopup}/>
        <DesktopGallery />
        <DesktopFormSection showThankYouPopup={showThankYouPopup}/>
        {isThankYouVisible && <ThankYouPopup closePopup={closeThankYouPopup} />}

        <Footer />
      </main>
    </div>
  );
}

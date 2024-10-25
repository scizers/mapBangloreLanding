"use client"; // Add this at the top
import Footer from "../components/Footer";
import DesktopHero from "../components/DesktopHero";
import DesktopGallery from "../components/DesktopGallery";
import DesktopFormSection from "../components/DesktopFormSection";
import { useEffect  } from "react";
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
        router.push("/desktop-popup");
      }, 5000);
    }
  }, [router]);
  return (
    <div>
      <main className="mx-auto">
        <DesktopHero />
        <DesktopGallery />
        <DesktopFormSection />
        <Footer />
      </main>
    </div>
  );
}

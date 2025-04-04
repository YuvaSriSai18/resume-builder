import FeaturesGrid from "./components/Home_Components/FeaturesGrid";
import Footer from "./components/Home_Components/Footer";
import HeroSection from "./components/Home_Components/HeroSection";
import StepsToBuild from "./components/Home_Components/StepsToBuild";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] flex flex-col items-center">
      {/* <button className="bg-blue-500 px-5 py-3 mt-3 rounded-lg text-white text-md">Create Resume</button> */}
      <HeroSection />
      <FeaturesGrid />
      <StepsToBuild />
      <Footer />
    </main>
  );
}

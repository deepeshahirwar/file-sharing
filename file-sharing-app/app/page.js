import Image from "next/image";
import Header from "./_components/Header"; 
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";
import Contact from "./_components/Contact";
import Features from "./_components/Feature";
import Pricing from "./_components/Pricing";

export default function Home() {
  return (
    <> 
    <div >
      <Header/> 
      <Hero/>
      <Features/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
    </>
        
  );
}
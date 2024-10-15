import Image from "next/image";
import Header from "./_components/Header"; 
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";
import Contact from "./_components/Contact";
import Features from "./_components/Feature";
import Pricing from "./_components/Pricing";
import About_us from "./_components/About-us";

export default function Home() {
  return (
    <> 
    <div >
      <Header/> 
      <Hero/>
      <Features/>
      <Pricing/>
      <About_us/>
      <Contact/>
      <Footer/>
    </div>
    </>
        
  );
}
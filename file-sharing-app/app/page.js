import Image from "next/image";
import Header from "./_components/Header"; 
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <> 
    <div >
      <Header/> 
      <Hero/>
      <Contact/>
      <Footer/>
    </div>
    </>
        
  );
}
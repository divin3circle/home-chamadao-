import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Features from "../components/Features";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import { useState } from "react";
import JoinModal from "../components/JoinModal";

function Landing() {
  const [joinModal, setJoinModal] = useState(false);
  return (
    <div className="overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-center items-center">
        <Navbar />
      </div>
      <section>
        <Hero setJoinModal={setJoinModal} />
      </section>
      <img src="/corner.png" alt="Corner" className="absolute top-0 right-0" />
      <About />
      <Features />
      <CTA />
      <FAQ />
      <Footer />
      {joinModal && (
        <JoinModal joinModal={joinModal} setJoinModal={setJoinModal} />
      )}
    </div>
  );
}

export default Landing;

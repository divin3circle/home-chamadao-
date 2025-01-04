import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import JoinModal from "../components/JoinModal";
import InvestModal from "../components/InvestModal";

function Contact() {
  return (
    <div className="overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-center items-center">
        <Navbar />
      </div>
      <Footer />
      <JoinModal />
      <InvestModal />
    </div>
  );
}

export default Contact;

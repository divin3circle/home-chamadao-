import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import JoinModal from "../components/JoinModal";
import InvestModal from "../components/InvestModal";
import Form from "../components/Form";
import FAQ from "../components/FAQ";

function Contact() {
  return (
    <div className="overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-center items-center">
        <Navbar />
      </div>
      <Form />
      <FAQ />
      <Footer />
      <JoinModal />
      <InvestModal />
    </div>
  );
}

export default Contact;

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div className="overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-center items-center">
        <Navbar />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

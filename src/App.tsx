
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import TechnologySection from "./components/technologySection";

function App() {
  

  




  return (
    <>
      <Navbar />
      <Hero />
       <Suspense fallback={<p>Loading Cards...</p>}>
        <TechnologySection />
      </Suspense>

      
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2000} newestOnTop />
    </>
  );
}

export default App;

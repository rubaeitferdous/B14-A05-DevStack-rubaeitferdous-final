
import { Suspense } from "react";
import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import TechnologySection from "./components/technologySection";

function App() {
  

  




  return (
    <>
      <Navbar />
      <Hero />
       <Suspense fallback={<p>Loading Cards...</p>}>
        <TechnologySection />
      </Suspense>
    </>
  );
}

export default App;

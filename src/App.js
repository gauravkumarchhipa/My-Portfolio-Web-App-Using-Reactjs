import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Timeline from "./components/Timeline";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Work/>
      <Timeline/>
      <Services/>
      <Testimonial/>
      <Contact/>
      <Toaster/>
      <Footer/>
    </>
  );
}

export default App;

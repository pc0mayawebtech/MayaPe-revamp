import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

function App() {
  return (
      <Router>
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} /> */}
          </Routes>
        </main>
        <Footer />
      </Router>
  );
}

export default App;

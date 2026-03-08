import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Help from "./pages/Help";
import AccountDelete from "./pages/AccountDelete";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Product from "./pages/Product";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Status from "./pages/Status";
import { LanguageProvider } from "./i18n";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/help" element={<Help />} />
            <Route path="/account-delete" element={<AccountDelete />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/product" element={<Product />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/status" element={<Status />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;

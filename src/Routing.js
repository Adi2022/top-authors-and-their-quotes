import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Feedback from "./Components/Feedback";
import LoginForm from "./Components/LoginForm";
import MotivationalSpeaker from "./Components/MotivationalSpeaker";
import Header from "./Layouts/Header";
import Contact from "./Components/Contact";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/motivation" element={<MotivationalSpeaker />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

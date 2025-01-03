import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./common/Navbar";
import Aboutus from "./pages/contents/Aboutus";
import Terms from "./pages/contents/Terms";


const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/terms" element={<Terms />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;

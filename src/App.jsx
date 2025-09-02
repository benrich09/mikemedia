import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Design from './pages/Design';
import Sales from './pages/Sales';
import Contact from './components/Contact';
import News from './pages/News';
export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/design" element={<Design />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/news" element={<News />} />
            </Routes>
            <Footer />
        </Router>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-black text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">MIKE360</h1>
            <nav className="space-x-4">
                <Link to="/">Home</Link>
                <Link to="/news">News</Link>
                <Link to="/design">Design</Link>
                <Link to="/sales">Sales</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

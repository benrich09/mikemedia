import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/news', label: 'News' },
        { path: '/design', label: 'Design' },
        { path: '/sales', label: 'Sales' },
        { path: '/contact', label: 'Contact' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gradient-to-r from-gray-900 to-black text-white p-4 md:p-6 sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-xl md:text-3xl font-bold font-['Poppins'] tracking-tight">
                    <span className="text-blue-500">MIKE</span>360
                </h1>

                {/* Hamburger Button for Mobile */}
                <button
                    className="md:hidden text-gray-200 hover:text-blue-500 focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className="font-['Inter'] text-base font-medium text-gray-200 hover:text-blue-500 transition-colors duration-300"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <nav className="flex flex-col space-y-4 mt-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className="font-['Inter'] text-base font-medium text-gray-200 hover:text-blue-500 transition-colors duration-300 py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
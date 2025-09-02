import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/news', label: 'News' },
        { path: '/design', label: 'Design' },
        { path: '/sales', label: 'Sales' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <header className="bg-gradient-to-r from-gray-900 to-black text-white p-6 sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl md:text-3xl font-bold font-['Poppins'] tracking-tight">
                    <span className="text-blue-500">MIKE</span>360
                </h1>
                <nav className="flex space-x-6 md:space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className="nav-link font-['Inter'] text-sm md:text-base font-medium text-gray-200 hover:text-blue-500 transition-colors duration-300"
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
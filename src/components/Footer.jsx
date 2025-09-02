import React from 'react';

const Footer = () => {
    const footerLinks = [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Support', href: '#' },
        { label: 'About', href: '#' },
    ];

    const socialLinks = [
        { icon: 'fab fa-twitter', href: '#' },
        { icon: 'fab fa-facebook', href: '#' },
        { icon: 'fab fa-instagram', href: '#' },
        { icon: 'fab fa-linkedin', href: '#' },
    ];

    return (
        <footer className="bg-gradient-to-r from-gray-900 to-black text-gray-300 py-12 mt-12">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand and Description */}
                <div>
                    <h2 className="text-2xl font-bold font-['Poppins'] text-white">
                        <span className="text-blue-500">MIKE</span>360
                    </h2>
                    <p className="mt-2 text-sm font-['Inter']">
                        Empowering innovation with cutting-edge solutions. Stay connected with MIKE360 for the latest updates and services.
                    </p>
                </div>
                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold font-['Poppins'] text-white mb-4">Quick Links</h3>
                    <div className="flex flex-col space-y-2">
                        {footerLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="font-['Inter'] text-sm hover:text-blue-500 transition-colors duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
                {/* Newsletter and Social */}
                <div>
                    <h3 className="text-lg font-semibold font-['Poppins'] text-white mb-4">Stay Connected</h3>
                    <div className="flex space-x-4 mb-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.icon}
                                href={social.href}
                                className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                            >
                                <i className={social.icon}></i>
                            </a>
                        ))}
                    </div>
                    <div>
                        <p className="text-sm font-['Inter'] mb-2">Subscribe to our newsletter:</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded-l-md bg-gray-800 text-white border-none focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            />
                            <button className="px-4 py-2 bg-blue-400 text-white rounded-r-md hover:bg-blue-600 transition">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-6 text-center">
                <p className="text-sm font-['Inter']">
                    &copy; {new Date().getFullYear()} Mike360. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
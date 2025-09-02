import React from 'react';

export default function Sales() {
    const products = [
        { name: 'Broadcast Mic', price: '$120', desc: 'High-quality microphone for studio-grade audio.' },
        { name: 'Studio Light', price: '$80', desc: 'LED lighting for crisp, professional visuals.' },
        { name: 'Custom Merch', price: '$25', desc: 'Branded apparel and accessories.' },
        { name: 'Headphone Set', price: '$150', desc: 'Immersive audio for professional monitoring.' },
        { name: 'Camera Rig', price: '$200', desc: 'Sturdy rig for stable video production.' },
        { name: 'Editing Software', price: '$99', desc: 'Powerful tools for seamless content creation.' },
    ];

    return (
        <section className="max-w-6xl mx-auto p-6">
            <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
                Shop Our Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, idx) => (
                    <div
                        key={idx}
                        className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                    >
                        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                        <p className="text-gray-500 mb-2">{product.desc}</p>
                        <span className="text-blue-600 font-bold block mb-4">{product.price}</span>
                        <button className="text-sm text-blue-600 font-medium hover:underline">
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
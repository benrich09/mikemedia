import React from 'react';

export default function Product() {
    const products = [
        {
            name: 'Broadcast Microphone',
            price: '$129',
            description: 'Studio-grade mic for crystal-clear audio.',
            image: 'https://via.placeholder.com/300x200?text=Mic',
        },
        {
            name: 'LED Studio Light',
            price: '$89',
            description: 'Adjustable lighting for perfect video quality.',
            image: 'https://via.placeholder.com/300x200?text=Light',
        },
        {
            name: 'Custom Merch Hoodie',
            price: '$49',
            description: 'Branded hoodie for your fans and crew.',
            image: 'https://via.placeholder.com/300x200?text=Hoodie',
        },
        {
            name: 'Streaming Kit',
            price: '$249',
            description: 'All-in-one gear for professional live streaming.',
            image: 'https://via.placeholder.com/300x200?text=Kit',
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-4xl font-bold text-center mb-10">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                    >
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                            <p className="text-gray-600 mb-2">{product.description}</p>
                            <span className="text-blue-600 font-bold">{product.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

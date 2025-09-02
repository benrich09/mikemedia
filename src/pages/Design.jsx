import React from 'react';

export default function Design() {
    const services = [
        {
            title: 'Brand Identity',
            subtitle: 'Define Your Vision',
            desc: 'Crafting logos, colors, and typography that define your brand.',
            icon: '🎨'
        },
        {
            title: 'Motion Graphics',
            subtitle: 'Captivate Audiences',
            desc: 'Dynamic visuals for broadcast and social media.',
            icon: '📽️'
        },
        {
            title: 'UI/UX Design',
            subtitle: 'Engage Users',
            desc: 'Modern interfaces that engage and convert.',
            icon: '🖥️'
        },
        {
            title: 'Graphic Design',
            subtitle: 'Visual Excellence',
            desc: 'Stunning visuals for print and digital media.',
            icon: '🖌️'
        },
        {
            title: 'Web Development',
            subtitle: 'Build the Future',
            desc: 'Responsive websites built for performance and scalability.',
            icon: '🌐'
        },
        {
            title: 'Illustration',
            subtitle: 'Unique Artistry',
            desc: 'Custom artwork to elevate your brand storytelling.',
            icon: '✍️'
        },
        {
            title: 'Packaging Design',
            subtitle: 'Stand Out on Shelves',
            desc: 'Eye-catching packaging that enhances product appeal.',
            icon: '📦'
        },
        {
            title: 'Social Media Content',
            subtitle: 'Boost Engagement',
            desc: 'Creative assets tailored for social media platforms.',
            icon: '📱'
        },
        {
            title: '3D Modeling',
            subtitle: 'Bring Ideas to Life',
            desc: 'Immersive 3D designs for products and animations.',
            icon: '🧊'
        },
    ];

    return (
        <section className="max-w-6xl mx-auto p-6">
            <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
                Design Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                    >
                        <div className="flex items-center mb-2">
                            <span className="text-2xl mr-2">{service.icon}</span>
                            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                        </div>
                        <p className="text-sm font-medium text-gray-700 mb-1">{service.subtitle}</p>
                        <p className="text-gray-600">{service.desc}</p>
                        <div className="mt-4">
                            <button className="text-sm text-gray-800 font-medium hover:underline transition-colors duration-200">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
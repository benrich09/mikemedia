import React from 'react';

export default function Services() {
    const services = [
        {
            title: 'Brand Identity',
            description: 'Craft logos, color palettes, and visual systems that define your brand.',
            icon: '🎯',
        },
        {
            title: 'Motion Graphics',
            description: 'Create dynamic animations for broadcast, social media, and live streams.',
            icon: '🎞️',
        },
        {
            title: 'UI/UX Design',
            description: 'Design intuitive interfaces and user experiences for web and mobile platforms.',
            icon: '🖥️',
        },
        {
            title: 'Content Strategy',
            description: 'Plan and produce compelling content that resonates with your audience.',
            icon: '📝',
        },
        {
            title: 'Studio Setup',
            description: 'Consult on gear, lighting, and layout for professional broadcasting environments.',
            icon: '🎙️',
        },
        {
            title: 'Social Media Design',
            description: 'Design templates and assets tailored for high-impact social campaigns.',
            icon: '📱',
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
                    >
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

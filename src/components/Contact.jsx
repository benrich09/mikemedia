import React, { useState } from 'react';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Message sent successfully!');
        }, 1000);
    };

    return (
        <section className="max-w-4xl mx-auto p-6 my-12">
            <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
                Connect With Us
            </h2>
            <div className="bg-white shadow-xl rounded-lg p-8 space-y-6 transform transition-all hover:shadow-2xl">
                <p className="text-center text-gray-600 text-lg">
                    We'd love to hear from you! Fill out the form below to get started.
                </p>
                <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
                <div action="#" className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            required
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        required
                    />
                    <textarea
                        rows="6"
                        placeholder="Your Message"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 resize-none"
                        required
                    />
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className={`w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 flex items-center justify-center ${
                            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                        {isSubmitting ? (
                            <>
                                <svg
                                    className="animate-spin h-5 w-5 mr-2 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                Sending...
                            </>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
}
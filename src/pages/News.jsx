import React, { useState, useEffect } from 'react';

const sampleNews = [
    {
        id: 1,
        title: "Local Team Wins Championship",
        category: "Sports",
        content: "The hometown heroes clinched the title in a thrilling final match.",
        image: "https://via.placeholder.com/400x200?text=Sports+Championship",
        video: null,
        date: "2025-09-01",
    },
    {
        id: 2,
        title: "Breaking News: City Festival Announced",
        category: "Politics",
        content: "The annual city festival will feature music, food, and art.",
        image: "https://via.placeholder.com/400x200?text=Festival",
        video: null,
        date: "2025-09-02",
    },
    {
        id: 3,
        title: "New Tech Breakthrough Unveiled",
        category: "Entertainment",
        content: "A revolutionary gadget was showcased at the tech expo.",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        image: null,
        date: "2025-08-30",
    },
];

// NewsCard component to display individual news items
const NewsCard = ({ news }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">{news.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{news.date} | {news.category}</p>
            {news.image && (
                <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover rounded-md mb-2"
                />
            )}
            {news.video && (
                <video
                    controls
                    className="w-full h-48 object-cover rounded-md mb-2"
                >
                    <source src={news.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
            <p className="text-gray-700">{news.content}</p>
        </div>
    );
};

// Main News component
const News = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [filter, setFilter] = useState('All');

    // Simulate fetching data
    useEffect(() => {
        setNewsItems(sampleNews);
    }, []);

    // Filter news by category
    const filteredNews = filter === 'All'
        ? newsItems
        : newsItems.filter(item => item.category === filter);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">News Feed</h1>

            {/* Filter Buttons */}
            <div className="flex justify-center space-x-4 mb-6">
                {['All', 'Sports', 'Politics', 'Entertainment'].map(category => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`px-4 py-2 rounded-md ${
                            filter === category
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-700'
                        } hover:bg-blue-400 hover:text-white transition`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredNews.length > 0 ? (
                    filteredNews.map(news => (
                        <NewsCard key={news.id} news={news} />
                    ))
                ) : (
                    <p className="text-center col-span-full">No news available for this category.</p>
                )}
            </div>
        </div>
    );
};

export default News;
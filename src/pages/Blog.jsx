import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

const Blog = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get('https://thefocuseducationcentre.com/api/blogs.php');
                setBlogPosts(res.data);
            } catch (err) {
                console.error("Error fetching blogs:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="bg-slate-50 min-h-screen pb-24">
            <HeroSection
                title="Study Resources & Blog"
                subtitle="Tips, strategies, and updates from our expert educators."
                bgImage="./blog/hero-section.webp"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in mt-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? (
                        <div className="text-center py-20 text-slate-500 w-full col-span-full">Loading our latest stories...</div>
                    ) : blogPosts.length === 0 ? (
                        <div className="text-center py-20 text-slate-500 w-full col-span-full">Check back soon for new articles from Focus Education Centre!</div>
                    ) : (
                        blogPosts.map(post => (
                            <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                                {post.imageUrl && (
                                    <div className="h-48 overflow-hidden">
                                        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                    </div>
                                )}
                                <div className="p-6 flex-grow">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{post.author || 'Admin'}</span>
                                        <span className="text-xs text-slate-400 font-medium">{new Date(post.date).toLocaleDateString()}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-3 hover:text-blue-600 transition-colors">
                                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                    </h3>
                                    <p className="text-slate-600 line-clamp-3 mb-6">{post.content.substring(0, 150)}...</p>
                                </div>
                            </article>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blog;

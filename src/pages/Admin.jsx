import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [enquiries, setEnquiries] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('enquiries');

    // Blog Form State
    const [blogTitle, setBlogTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');
    const [blogImageUrl, setBlogImageUrl] = useState('');
    const [editingBlogId, setEditingBlogId] = useState(null);

    // Very basic auth for demonstration. In production, use JWT + Backend validation.
    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'focus123') { // Simple hardcoded password
            setIsAuthenticated(true);
            fetchEnquiries();
            fetchBlogs();
        } else {
            alert('Incorrect Password');
        }
    };

    const fetchEnquiries = async () => {
        setLoading(true);
        try {
            const res = await axios.get('https://thefocuseducationcentre.com/api/enquiries.php');
            setEnquiries(res.data);
        } catch (err) {
            console.error("Error fetching enquiries:", err);
        } finally {
            setLoading(false);
        }
    };

    const fetchBlogs = async () => {
        try {
            const res = await axios.get('https://thefocuseducationcentre.com/api/blogs.php');
            setBlogs(res.data);
        } catch (err) {
            console.error("Error fetching blogs:", err);
        }
    };

    const handleBlogSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingBlogId) {
                await axios.put('https://thefocuseducationcentre.com/api/blogs.php', {
                    id: editingBlogId,
                    title: blogTitle,
                    content: blogContent,
                    imageUrl: blogImageUrl,
                    author: 'Admin'
                });
                alert('Blog post updated successfully!');
                setEditingBlogId(null);
            } else {
                await axios.post('https://thefocuseducationcentre.com/api/blogs.php', {
                    title: blogTitle,
                    content: blogContent,
                    imageUrl: blogImageUrl,
                    author: 'Admin'
                });
                alert('Blog post created successfully!');
            }
            setBlogTitle('');
            setBlogContent('');
            setBlogImageUrl('');
            fetchBlogs();
        } catch (err) {
            console.error(err);
            alert('Failed to save blog post');
        }
    };

    const handleEditBlog = (blog) => {
        setEditingBlogId(blog.id);
        setBlogTitle(blog.title);
        setBlogContent(blog.content);
        setBlogImageUrl(blog.imageUrl || '');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDeleteBlog = async (id) => {
        if (window.confirm('Are you sure you want to delete this blog post?')) {
            try {
                await axios.delete(`https://thefocuseducationcentre.com/api/blogs.php?id=${id}`);
                alert('Blog post deleted successfully!');
                fetchBlogs();
            } catch (err) {
                console.error(err);
                alert('Failed to delete blog');
            }
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
                <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center fade-in">
                    <div className="text-4xl mb-6">🔒</div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-6">Admin Login</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Enter Admin Password"
                            required
                        />
                        <button type="submit" className="w-full btn-primary bg-slate-800 hover:bg-slate-900">
                            Access Dashboard
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-12 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
                        <p className="text-slate-500 mt-1">Manage The Focus Education Centre Content</p>
                    </div>
                    <button
                        onClick={() => setIsAuthenticated(false)}
                        className="px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                    >
                        Logout
                    </button>
                </div>

                {/* Dashboard Tabs / Content */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="border-b border-slate-200 bg-slate-100 px-6 py-4 flex space-x-4">
                        <button
                            onClick={() => setActiveTab('enquiries')}
                            className={`px-4 py-2 font-bold rounded shadow-sm transition-colors ${activeTab === 'enquiries' ? 'bg-white text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            Enquiries
                        </button>
                        <button
                            onClick={() => setActiveTab('blogs')}
                            className={`px-4 py-2 font-bold rounded shadow-sm transition-colors ${activeTab === 'blogs' ? 'bg-white text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            Blogs
                        </button>
                    </div>

                    <div className="p-6">
                        {activeTab === 'enquiries' && (
                            <>
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold text-slate-800">Recent Enquiries</h2>
                                    <button
                                        onClick={fetchEnquiries}
                                        className="text-sm text-blue-600 font-semibold hover:text-blue-800"
                                    >
                                        Refresh Data
                                    </button>
                                </div>

                                {loading ? (
                                    <div className="text-center py-10 text-slate-500">Loading enquiries...</div>
                                ) : enquiries.length === 0 ? (
                                    <div className="text-center py-10 text-slate-500">No enquiries found in the database.</div>
                                ) : (
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-slate-50 text-slate-500 text-sm uppercase tracking-wider">
                                                    <th className="p-4 rounded-tl-lg font-semibold border-b border-slate-200">Date</th>
                                                    <th className="p-4 font-semibold border-b border-slate-200">Student Name</th>
                                                    <th className="p-4 font-semibold border-b border-slate-200">Class & Board</th>
                                                    <th className="p-4 font-semibold border-b border-slate-200">Phone</th>
                                                    <th className="p-4 rounded-tr-lg font-semibold border-b border-slate-200">Message</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-sm text-slate-700">
                                                {enquiries.map((enq) => (
                                                    <tr key={enq.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                        <td className="p-4 whitespace-nowrap">{new Date(enq.createdAt).toLocaleDateString()}</td>
                                                        <td className="p-4 font-bold text-slate-800">{enq.studentName}</td>
                                                        <td className="p-4">
                                                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs mr-2">{enq.studentClass}</span>
                                                            <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs">{enq.board}</span>
                                                        </td>
                                                        <td className="p-4 font-medium">{enq.parentPhone}</td>
                                                        <td className="p-4 max-w-xs truncate" title={enq.message}>{enq.message || '-'}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </>
                        )}

                        {activeTab === 'blogs' && (
                            <div className="grid lg:grid-cols-3 gap-8">
                                <div className="lg:col-span-1 bg-slate-50 p-6 rounded-xl border border-slate-200 h-fit">
                                    <h3 className="text-lg font-bold text-slate-800 mb-4">{editingBlogId ? 'Edit Post' : 'Create New Post'}</h3>
                                    <form onSubmit={handleBlogSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Title *</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                value={blogTitle}
                                                onChange={e => setBlogTitle(e.target.value)}
                                                placeholder="Enter post title"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Image URL (Optional)</label>
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                value={blogImageUrl}
                                                onChange={e => setBlogImageUrl(e.target.value)}
                                                placeholder="https://example.com/image.jpg"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Content * (Supports basic formatting)</label>
                                            <textarea
                                                required
                                                rows="6"
                                                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                value={blogContent}
                                                onChange={e => setBlogContent(e.target.value)}
                                                placeholder="Write your blog post here..."
                                            ></textarea>
                                        </div>
                                        <div className="flex gap-2">
                                            <button type="submit" className="w-full btn-primary py-2 text-sm rounded-lg shadow">
                                                {editingBlogId ? 'Update Post' : 'Publish Post'}
                                            </button>
                                            {editingBlogId && (
                                                <button type="button" className="w-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-2 text-sm rounded-lg shadow transition-colors" onClick={() => {
                                                    setEditingBlogId(null);
                                                    setBlogTitle('');
                                                    setBlogContent('');
                                                    setBlogImageUrl('');
                                                }}>Cancel</button>
                                            )}
                                        </div>
                                    </form>
                                </div>
                                <div className="lg:col-span-2">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-bold text-slate-800">Published Posts</h3>
                                        <button onClick={fetchBlogs} className="text-sm text-blue-600 font-semibold hover:text-blue-800">Refresh</button>
                                    </div>
                                    {blogs.length === 0 ? (
                                        <div className="text-center py-10 text-slate-500 bg-slate-50 border border-slate-100 rounded-xl">No blogs published yet.</div>
                                    ) : (
                                        <div className="space-y-4">
                                            {blogs.map(blog => (
                                                <div key={blog.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                                                    <div className="flex gap-4 items-start w-full">
                                                        {blog.imageUrl && <img src={blog.imageUrl} alt={blog.title} className="w-24 h-24 object-cover rounded-lg flex-shrink-0" />}
                                                        <div className="flex-grow">
                                                            <h4 className="font-bold text-slate-800 text-lg mb-1">{blog.title}</h4>
                                                            <p className="text-xs text-slate-500 mb-2">Published {new Date(blog.date).toLocaleDateString()} by {blog.author}</p>
                                                            <p className="text-sm text-slate-600 line-clamp-2">{blog.content}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex sm:flex-col gap-2 w-full sm:w-24 mt-4 sm:mt-0 flex-shrink-0">
                                                        <button onClick={() => handleEditBlog(blog)} className="w-full bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 py-1.5 rounded-lg text-sm font-bold transition-colors">Edit</button>
                                                        <button onClick={() => handleDeleteBlog(blog.id)} className="w-full bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 py-1.5 rounded-lg text-sm font-bold transition-colors">Delete</button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Admin;

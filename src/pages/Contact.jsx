import React, { useState } from 'react';
import axios from 'axios';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaWpforms, FaYoutube, FaInstagram, FaStar } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';

const Contact = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        studentClass: 'Class 4',
        board: 'CBSE',
        parentPhone: '+91 ',
        message: ''
    });
    const [status, setStatus] = useState({ loading: false, success: false, error: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'parentPhone') {
            // Prevent deleting the '+91 ' prefix
            if (!value.startsWith('+91 ')) {
                return;
            }
            // Allow only numbers after the prefix and exactly 10 digits
            const numberPart = value.substring(4);
            if (!/^\d*$/.test(numberPart)) {
                return;
            }
            if (numberPart.length > 10) {
                return;
            }
        }
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: '' });

        try {
            // Validate phone number length before sending
            const numberPart = formData.parentPhone.substring(4);
            if (numberPart.length !== 10) {
                setStatus({ loading: false, success: false, error: 'Phone number must be exactly 10 digits long.' });
                return;
            }

            // API call to Express backend
            await axios.post('https://thefocuseducationcentre.com/api/enquiries.php', formData);
            setStatus({ loading: false, success: true, error: '' });
            setFormData({
                studentName: '', studentClass: 'Class 4', board: 'CBSE', parentPhone: '+91 ', message: ''
            });
            // In a real production deployment, the URL above will point to the deployed Node server
        } catch (err) {
            console.error(err);
            setStatus({ loading: false, success: false, error: 'Failed to submit enquiry. Please try again or contact via WhatsApp.' });
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-24">
            <HeroSection
                title="Contact & Enquiries"
                subtitle="Got questions? We'd love to hear from you."
                bgImage="./contact/hero-section.webp"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in mt-12">
                <div className="grid lg:grid-cols-5 gap-12">

                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-800 mb-8">Get In Touch</h3>

                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <a href="https://forms.gle/6rsU2qr2Lhua485j7" target="_blank" rel="noreferrer" className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-colors w-full sm:w-auto shadow-md">
                                    <FaWpforms className="mr-2" />
                                    Register via Google Form
                                </a>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 mb-1">Our Location</h4>
                                        <p className="text-slate-600">Egmore, Chennai,<br />Tamil Nadu, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                        <FaPhoneAlt size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 mb-1">Phone</h4>
                                        <a href="tel:+919345046493" className="text-slate-600 hover:text-blue-600 transition-colors">+91 93450 46493</a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                        <FaWhatsapp size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 mb-1">WhatsApp</h4>
                                        <a href="https://wa.me/message/6ETU5R4B3MYDN1" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">Chat With Us</a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 mb-1">Email</h4>
                                        <a href="mailto:thefocuseducationcentre@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors break-all">thefocuseducationcentre@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                                    <a href="https://youtube.com/@thefocuseducationcentre" target="_blank" rel="noreferrer" className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                                        <FaYoutube size={18} />
                                    </a>
                                    <a href="https://www.instagram.com/thefocuseducationcentre" target="_blank" rel="noreferrer" className="w-10 h-10 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors">
                                        <FaInstagram size={18} />
                                    </a>
                                    <a href="https://maps.app.goo.gl/wpLZ6xARCKFUTbCM8" target="_blank" rel="noreferrer" className="w-10 h-10 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors" title="Google Reviews">
                                        <FaStar size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Google Map Box */}
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 h-64">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.419084234079!2d80.2520379!3d13.0784306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzQyLjQiTiA4MMKwMTUnMDcuMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                className="rounded-xl border-0"
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Maps"
                            ></iframe>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-800 mb-8">Student Enquiry Form</h3>

                        {status.success ? (
                            <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-8 rounded-xl text-center fade-in">
                                <div className="text-5xl mb-4">✅</div>
                                <h4 className="text-xl font-bold mb-2">Thank You!</h4>
                                <p>Your enquiry has been submitted. Our team will contact you shortly.</p>
                                <button
                                    onClick={() => setStatus({ ...status, success: false })}
                                    className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                                >
                                    Submit Another Enquiry
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {status.error && (
                                    <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm">{status.error}</div>
                                )}

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Student Name *</label>
                                        <input
                                            type="text"
                                            name="studentName"
                                            required
                                            value={formData.studentName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                            placeholder="Enter student's name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Parent Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="parentPhone"
                                            required
                                            value={formData.parentPhone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                            placeholder="+91 Phone Number"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Class</label>
                                        <select
                                            name="studentClass"
                                            value={formData.studentClass}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white transition-all"
                                        >
                                            {['Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'].map(c => <option key={c} value={c}>{c}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Board</label>
                                        <select
                                            name="board"
                                            value={formData.board}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white transition-all"
                                        >
                                            <option value="CBSE">CBSE</option>
                                            <option value="State Board">State Board (Samacheer)</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message (Optional)</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        placeholder="Tell us about the student's specific requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status.loading}
                                    className={`w-full py-4 rounded-lg font-bold text-white text-lg tracking-wide shadow-md transition-all ${status.loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'}`}
                                >
                                    {status.loading ? 'Submitting...' : 'Submit Enquiry'}
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;

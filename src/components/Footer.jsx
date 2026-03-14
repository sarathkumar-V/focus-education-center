import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand & About */}
                    <div>
                        {/* <h3 className="text-2xl font-bold text-white mb-4">The Focus</h3>
                        <p className="text-amber-500 font-semibold mb-6">Education Centre</p> */}
                        <img src="./logo.png" alt="logo" className="w-60 h-32 bg-white p-2" />
                        <p className="text-sm leading-relaxed mb-6">
                            Providing structured, concept-driven academic guidance for students from Class 4 to 10. We emphasize clarity over memorization.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://youtube.com/@thefocuseducationcentre" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                <FaYoutube size={24} />
                            </a>
                            <a href="https://www.instagram.com/thefocuseducationcentre" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
                            <li><Link to="/courses" className="hover:text-amber-500 transition-colors">Courses Offered</Link></li>
                            <li><Link to="/tuition" className="hover:text-amber-500 transition-colors">Tuition</Link></li>
                            <li><Link to="/blog" className="hover:text-amber-500 transition-colors">Study Resources</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="mt-1 mr-3 text-amber-500 flex-shrink-0" />
                                <span>Egmore, Chennai, Tamil Nadu, India</span>
                            </li>
                            <li className="flex items-center">
                                <FaPhoneAlt className="mr-3 text-amber-500 flex-shrink-0" />
                                <a href="tel:+919345046493" className="hover:text-white">+91 93450 46493</a>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-3 text-amber-500 flex-shrink-0" />
                                <a href="mailto:thefocuseducationcentre@gmail.com" className="hover:text-white">thefocuseducationcentre@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Maps / Reviews */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Location</h4>
                        <div className="w-full h-40 bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.419084234079!2d80.2520379!3d13.0784306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzQyLjQiTiA4MMKwMTUnMDcuMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Maps Location"
                            ></iframe>
                        </div>
                        <div className="mt-4 flex flex-col space-y-2">
                            <a href="https://maps.app.goo.gl/wpLZ6xARCKFUTbCM8" target="_blank" rel="noreferrer" className="text-amber-500 hover:text-amber-400 text-sm font-medium flex items-center">
                                Read our Google Reviews <span className="ml-1">→</span>
                            </a>
                            <a href="https://forms.gle/6rsU2qr2Lhua485j7" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center">
                                Google Registration Form <span className="ml-1">→</span>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} The Focus Education Centre. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

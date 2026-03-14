import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserGraduate, FaClock, FaBookOpen } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';

const HomeTuition = () => {
    return (
        <div className="bg-white min-h-screen pb-24">
            {/* Header */}
            <HeroSection
                title="Home Tuition"
                subtitle="Premium one-to-one teaching in the comfort and safety of your own home."
                bgImage="../../public/tution/offline-tution.webp"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 fade-in">
                <div className="grid md:grid-cols-2 gap-16 items-center flex-col-reverse md:flex-row">

                    {/* Visual/CTA Box */}
                    <div className="bg-orange-50 p-10 rounded-2xl border border-orange-100 shadow-lg text-center order-2 md:order-1">
                        <div className="text-6xl mb-6">🏠</div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Request a Home Tutor</h3>
                        <p className="text-slate-600 mb-8 max-w-sm mx-auto">
                            Get an expert educator assigned to your child for highly focused, personalized academic growth.
                        </p>
                        <Link to="/contact" className="btn-secondary w-full text-lg shadow-xl shadow-amber-500/30">
                            Book Home Tutor
                        </Link>
                    </div>

                    {/* Features */}
                    <div className="space-y-10 order-1 md:order-2">
                        <h2 className="text-3xl font-bold text-slate-800 mb-8 border-b-4 border-amber-500 pb-2 inline-block">Why Home Tuition?</h2>

                        <div className="flex">
                            <div className="mt-1 bg-amber-100 p-3 rounded-xl text-amber-600 mr-4 h-12 w-12 flex items-center justify-center flex-shrink-0">
                                <FaHome size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-800">One-to-One Teaching</h4>
                                <p className="text-slate-600 mt-2">100% of the tutor's attention is focused on identifying and bridging your child's specific learning gaps.</p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="mt-1 bg-blue-100 p-3 rounded-xl text-blue-600 mr-4 h-12 w-12 flex items-center justify-center flex-shrink-0">
                                <FaUserGraduate size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-800">Personal Attention</h4>
                                <p className="text-slate-600 mt-2">Learning pace is adjusted strictly according to the student’s grasping power, ensuring no one is left behind.</p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="mt-1 bg-green-100 p-3 rounded-xl text-green-600 mr-4 h-12 w-12 flex items-center justify-center flex-shrink-0">
                                <FaClock size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-800">Flexible Timing</h4>
                                <p className="text-slate-600 mt-2">Schedule classes at mutually convenient times, saving commute hours and optimizing the child's daily routine.</p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="mt-1 bg-purple-100 p-3 rounded-xl text-purple-600 mr-4 h-12 w-12 flex items-center justify-center flex-shrink-0">
                                <FaBookOpen size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-800">Subject Experts</h4>
                                <p className="text-slate-600 mt-2">Highly qualified tutors vetted by The Focus Education Centre for their subject mastery and teaching skills.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeTuition;

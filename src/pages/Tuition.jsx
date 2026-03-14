import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { FaLaptopCode, FaChalkboardTeacher } from 'react-icons/fa';

const Tuition = () => {
    return (
        <div className="bg-slate-50 min-h-screen pb-24">
            <HeroSection
                title="Our Tuition Programs"
                subtitle="Choose the learning mode that best fits your child's needs."
                bgImage="./tution/hero-section.webp"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 fade-in">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">Flexible Learning Options</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">We offer both Online and Home tuition formats, maintaining our core philosophy of concept-driven academic guidance in both.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Online Tuition Card */}
                    <Link to="/tuition/online-tuition" className="group rounded-3xl overflow-hidden shadow-lg bg-white border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col items-center p-12 text-center h-full">
                        <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                            <FaLaptopCode size={40} />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">Online Tuition</h3>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            Interactive digital classes with small batch sizes, screen sharing, and digital whiteboards. Learn from the comfort of your home without compromising on quality.
                        </p>
                        <span className="mt-auto font-bold text-blue-600 border-b-2 border-transparent group-hover:border-blue-600 pb-1 flex items-center">Explore Online Programs <span className="ml-2">&rarr;</span></span>
                    </Link>

                    {/* Home Tuition Card */}
                    <Link to="/tuition/home-tuition" className="group rounded-3xl overflow-hidden shadow-lg bg-white border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col items-center p-12 text-center h-full">
                        <div className="w-24 h-24 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                            <FaChalkboardTeacher size={40} />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-800 mb-4 group-hover:text-amber-600 transition-colors">Home Tuition</h3>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            One-on-one personalized attention directly at your home. Ideal for students who need a customized pace, detailed monitoring, and individualized mentorship.
                        </p>
                        <span className="mt-auto font-bold text-amber-600 border-b-2 border-transparent group-hover:border-amber-600 pb-1 flex items-center">Explore Home Programs <span className="ml-2">&rarr;</span></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Tuition;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptop, FaUserClock, FaLightbulb, FaQuestionCircle } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';

const OnlineTuition = () => {
    return (
        <div className="bg-white min-h-screen pb-24">
            {/* Header */}
            <HeroSection
                title="Online Tuition"
                subtitle="High-quality, interactive live classes ensuring maximum concept clarity from the comfort of your home."
                bgImage="../../public/tution/online-tution-img.webp"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 fade-in">
                <div className="grid md:grid-cols-2 gap-16 items-center flex-col-reverse md:flex-row">

                    {/* Features */}
                    <div className="space-y-10">
                        <h2 className="text-3xl font-bold text-slate-800 mb-8 border-b-4 border-blue-500 pb-2 inline-block">Key Features</h2>

                        <div className="flex">
                            <div className="mt-1 bg-blue-100 p-3 rounded-xl text-blue-600 mr-4 h-12 w-12 flex items-center justify-center flex-shrink-0">
                                <FaLaptop size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-800">Live Interactive Classes</h4>
                                <p className="text-slate-600 mt-2">Engage in real-time, ask questions instantly, and participate in two-way digital whiteboard sessions.</p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="mt-1 bg-amber-100 p-3 rounded-xl text-amber-600 mr-4 h-12 w-12 flex items-center justify-center flex-shrink-0">
                                <FaUserClock size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-800">Small Batch Sizes</h4>
                                <p className="text-slate-600 mt-2">We limit our online batches to ensure every student gets the personalized attention they deserve.</p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="mt-1 bg-green-100 p-3 rounded-xl text-green-600 mr-4 h-12 w-12 flex items-center justify-center flex-shrink-0">
                                <FaLightbulb size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-800">Deep Concept Clarity</h4>
                                <p className="text-slate-600 mt-2">Our online methodology focuses heavily on visualizing abstract Math and Science concepts securely.</p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="mt-1 bg-purple-100 p-3 rounded-xl text-purple-600 mr-4 h-12 w-12 flex items-center justify-center flex-shrink-0">
                                <FaQuestionCircle size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-800">Dedicated Doubt Solving</h4>
                                <p className="text-slate-600 mt-2">Special doubt-clearing sessions scheduled alongside regular classes to ensure no question is left unanswered.</p>
                            </div>
                        </div>

                    </div>

                    {/* Visual/CTA Box */}
                    <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200 shadow-lg text-center">
                        <div className="text-6xl mb-6">👩‍💻</div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Start Learning Online</h3>
                        <p className="text-slate-600 mb-8 max-w-sm mx-auto">
                            Equip your child with modern digital learning tools under the direct guidance of expert educators.
                        </p>
                        <Link to="/contact" className="btn-primary w-full text-lg shadow-xl shadow-blue-500/30">
                            Join Now
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OnlineTuition;

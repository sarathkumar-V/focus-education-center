import React from 'react';
import HeroSection from '../components/HeroSection';

const About = () => {
    return (
        <div className="bg-slate-50 min-h-screen pb-24">
            {/* Header */}
            <HeroSection
                title="About Us"
                subtitle="Building Strong Academic Foundations for the Future"
                bgImage="./about/hero-section.webp"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">

                {/* Mission & Vision */}
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-16 border border-slate-100 fade-in">
                    <div className="grid md:grid-cols-2 gap-12 text-slate-700">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-4 border-amber-500 pb-2 inline-block">Our Mission</h2>
                            <p className="text-lg leading-relaxed">
                                To provide structured, concept-driven academic guidance to students from Class 4 to 10. We emphasize clarity over memorization and structured preparation over last-minute studying, ensuring long-term academic success.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-4 border-amber-500 pb-2 inline-block">Our Vision</h2>
                            <p className="text-lg leading-relaxed">
                                To become the most trusted tuition centre in Chennai, known for an uncompromising commitment to academic excellence, integrity, and measurable student improvement.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Meet the Founder */}
                <div className="bg-blue-50 rounded-3xl overflow-hidden shadow-lg p-8 md:p-12 mb-16 fade-in">
                    <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12">Meet the Founder</h2>

                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-1/3 flex justify-center">
                            {/* Instructor Image Placeholder / Image path according to instructions */}
                            <div className="w-64 md:w-80 h-auto bg-slate-200 rounded-2xl shadow-xl overflow-hidden border-4 border-white relative">
                                <img
                                    src="/instructor-img/instructor.webp"
                                    alt="Koushick Shankar D"
                                    className="object-cover w-full h-auto"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://via.placeholder.com/400x500?text=Koushick+Shankar+D';
                                    }}
                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-2/3 text-lg text-slate-700 leading-relaxed font-medium">
                            <h3 className="text-3xl font-bold text-slate-900 mb-2">Koushick Shankar D</h3>
                            <p className="text-amber-600 font-semibold mb-6">Founder & Lead Educator | M.Sc. Physics (First Class), University of Madras</p>

                            <p className="mb-4">
                                The Focus Education Centre was founded by Koushick Shankar D with a clear vision — to provide structured, concept-driven academic guidance for students from Class 4 to 10 (CBSE & Tamil Nadu State Board).
                            </p>
                            <p className="mb-4">
                                With a strong academic background in Physics and a deep understanding of foundational learning, he emphasizes clarity over memorization and structured preparation over last-minute studying.
                            </p>
                            <p className="mb-4">
                                His teaching approach focuses on strengthening fundamentals in Mathematics, Science, and Social Science through systematic explanation, regular assessments, and personalized attention.
                            </p>
                            <p className="font-bold text-blue-800">
                                At The Focus Education Centre, every student is mentored directly with a commitment to academic excellence, integrity, and measurable improvement.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Teaching Methodology */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-800 mb-8">Our Teaching Methodology</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-500">
                            <h4 className="text-xl font-bold mb-3 text-slate-800">1. Concept Mapping</h4>
                            <p className="text-slate-600">We break down complex topics into digestible concept maps, ensuring students understand the root of every theory.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-amber-500">
                            <h4 className="text-xl font-bold mb-3 text-slate-800">2. Real-world Application</h4>
                            <p className="text-slate-600">Science and Math are taught with relatable day-to-day examples so learning becomes practical and engaging.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-green-500">
                            <h4 className="text-xl font-bold mb-3 text-slate-800">3. Continuous Evaluation</h4>
                            <p className="text-slate-600">Regular chapter-wise tests and cumulative revisions help track progress without inducing exam-fear.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;

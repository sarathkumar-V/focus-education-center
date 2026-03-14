import React, { useState } from 'react';
import { FaLaptopCode, FaBookOpen, FaFlask, FaMapMarkedAlt, FaLanguage, FaDna } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';

const getSubjectIcon = (subject) => {
    switch (subject) {
        case 'Mathematics': return <FaLaptopCode className="text-blue-500 mr-2 group-hover:text-blue-400 transition-colors" />;
        case 'Science': return <FaFlask className="text-emerald-500 mr-2 group-hover:text-emerald-400 transition-colors" />;
        case 'Social Science': return <FaMapMarkedAlt className="text-orange-500 mr-2 group-hover:text-orange-400 transition-colors" />;
        case 'English': return <FaLanguage className="text-purple-500 mr-2 group-hover:text-purple-400 transition-colors" />;
        case 'Physics/Chem/Bio': return <FaDna className="text-teal-500 mr-2 group-hover:text-teal-400 transition-colors" />;
        default: return <FaBookOpen className="text-slate-500 mr-2 group-hover:text-slate-400 transition-colors" />;
    }
}

const CourseCard = ({ cls, subjects, durations }) => (
    <div className="bg-white rounded-[16px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 p-8 flex flex-col h-full transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] hover:bg-slate-900 group cursor-pointer relative overflow-hidden">

        {/* Glow effect on hover */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/0 rounded-full blur-2xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-blue-500/20 group-hover:scale-150"></div>

        {/* Title */}
        <h3 className="text-3xl font-black text-slate-800 mb-6 tracking-tight transition-colors duration-300 group-hover:text-white relative z-10">{cls}</h3>

        {/* Subjects Section */}
        <div className="mb-8 flex-grow relative z-10">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 transition-colors duration-300 group-hover:text-slate-500">Subjects</h4>
            <div className="flex flex-wrap gap-3">
                {subjects.map(s => (
                    <span key={s} className="flex items-center px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold rounded-full shadow-sm transition-all duration-300 group-hover:bg-slate-800 group-hover:border-slate-700 group-hover:text-slate-200 hover:scale-105">
                        {getSubjectIcon(s)}
                        {s}
                    </span>
                ))}
            </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-100 mb-6 transition-colors duration-300 group-hover:bg-slate-800 relative z-10"></div>

        {/* Duration Section */}
        <div className="relative z-10">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 transition-colors duration-300 group-hover:text-slate-500">Duration & Mode</h4>
            <ul className="space-y-3">
                <li className="text-slate-600 text-sm font-medium flex items-center gap-3 transition-colors duration-300 group-hover:text-slate-300">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 transition-colors duration-300 group-hover:bg-blue-900/50 group-hover:text-blue-400">
                        <FaLaptopCode size={14} />
                    </div>
                    Online / Home
                </li>
                <li className="text-slate-600 text-sm font-medium flex items-center gap-3 transition-colors duration-300 group-hover:text-slate-300">
                    <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 transition-colors duration-300 group-hover:bg-amber-900/50 group-hover:text-amber-400">
                        <FaBookOpen size={14} />
                    </div>
                    {durations}
                </li>
            </ul>
        </div>
    </div>
);

const Courses = () => {
    const [activeBoard, setActiveBoard] = useState('CBSE');

    const classes = ['Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'];
    const baseSubjects = ['Mathematics', 'Science', 'Social Science', 'English'];

    return (
        <div className="bg-slate-50 min-h-screen pb-24">
            <HeroSection
                title="Courses Offered"
                subtitle="Tailored Curriculum for CBSE and State Board"
                bgImage="./course/hero-section.webp"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in mt-12">

                {/* Board Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white p-2 rounded-full shadow-md flex space-x-2">
                        <button
                            onClick={() => setActiveBoard('CBSE')}
                            className={`px-8 py-3 rounded-full font-bold transition-colors ${activeBoard === 'CBSE' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                        >
                            CBSE
                        </button>
                        <button
                            onClick={() => setActiveBoard('StateBoard')}
                            className={`px-8 py-3 rounded-full font-bold transition-colors ${activeBoard === 'StateBoard' ? 'bg-amber-500 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                        >
                            State Board (Samacheer)
                        </button>
                    </div>
                </div>

                {/* Course Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {classes.map(cls => (
                        <CourseCard
                            key={`${activeBoard}-${cls}`}
                            cls={cls}
                            subjects={cls === 'Class 9' || cls === 'Class 10' ? [...baseSubjects, 'Physics/Chem/Bio'] : baseSubjects}
                            durations="Academic Year (May - March)"
                        />
                    ))}
                </div>

                <div className="mt-20 text-center bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">Not Sure Which Subject?</h2>
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                        Book a free counseling session with our Founder to understand the exact learning needs of your child.
                    </p>
                    <a href="/contact" className="btn-primary">Book Free Consultation</a>
                </div>

            </div>
        </div>
    );
};

export default Courses;

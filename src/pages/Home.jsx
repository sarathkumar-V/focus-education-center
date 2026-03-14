import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaChalkboardTeacher, FaUserFriends, FaCheckCircle, FaStar } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Home = () => {
    const reviews = [
        {
            id: 1,
            author: "Parent of Class 9 Student",
            text: "My child improved a lot after joining Focus Education Centre. The personalized attention really helped clear concepts in Math.",
            rating: 5,
            board: "CBSE"
        },
        {
            id: 2,
            author: "Class 10 Student",
            text: "The teaching method is completely different from regular schools. They actually make sure you understand the 'why' behind formulas.",
            rating: 5,
            board: "State Board"
        },
        {
            id: 3,
            author: "Parent of Class 8 Student",
            text: "Highly recommend for science. The complex physics concepts are taught with such ease. Great environment for learning and the daily assessments are fantastic.",
            rating: 5,
            board: "CBSE"
        },
        {
            id: 4,
            author: "Parent of Class 6 Student",
            text: "We opted for Home Tuition and the tutor sent by The Focus Education Centre is exceptionally patient and knowledgeable. Extremely satisfied.",
            rating: 5,
            board: "CBSE"
        },
        {
            id: 5,
            author: "Class 9 Student",
            text: "Math was my weakest subject but since joining, I have gained so much confidence. Sir explains things down to the basics.",
            rating: 5,
            board: "State Board"
        },
        {
            id: 6,
            author: "Parent of Class 10 Student",
            text: "If you want long-term clarity over just passing exams, this is the place. My son's foundation is rock solid now.",
            rating: 5,
            board: "CBSE"
        }
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <HeroSection
                bgImage="./home/hero-section.webp"
                subtitle="Providing structured, concept-driven academic guidance in CBSE & State Board. We emphasize clarity over memorization."
                isHome={true}
            >
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
                    <Link to="/contact" className="btn-primary text-lg px-8 py-4">Enroll Now</Link>
                    <Link to="/courses" className="glass hover:bg-white/20 text-black text-lg font-semibold py-4 px-8 rounded-lg shadow-md transition-all duration-300">View Courses</Link>
                </div>
            </HeroSection>

            {/* Stats/Trust Bar */}
            <section className="bg-slate-50 py-16 border-b border-slate-200 relative overflow-hidden gap-8">
                <div className="absolute top-0 right-1/3 w-64 h-64 bg-amber-400/20 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover-scale">
                            <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">500+</div>
                            <div className="text-slate-500 font-bold uppercase tracking-wider text-xs md:text-sm mt-3 border-t border-slate-100 pt-4">Students Taught</div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover-scale">
                            <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 mb-2">100%</div>
                            <div className="text-slate-500 font-bold uppercase tracking-wider text-xs md:text-sm mt-3 border-t border-slate-100 pt-4">Concept Clarity</div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover-scale">
                            <div className="text-5xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 mb-2">4th-10th</div>
                            <div className="text-slate-500 font-bold uppercase tracking-wider text-xs md:text-sm mt-3 border-t border-slate-100 pt-4">Classes Covered</div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover-scale">
                            <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-2">4.9</div>
                            <div className="text-slate-500 font-bold uppercase tracking-wider text-xs md:text-sm mt-3 border-t border-slate-100 pt-4">Parent Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20 fade-in">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">Why Parents <span className="text-gradient">Trust Us</span></h2>
                        <div className="w-40 h-[5px] bg-gradient-to-r from-blue-600 to-sky-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover-scale border border-slate-100">
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                <FaChalkboardTeacher size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Expert Educators</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Led by Koushick Shankar D (M.Sc. Physics), focusing on deep conceptual understanding rather than rote memorization.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover-scale border border-slate-100">
                            <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                                <FaUserFriends size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Personalized Attention</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Small batch sizes and customized teaching methods ensure every student's unique learning needs are met.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover-scale border border-slate-100">
                            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                                <FaCheckCircle size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Regular Assessments</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Systematic testing and detailed progress reports keep parents informed and students on track.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Flexible Learning Options</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                We understand that every student learns differently. Choose the mode of learning that best fits your schedule and requirements.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1"><FaCheckCircle className="text-blue-500" size={20} /></div>
                                    <div className="ml-4">
                                        <h4 className="text-xl font-semibold text-slate-800">Online Tuition</h4>
                                        <p className="text-slate-600 mt-1">Interactive live classes with digital whiteboard and concept clarity sessions.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1"><FaCheckCircle className="text-blue-500" size={20} /></div>
                                    <div className="ml-4">
                                        <h4 className="text-xl font-semibold text-slate-800">Home Tuition</h4>
                                        <p className="text-slate-600 mt-1">One-on-one expert guidance in the comfort of your home for maximum focus.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 border-t border-slate-200 pt-10">
                                <h4 className="text-xl font-bold text-slate-800 mb-6">Boards Covered</h4>
                                <div className="flex flex-wrap gap-4">
                                    <span className="bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 shadow-sm text-slate-800 font-bold px-6 py-3 rounded-xl transition-transform hover:-translate-y-1">CBSE</span>
                                    <span className="bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 shadow-sm text-slate-800 font-bold px-6 py-3 rounded-xl transition-transform hover:-translate-y-1">State Board (Samacheer)</span>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 mt-12 md:mt-0 relative group">
                            <div className="bg-slate-900 rounded-3xl p-8 lg:p-14 relative overflow-hidden shadow-2xl transition-transform duration-500 hover:rotate-1">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500 rounded-full mix-blend-screen filter blur-[80px] opacity-40 float"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 rounded-full mix-blend-screen filter blur-[80px] opacity-40 float-delayed"></div>

                                <h3 className="text-3xl font-bold text-white mb-8 relative z-10">Subjects Mastered</h3>
                                <ul className="space-y-6 relative z-10">
                                    <li className="flex items-center glass-dark p-4 rounded-xl shadow-lg border border-slate-700/50 hover:border-blue-500/50 hover:-translate-y-1 transition-all">
                                        <div className="w-12 h-12 bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 rounded-full flex items-center justify-center mr-4 font-bold text-xl">M</div>
                                        <span className="text-lg font-bold text-slate-100">Mathematics</span>
                                    </li>
                                    <li className="flex items-center glass-dark p-4 rounded-xl shadow-lg border border-slate-700/50 hover:border-green-500/50 hover:-translate-y-1 transition-all">
                                        <div className="w-12 h-12 bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 rounded-full flex items-center justify-center mr-4 font-bold text-xl">S</div>
                                        <span className="text-lg font-bold text-slate-100">Science</span>
                                    </li>
                                    <li className="flex items-center glass-dark p-4 rounded-xl shadow-lg border border-slate-700/50 hover:border-orange-500/50 hover:-translate-y-1 transition-all">
                                        <div className="w-12 h-12 bg-orange-500 text-white shadow-lg shadow-orange-500/30 rounded-full flex items-center justify-center mr-4 font-bold text-xl">SS</div>
                                        <span className="text-lg font-bold text-slate-100">Social Science</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Preview */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Student & Parent Reviews</h2>
                        <div className="w-32 h-1 bg-amber-500 mx-auto rounded-full"></div>
                    </div>

                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        // pagination={{ clickable: true, dynamicBullets: true }}
                        navigation={true}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-16 px-4 md:px-12"
                        style={{
                            '--swiper-pagination-color': '#f59e0b',
                            '--swiper-navigation-color': '#f59e0b',
                            '--swiper-navigation-size': '24px'
                        }}
                    >
                        {reviews.map((review) => (
                            <SwiperSlide key={review.id} className="h-auto px-1 py-4">
                                <div className="glass-dark p-8 rounded-2xl relative h-90 flex flex-col hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 cursor-grab active:cursor-grabbing">
                                    <div className="absolute top-8 right-8 text-amber-500/10">
                                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                                    </div>
                                    <div className="flex text-amber-400 mb-6 gap-1 relative z-10">
                                        {[...Array(review.rating)].map((_, i) => <FaStar key={i} size={20} className="drop-shadow-md" />)}
                                    </div>
                                    <p className="text-slate-200 italic mb-8 flex-grow text-lg leading-relaxed relative z-10">"{review.text}"</p>
                                    <div className="flex items-center mt-auto relative z-10 border-t border-slate-700/50 pt-6">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg flex-shrink-0">
                                            {review.author.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-bold text-white text-lg">{review.author}</div>
                                            <div className="text-sm text-amber-500 font-medium tracking-wide">{review.board}</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="text-center mt-12">
                        <a href="https://maps.app.goo.gl/wpLZ6xARCKFUTbCM8" target="_blank" rel="noreferrer" className="text-amber-500 font-semibold hover:text-amber-400 transition-colors">
                            Leave a Google Review &rarr;
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-center px-4">
                <div className="max-w-4xl mx-auto text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to improve your academic performance?</h2>
                    <p className="text-xl text-blue-100 mb-10">Join The Focus Education Centre today and experience concept-driven academic guidance.</p>
                    <Link to="/contact" className="bg-amber-500 hover:bg-amber-600 text-white text-lg font-bold py-4 px-10 rounded-full shadow-xl transition-all hover:scale-105 inline-block">
                        Get in Touch / Enroll
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;

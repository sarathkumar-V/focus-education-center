import React from 'react';

const HeroSection = ({ title, subtitle, bgImage, isHome = false, children }) => {
    return (
        <div
            className="relative bg-slate-900 bg-cover  md:bg-contain text-white py-36 md:py-48 px-4 overflow-hidden flex flex-col justify-center min-h-[60vh]"
            style={{
                backgroundImage: `url('${bgImage}')`,
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                // backgroundRepeat: 'no-repeat',
                // backgroundBlendMode: 'overlay',
            }}
        >
            {/* Dark complex overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/80 to-slate-900/90 mix-blend-multiply"></div>

            {/* Glowing animated orbs in background */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-40 float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500 rounded-full mix-blend-screen filter blur-[120px] opacity-30 float-delayed"></div>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center fade-in w-full">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 drop-shadow-2xl leading-[1.1]">
                    {isHome ? (
                        <>
                            Best Tuition Centre<br />
                            <span className="text-gradient-gold inline-block md:block mt-2 pb-2">for Classes 4 - 10</span>
                        </>
                    ) : (
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">{title}</span>
                    )}
                </h1>

                {subtitle && (
                    <p className="text-xl md:text-2xl text-slate-200 mb-12 drop-shadow-lg font-medium max-w-3xl leading-relaxed">
                        {subtitle}
                    </p>
                )}

                {children}
            </div>

            {/* Geometric luxury mesh pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(rgb(255, 255, 255) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
    );
};

export default HeroSection;

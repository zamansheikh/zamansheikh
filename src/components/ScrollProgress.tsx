import React, { useState, useEffect } from 'react';

export const ScrollProgress: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
            <div
                className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 transition-all duration-150 ease-out"
                style={{ width: `${scrollProgress}%` }}
            >
                <div className="h-full w-full glow-lg" />
            </div>
        </div>
    );
};

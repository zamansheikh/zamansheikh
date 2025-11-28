import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface StatsCardProps {
    value: number;
    label: string;
    suffix?: string;
    icon?: React.ReactNode;
    delay?: number;
}

export const StatsCard: React.FC<StatsCardProps> = ({
    value,
    label,
    suffix = '',
    icon,
    delay = 0,
}) => {
    const [count, setCount] = React.useState(0);
    const [isVisible, setIsVisible] = React.useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="glass-card-hover rounded-2xl p-6 text-center"
        >
            {icon && (
                <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 glow">
                        {icon}
                    </div>
                </div>
            )}
            <div className="text-4xl md:text-5xl font-bold gradient-text-animated mb-2">
                {count}
                {suffix}
            </div>
            <div className="text-gray-400 font-medium">{label}</div>
        </motion.div>
    );
};

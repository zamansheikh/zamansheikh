import React from 'react';
import { motion } from 'framer-motion';

export interface TimelineItem {
    title: string;
    subtitle: string;
    period: string;
    description: string;
    achievements?: string[];
    icon?: React.ReactNode;
    logo?: string;
}

interface TimelineProps {
    items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
    return (
        <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-cyan-500 to-transparent transform -translate-x-1/2" />

            <div className="space-y-12">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            } flex-col md:gap-8`}
                    >
                        {/* Content */}
                        <div
                            className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                                } text-left`}
                        >
                            <div className="glass-card-hover rounded-2xl p-6 ml-12 md:ml-0">
                                <div className="flex items-start gap-4 mb-4">
                                    {item.logo && (
                                        <img
                                            src={item.logo}
                                            alt={item.title}
                                            className="w-12 h-12 rounded-lg object-cover"
                                        />
                                    )}
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-cyan-400 font-medium mb-2">{item.subtitle}</p>
                                        <p className="text-gray-400 text-sm">{item.period}</p>
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-4">{item.description}</p>

                                {item.achievements && item.achievements.length > 0 && (
                                    <ul className="space-y-2">
                                        {item.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                                                <span className="text-cyan-400 mt-1.5 flex-shrink-0">▹</span>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>

                        {/* Timeline dot */}
                        <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 transform -translate-x-1/2 flex items-center justify-center glow z-10">
                            {item.icon ? (
                                <div className="text-white">{item.icon}</div>
                            ) : (
                                <div className="w-3 h-3 rounded-full bg-white" />
                            )}
                        </div>

                        {/* Spacer for opposite side */}
                        <div className="hidden md:block w-[calc(50%-2rem)]" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

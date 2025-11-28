import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
    phrases: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    delayBetweenPhrases?: number;
    className?: string;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({
    phrases,
    typingSpeed = 100,
    deletingSpeed = 50,
    delayBetweenPhrases = 2000,
    className = '',
}) => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        // Cursor blink
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex];

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    // Typing
                    if (currentText.length < currentPhrase.length) {
                        setCurrentText(currentPhrase.slice(0, currentText.length + 1));
                    } else {
                        // Finished typing, wait then start deleting
                        setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
                    }
                } else {
                    // Deleting
                    if (currentText.length > 0) {
                        setCurrentText(currentText.slice(0, -1));
                    } else {
                        // Finished deleting, move to next phrase
                        setIsDeleting(false);
                        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
                    }
                }
            },
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, delayBetweenPhrases]);

    return (
        <span className={className}>
            {currentText}
            <span
                className={`inline-block w-0.5 h-[1em] bg-current ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'
                    }`}
                style={{ transition: 'opacity 0.1s' }}
            />
        </span>
    );
};

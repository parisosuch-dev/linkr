"use client"

import { useState, useEffect } from "react"

interface TypeWriterProps {
    text: string;
    delay: number;
}

const TypeWriter = (props: TypeWriterProps) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < props.text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + props.text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, props.delay);

            return () => clearTimeout(timeout);
        }

    }, [currentIndex, props.delay, props.text]);

    return (
        <span>{currentText}</span>
    );
}

export default TypeWriter;
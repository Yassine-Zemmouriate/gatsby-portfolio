import { useState, useEffect } from 'react';

const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 926;

export function getWidth(width : number, windowWidth : number) {
    return (width / DESIGN_WIDTH) * windowWidth;
}

export function getHeight(height : number, windowHeight : number) {
    return (height / DESIGN_HEIGHT) * windowHeight;
}

export function responsiveWidth(width: number): number {
    const scaleFactor = window.innerWidth / DESIGN_WIDTH;
    return width * scaleFactor;
}

export function responsiveHeight(height: number): number {
    const scaleFactor = window.innerHeight / DESIGN_HEIGHT;
    return height * scaleFactor;
}

export function useResponsiveDimensions() {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {
        responsiveWidth: (width: number) => responsiveWidth(width),
        responsiveHeight: (height: number) => responsiveHeight(height),
    };
}
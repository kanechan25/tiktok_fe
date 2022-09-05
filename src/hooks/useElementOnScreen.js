import { useState, useEffect, useRef } from 'react';

const useElementOnScreen = (options) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const callbackFunction = (entries) => {
            const [entry] = entries;
            setIsVisible(entry.isIntersecting);
        };
        let observerRefValue = null;
        const observer = new IntersectionObserver(callbackFunction, options);
        if (containerRef.current) {
            observer.observe(containerRef.current);
            observerRefValue = containerRef.current;
        }
        return () => {
            if (observerRefValue) {
                observer.unobserve(observerRefValue);
            }
        };
    }, [containerRef, options]);
    return [containerRef, isVisible];
};
// const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 1.0,
// };
export default useElementOnScreen;

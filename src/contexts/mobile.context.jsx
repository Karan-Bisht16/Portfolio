import { createContext, useEffect, useState, useCallback } from 'react';
// Importing config
import constantsJSON from '../config/constants.config.json';

export const MobileContext = createContext();
export const MobileProvider = ({ children }) => {
    const { mobileBreakpoint } = constantsJSON;

    // Initialize state using matchMedia for efficiency
    const [isMobile, setIsMobile] = useState(() =>
        window.matchMedia(`(max-width: ${mobileBreakpoint}px)`).matches
    );

    const handleResize = useCallback(() => {
        const matches = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`).matches;
        setIsMobile((prev) => (prev !== matches ? matches : prev));
    }, [mobileBreakpoint]);

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);
        mediaQuery.addEventListener('change', handleResize);

        return () => mediaQuery.removeEventListener('change', handleResize);
    }, [handleResize]);

    return (
        <MobileContext.Provider value={{ isMobile }}>
            {children}
        </MobileContext.Provider>
    );
};
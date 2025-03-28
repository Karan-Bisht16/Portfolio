import { createContext, useEffect, useState, useCallback } from 'react';
// Importing config
import constantsJSON from '../config/constants.config.json';

export const SidebarContext = createContext();
export const SidebarProvider = ({ children }) => {
    const { sidebarWidth, sidebarMultiplier } = constantsJSON;
    const [sidebarState, setSidebarState] = useState(false);
    const [sidebarContent, setSidebarContent] = useState([]);

    // Initialize state using matchMedia for efficiency
    const [goFullScreen, setGoFullScreen] = useState(() =>
        window.matchMedia(`(max-width: ${sidebarWidth * sidebarMultiplier}px)`).matches
    );

    const handleResize = useCallback(() => {
        const matches = window.matchMedia(`(max-width: ${sidebarWidth * sidebarMultiplier}px)`).matches;
        setGoFullScreen((prev) => (prev !== matches ? matches : prev));
    }, [sidebarWidth, sidebarMultiplier]);

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${sidebarWidth * sidebarMultiplier}px)`);
        mediaQuery.addEventListener('change', handleResize);

        return () => mediaQuery.removeEventListener('change', handleResize);
    }, [handleResize]);

    useEffect(() => {
        document.body.style.overflow = sidebarState && goFullScreen ? 'hidden' : 'auto';
    }, [sidebarState, goFullScreen]);

    const openSidebar = (data) => {
        setSidebarState(true);
        setSidebarContent(data);
    };

    const closeSidebar = () => {
        setSidebarState(false);
    };

    return (
        <SidebarContext.Provider value={{ sidebarState, sidebarContent, openSidebar, closeSidebar, goFullScreen }}>
            {children}
        </SidebarContext.Provider>
    );
};
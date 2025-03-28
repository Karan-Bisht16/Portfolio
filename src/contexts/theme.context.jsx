import { createContext, useEffect, useState } from 'react';

const commonProperties = {
    '--primary-highlight': '#6d28d9',
    '--logo-text': '#000000',
    '--logo-bg': '#ffffff',
    '--dot-bg': '#d1d5db',
    '--navbar-social-links-text': '#ffffff',
    '--sidebar-border': '#6b7280',
    '--footer-heart': '#b91c1c',
    '--footer-divider': '#6b7280',
    '--footer-caption': 'var(--hero-caption)',
    '--contact-icon': '#ffffff',
    '--contact-cta-text': '#ffffff',
    '--contact-cta-bg': '#ffffff',
    '--project-locked-text': '#ffffff',
    '--project-gallery-img-text': '#ffffff',
    '--project-gallery-img-bg': 'rgb(0 0 0 / 0.6)',
    '--project-gallery-ctrls-text': '#ffffff',
    '--project-gallery-ctrls-bg': 'rgb(0 0 0 / 0.5)',
    '--project-gallery-ctrls-hover': 'rgb(0 0 0 / 0.7)',
    '--project-gallery-modal-bg': 'rgb(0 0 0 / 0.9)',
};

const lightThemeProperties = {
    '--primary-text': '#1e293b',
    '--primary-bg': '#e5e7eb',
    '--secondary-text': '#0f172a',
    '--secondary-bg': '#f3f4f6',
    '--tertiary-text': '#111827',
    '--quaternary-text': '#4b5563',

    '--theme-btn-text': '#fde047',

    '--navbar-social-nav-hover': '#000000',
    '--navbar-social-links-hover': '#1e293b',
    '--navbar-text': '#0f172a',
    '--navbar-mobile-bg': '#e5e7eb',

    '--sidebar-text': '#4b5563',
    '--sidebar-default-bg': '#f3f4f6',
    '--sidebar-project-bg': '#f9fafb',
    '--sidebar-caption': '#6b7280',
    '--sidebar-subtitle': '#374151',
    '--sidebar-tagline': '#374151',
    '--sidebar-with-label-text': '#374151',

    '--footer-link': '#1f2937',
    '--footer-ver-bg': '#f3f4f6',
    '--footer-icon': '#111827',
    '--footer-icon-hover': '#1f2937',

    '--hero-caption': '#1f2937',
    '--hero-text': '#4b5563',
    '--hero-cta': '#1f2937',

    '--contact-input-text': '#111827',
    '--contact-input-border': '#111827',
    '--contact-input-selection': '#c4b5fd',
    '--contact-label-text': '#6b7280',
    '--contact-label-bg': '#e5e7eb',
    '--contact-card-text': '#1f2937',

    '--project-secondary-text': '#4b5563',
    '--project-link-bg': '#ffffff',
    '--project-link-hover-bg': '#e5e7eb',
};

const darkThemeProperties = {
    '--primary-text': '#ffffff',
    '--primary-bg': '#111827',
    '--secondary-text': '#ffffff',
    '--secondary-bg': '#000000',
    '--tertiary-text': '#ffffff',
    '--quaternary-text': '#9ca3af',

    '--navbar-social-nav-hover': '#d1d5db',
    '--navbar-social-links-hover': '#475569',
    '--navbar-text': '#ffffff',
    '--navbar-mobile-bg': '#000000',

    '--theme-btn-text': '#9ca3af',

    '--sidebar-text': '#d1d5db',
    '--sidebar-default-bg': '#1f2937',
    '--sidebar-project-bg': '#0d0d0d',
    '--sidebar-caption': '#9ca3af',
    '--sidebar-subtitle': '#d1d5db',
    '--sidebar-tagline': '#9ca3af',
    '--sidebar-with-label-text': '#ffffff',

    '--footer-link': '#9ca3af',
    '--footer-ver-bg': '#374151',
    '--footer-icon': '#9ca3af',
    '--footer-icon-hover': '#ffffff',

    '--hero-caption': '#9ca3af',
    '--hero-text': '#9ca3af',
    '--hero-cta': '#ffffff',

    '--contact-input-text': '#ffffff',
    '--contact-input-border': '#d1d5db',
    '--contact-input-selection': '#5b21b6',
    '--contact-label-text': '#9ca3af',
    '--contact-label-bg': '#111827',
    '--contact-card-text': '#ffffff',

    '--project-secondary-text': '#9ca3af',
    '--project-link-bg': 'rgb(255 255 255 / 0.05)',
    '--project-link-hover-bg': 'rgb(255 255 255 / 0.10)',
};

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('karan-bisht-portfolio-theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    });

    const applyTheme = (themeObj) => {
        Object.entries(themeObj).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value);
        });
    };

    useEffect(() => {
        applyTheme(theme === 'dark'
            ? { ...darkThemeProperties, ...commonProperties }
            : { ...lightThemeProperties, ...commonProperties });
    }, []);

    const handleToggleTheme = () => {
        setTheme((prev) => {
            const newTheme = prev === 'light' ? 'dark' : 'light';
            localStorage.setItem('karan-bisht-portfolio-theme', newTheme);
            applyTheme(newTheme === 'dark'
                ? { ...darkThemeProperties, ...commonProperties }
                : { ...lightThemeProperties, ...commonProperties });
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
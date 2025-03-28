import { useContext, useEffect, useState } from 'react';
import { Link as NavigateLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
// importing icons
import { FaBars, FaTimes } from 'react-icons/fa';
// importing config
import constantsJSON from '../config/constants.config.json';
import navbarJSON from '../config/navbar.config.json';
// importing contexts
import { ThemeContext } from '../contexts/theme.context';
import { MobileContext } from '../contexts/mobile.context';
import { SidebarContext } from '../contexts/sidebar.context';
// importing subcomponents
import Logo from './subcomponents/Logo';
import ToggleTheme from './subcomponents/ToggleTheme';

const SocialNav = (props) => {
    const { socialNav } = navbarJSON;
    const { style, iconSize } = props;

    const { theme } = useContext(ThemeContext);

    return (
        <>
            {socialNav.map(({ href, icon, text, download }, index) => (
                <a
                    key={index}
                    href={href}
                    download={download}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`flex items-center focus:outline-none ${style}`}
                    onMouseEnter={(e) => {
                        e.currentTarget.querySelector('lord-icon').setAttribute('trigger', 'loop');
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.querySelector('lord-icon').setAttribute('trigger', 'loop-on-hover');
                    }}
                >
                    {text}
                    <lord-icon
                        src={icon}
                        trigger='loop-on-hover'
                        stroke='bold'
                        colors={theme === 'dark' ? 'primary:white,secondary:white' : 'primary:#0f172a,secondary:#0f172a'}
                        style={{ height: iconSize, width: iconSize }}
                    />
                </a>
            ))}
        </>
    );
};

const NavBar = () => {
    const { pageNav } = navbarJSON;
    const { navbarHeight, sidebarWidthPx, transitionDuration, transitionDurationMs } = constantsJSON;

    const { isMobile } = useContext(MobileContext);
    const { sidebarState, goFullScreen } = useContext(SidebarContext);

    const location = useLocation();

    // State to manage the navigation menu (open/close)
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        document.body.style.overflow = nav ? 'auto' : 'hidden';
    };

    useEffect(() => {
        let lastScrollTop;
        const navbarContainer = document.getElementById('navbarContainer');
        window.addEventListener('scroll', () => {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                navbarContainer.style.top = `-${navbarHeight}`;
            } else {
                navbarContainer.style.top = '0';
            }
            lastScrollTop = scrollTop;
        });
    }, []);

    return (
        <div
            id='navbarContainer'
            style={{ transitionDuration: transitionDurationMs }}
            className='w-full fixed top-0 left-0 z-10 select-none transition-all ease-in-out'
        >
            <div
                style={{
                    height: navbarHeight,
                    width: goFullScreen ? '100%' : (sidebarState ? `calc(100% - ${sidebarWidthPx})` : '100%'),
                    transitionDuration: transitionDurationMs
                }}
                className='flex justify-between items-center fixed text-[--navbar-text] px-4 transition-all'
            >
                <NavigateLink to='/' className='focus:outline-none'>
                    <Logo />
                </NavigateLink>

                <div className='hidden md:inline-flex gap-4 items-center'>
                    <div role='group'>
                        {location.pathname === '/' && pageNav.map(({ link, text }, index) => (
                            <ScrollLink
                                key={index}
                                to={link}
                                smooth
                                duration={transitionDuration}
                                className={`text-sm font-medium px-4 py-2 border-[--tertiary-text]    
                                    ${index == 0 ? 'border-t-2 border-b-2 border-l-2 rounded-s-full' : (index == pageNav.length - 1 ? 'border-t-2 border-b-2 border-r-2 rounded-e-full' : 'border-2')}
                                cursor-pointer hover:text-[--navbar-social-links-text] hover:bg-[--navbar-social-links-hover]`}
                            >
                                {text}
                            </ScrollLink>
                        ))}
                    </div>
                    <SocialNav
                        style='gap-1.5 font-semibold ml-3 hover:text-[--navbar-social-nav-hover]'
                        iconSize={20}
                    />
                    <ToggleTheme mobile={false} />
                </div>

                <div
                    onClick={handleNav}
                    className={`${!isMobile && 'hidden'} fixed top-8 right-8 z-20 cursor-pointer'`}
                >
                    {nav
                        ? <FaTimes size={20} />
                        : <FaBars size={20} />
                    }
                </div>
                <AnimatePresence>
                    {nav &&
                        <motion.div
                            initial={{ opacity: 1, x: '100%' }}
                            animate={{ opacity: 1, x: '0%' }}
                            exit={{ opacity: 1, x: '100%' }}
                            transition={{ duration: transitionDuration / 1000, ease: 'easeInOut' }}
                            className={`flex h-screen w-full items-center ${!isMobile && 'hidden'} fixed inset-0
                            text-[--secondary-text] bg-[--navbar-mobile-bg]`}
                        >
                            <div className='flex flex-col justify-between items-center h-[60vh] w-full'>
                                <Logo style='text-7xl' />
                                <ul className='flex flex-col gap-6 justify-center items-center'>
                                    {pageNav.map(({ link, text }, index) => (
                                        <li
                                            key={index}
                                            className='text-3xl px-4 cursor-pointer hover:text-[--primary-highlight] hover:scale-125'
                                        >
                                            <ScrollLink
                                                onClick={handleNav}
                                                to={link}
                                                smooth
                                                duration={transitionDuration}
                                            >
                                                {text}
                                            </ScrollLink>
                                        </li>
                                    ))}
                                    <SocialNav
                                        style='gap-2 text-3xl capitalize px-4 hover:text-[--primary-highlight] hover:scale-125'
                                        iconSize={36}
                                    />
                                    <ToggleTheme mobile={true} />
                                </ul>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </div>
    );
};

export default NavBar;
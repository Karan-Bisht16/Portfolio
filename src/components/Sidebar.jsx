import { useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
// Importing icons
import { IoCloseOutline } from 'react-icons/io5';
import { FaLink } from 'react-icons/fa';
// Importing configs
import constantsJSON from '../config/constants.config.json';
// Importing contexts
import { SidebarContext } from '../contexts/sidebar.context';
// Importing subcomponents
import Dot from './subcomponents/Dot';

const projectPathRegex = /^\/project\/[^/]+$/;

const Sidebar = () => {
    const { sidebarWidthPx, transitionDuration } = constantsJSON;
    const { sidebarState, sidebarContent, closeSidebar, goFullScreen } = useContext(SidebarContext);
    const location = useLocation();

    const bgSidebar = useMemo(() => {
        if (projectPathRegex.test(location.pathname)) {
            return 'bg-[--sidebar-project-bg]';
        }
        return 'bg-[--sidebar-default-bg]';
    }, [location.pathname]);

    return (
        <motion.div
            initial={{ x: '100%' }}
            animate={{ x: sidebarState ? '0%' : '100%' }}
            transition={{ duration: transitionDuration / 1000, ease: [0.4, 0, 0.2, 1] }}
            style={{ width: goFullScreen ? '100%' : sidebarWidthPx }}
            className={`h-screen overflow-x-hidden overflow-y-auto fixed top-0 right-0 bottom-0 z-30 
            text-[--tertiary-text] ${bgSidebar} p-6`}
        >
            <button className='mb-6 focus:outline-none' onClick={closeSidebar}>
                <IoCloseOutline size={32} />
            </button>

            {sidebarContent?.map(({ caption, title, subtitle, url, tagline, body, displayWithLabel, displayWithoutLabel }, index) => (
                <div key={index} className='mb-6'>
                    <span className='text-sm font-normal leading-none text-[--sidebar-caption]'>{caption}</span>
                    <ol className='relative text-[--sidebar-text] ms-4 border-s-2 border-[--sidebar-border]'>
                        <li className='ms-4'>
                            <Dot style='!mt-2' />
                            <h3 className='text-xl font-semibold text-[--tertiary-text] mt-2'>{title}</h3>

                            <p className='flex text-base font-medium text-[--sidebar-subtitle] mt-1'>
                                {url ? (
                                    <a href={url} target='_blank' rel='noopener noreferrer' className='inline focus:outline-none'>
                                        {subtitle}
                                    </a>
                                ) : (
                                    subtitle
                                )}
                                {url && <FaLink size={12} className='inline ml-1 mb-1' />}
                            </p>

                            <p className='text-sm italic text-[--sidebar-tagline]'>{tagline}</p>

                            <p className='text-base font-normal leading-relaxed mt-2'>{body}</p>

                            {displayWithLabel &&
                                Object.entries(displayWithLabel).map(([label, value], index) => (
                                    <p key={index} className='mt-2'>
                                        <span className='font-semibold text-[--sidebar-with-label-text]'>{label}:&nbsp;</span>
                                        {value}
                                    </p>
                                ))}
                            {displayWithoutLabel?.map((text, index) => (
                                <p key={index} className='mt-1'>
                                    {text}
                                </p>
                            ))}
                        </li>
                    </ol>
                </div>
            ))}
        </motion.div>
    );
};

export default Sidebar;

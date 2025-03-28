import { useContext } from 'react';
// importing configs
import constantsJSON from '../config/constants.config.json';
// importing contexts
import { SidebarContext } from '../contexts/sidebar.context';
// importing components
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
    const { sidebarWidthPx, transitionDurationMs } = constantsJSON;
    const { sidebarState, goFullScreen } = useContext(SidebarContext);

    return (
        <div className='text-[--primary-text] bg-[--primary-bg]'>
            <div
                style={{
                    width: goFullScreen ? '100%' : (sidebarState ? `calc(100% - ${sidebarWidthPx})` : '100%'),
                    transitionDuration: transitionDurationMs
                }}
                className='transition-all'
            >
                <div className='flex flex-col h-screen text-[--primary-text] bg-[--primary-bg]'>
                    <div className='pt-24 md:pt-18 px-4 md:px-20 bg-[--secondary-bg]'>
                        <ol className='relative pb-[1.375rem] md:py-24 border-s-2 border-[--primary-highlight]'>
                            <Hero />
                        </ol>
                    </div>
                    <div name='about' className='flex-1 px-4 md:px-20'>
                        <div className='h-full relative border-s-2 border-[--primary-highlight]'>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center align-middle relative z-0 text-[--primary-text] bg-[--primary-bg]'>
                    <div className='mx-4 md:mx-20'>
                        <ol className='relative space-y-16 border-s-2 border-[--primary-highlight]'>
                            <About />
                            <Projects />
                            <Contact />
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
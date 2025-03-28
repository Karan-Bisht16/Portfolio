import { useContext, useState } from 'react';
// importing config
import aboutJSON from '../config/about.config.json';
import constantsJSON from '../config/constants.config.json';
// importing contexts
import { SidebarContext } from '../contexts/sidebar.context';
// importing subcomponents
import Dot from './sub-components/Dot';
import Heading from './sub-components/Heading';
import LazyImage from './sub-components/LazyImage';
// importing assets
import lowResProfilePicture from '/assets/img-profile-picture [low res].jpeg';
import highResProfilePicture from '/assets/img-profile-picture [high res].png';

const About = () => {
    const { heading, content, tabs, timelineCount } = aboutJSON;
    const { transitionDurationClass } = constantsJSON;

    const { openSidebar } = useContext(SidebarContext);
    const [active, setActive] = useState(0);

    return (
        <li className='ms-4 md:ms-6'>
            <Dot />
            <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
                <LazyImage
                    initialSrc={lowResProfilePicture}
                    finalSrc={highResProfilePicture}
                    alt='My profile picture'
                    style='hidden lg:flex w-full rounded-2xl'
                />
                <div className='relative lg:col-span-2'>
                    <Heading title={heading} style='!mt-0' />
                    <div className='max-w-screen-xl text-lg font-normal text-[--quaternary-text] my-2'>
                        {content.map((paragraph, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                        ))}
                    </div>
                    <div>
                        <ul className='flex flex-wrap font-medium text-center'>
                            {tabs.map(({ heading }, index) => (
                                <li key={index} className='text-[16px] me-2' role='presentation'>
                                    <button
                                        onClick={() => setActive(index)}
                                        className={`relative w-fit mr-8 my-4 select-none hover:after:w-full focus:outline-none 
                                        after:block after:h-[2.5px] after:mt-2.5 ${active == index ? 'after:w-[50%]' : 'after:w-0'} 
                                        after:bg-[--primary-highlight] after:transition-all after:ease-in-out after:${transitionDurationClass}`}
                                    >
                                        {heading}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        {tabs[active]?.list?.map(({ caption, heading }, index) =>
                            index <= timelineCount &&
                            <ol key={index} className='relative ms-4 border-s-2 border-[--primary-highlight]'>
                                <li className='pb-4 ms-4'>
                                    <Dot style='!mt-0.5' />
                                    <p className='text-xs text-[--primary-highlight]'>
                                        {caption}
                                    </p>
                                    <p className='font-normal text-[--quaternary-text]'>
                                        {heading}
                                    </p>
                                </li>
                            </ol>
                        )}
                        {tabs[active]?.list?.length > 0 &&
                            <button
                                onClick={() => openSidebar(tabs[active].list)}
                                className='mt-2 cursor-pointer select-none focus:outline-none'
                            >
                                {tabs[active]?.list?.length > timelineCount + 1 ? 'View more' : 'View details'}
                            </button>
                        }
                    </div>
                </div>
            </div>
        </li>
    );
};

export default About;
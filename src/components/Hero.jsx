import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
// importing icons
import { FaLongArrowAltDown } from 'react-icons/fa';
// importing config
import homeJSON from '../config/hero.config.json';
import constantsJSON from '../config/constants.config.json';
// importing contexts
import { ThemeContext } from '../contexts/theme.context';
// importing subcomponents
import Dot from './subcomponents/Dot';
import LazyImage from './subcomponents/LazyImage';
// importing assets
import lowResProfilePicture from '/assets/img-profile-picture [low res].jpeg';
import highResProfilePicture from '/assets/img-profile-picture [high res].png';

const Hero = () => {
    const { transitionDuration, transitionDurationClass } = constantsJSON;
    const { scrambleConfig, headline, tagline, bio, aboutBtnLabel } = homeJSON;
    const { characterSet, rotatingKeywords, defaultKeyword, scrambleSpeed, updateInterval, multiplier } = scrambleConfig;
    const { greeting, name } = headline;

    const { theme } = useContext(ThemeContext);

    const [valueIndex, setValueIndex] = useState(0);
    const maxLengthOfValue = rotatingKeywords[valueIndex].length;
    const spacingBetweenRotatingKeywords = maxLengthOfValue * scrambleSpeed * updateInterval * multiplier;

    // Change valueIndex at intervals to rotate through rotatingKeywords array
    useEffect(() => {
        const interval = setInterval(() => {
            setValueIndex((valueIndex + 1) % rotatingKeywords.length);
        }, spacingBetweenRotatingKeywords);
        return () => clearInterval(interval);
    }, [valueIndex, rotatingKeywords.length, spacingBetweenRotatingKeywords]);

    // Scramble text effect for element with id 'scrambledText'
    useEffect(() => {
        const element = document.querySelector('#scrambledText');
        let iteration = 0;
        const interval = setInterval(() => {
            element.innerText = rotatingKeywords[valueIndex].split('')
                .map((letter, index) => {
                    if (index < iteration) {
                        return rotatingKeywords[valueIndex][index];
                    }
                    return characterSet[Math.floor(Math.random() * characterSet.length)]
                }).join('');
            if (iteration >= rotatingKeywords[valueIndex].length) {
                clearInterval(interval);
            }
            iteration += 1 / updateInterval;
        }, scrambleSpeed);
    });

    // Default animation configuration for container elements
    const animation = (delay) => ({
        hidden: { x: -10, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.25, delay: delay } }
    });

    return (
        <li className='ms-4 md:ms-6 select-none'>
            <Dot />
            <div name='hero' className='lg:grid lg:grid-cols-3 lg:gap-16'>
                <div className='col-span-2 pt-2.5'>
                    <time className='text-md font-normal leading-none text-[--hero-caption]'>
                        &lt;start/&gt;
                    </time>
                    <motion.h1
                        variants={animation(0)}
                        initial='hidden'
                        animate='visible'
                        className='text-4xl lg:text-5xl font-semibold mt-2 lg:mt-0'
                    >
                        {greeting}
                        <span className='text-5xl lg:text-6xl font-bold text-[--primary-highlight]'>&nbsp;{name}</span>
                    </motion.h1>
                    <motion.h3
                        variants={animation(0.25)}
                        initial='hidden'
                        animate='visible'
                        className='text-xl lg:text-3xl font-normal text-[--hero-text] mt-2'
                    >
                        <span dangerouslySetInnerHTML={{ __html: tagline }} />
                        &nbsp;
                        <span id='scrambledText' className='text-2xl lg:text-4xl font-bold text-[--primary-text]'>
                            {defaultKeyword}
                        </span>
                    </motion.h3>
                    <motion.h3
                        dangerouslySetInnerHTML={{ __html: bio }}
                        variants={animation(0.5)}
                        initial='hidden'
                        animate='visible'
                        className='text-md lg:text-2xl font-normal text-[--hero-text]'
                    >
                    </motion.h3>
                    <motion.button
                        variants={animation(0.75)}
                        initial='hidden'
                        animate='visible'
                        className='flex items-center mt-4 lg:mt-6 select-none focus:outline-none'
                    >
                        <ScrollLink
                            to='about'
                            smooth
                            duration={transitionDuration}
                            className={`flex gap-2 items-center text-sm overflow-hidden relative font-medium text-[--hero-cta]
                            pl-5 pr-4 border-2 border-[--hero-cta] rounded-full shadow-sm cursor-pointer transition-all 
                            hover:opacity-90 hover:shadow-violet-500/50 hover:before:-translate-x-60 focus:outline-none 
                            before:opacity-10 before:h-16 before:w-6 before:absolute before:right-0 before:top-0 before:bg-[--hero-cta] 
                            before:translate-x-16 before:rotate-6 before:ease before:${transitionDurationClass}`}
                        >
                            <span className='pt-2 pb-2.5'>
                                {aboutBtnLabel}
                            </span>
                            <FaLongArrowAltDown size={20} />
                        </ScrollLink>
                    </motion.button>
                </div>
                <div className='hidden lg:flex justify-center items-center'>
                    <lord-icon
                        src='https://cdn.lordicon.com/vlycxjwx.json'
                        trigger='loop'
                        delay='1000'
                        stroke='bold'
                        colors={theme === 'dark' ? 'primary:white,secondary:white' : 'primary:#1e293b,secondary:#1e293b'}
                        style={{ width: '300px', height: '300px' }}
                    />
                </div>
                <motion.div
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.25, delay: 1 }}
                    className='mt-[1.375rem] mb-2.5'
                >
                    <LazyImage
                        initialSrc={lowResProfilePicture}
                        finalSrc={highResProfilePicture}
                        alt='My profile picture'
                        style='lg:hidden w-3/4 lg:w-72 xl:w-96 mx-auto rounded-2xl '
                    />
                </motion.div>
            </div>
        </li>
    );
};

export default Hero;
import { useContext } from 'react';
// importing icons
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
// importing config
import footerJSON from '../config/footer.config.json';
import constantsJSON from '../config/constants.config.json';
// importing contexts
import { SidebarContext } from '../contexts/sidebar.context';
// importing subcomponents
import Logo from './sub-components/Logo';

const ProjectMenu = (props) => {
    const { projects, style } = props;
    const { transitionDurationClass } = constantsJSON;

    return (
        <div className={`flex flex-col gap-2.5 ${style}`}>
            {projects?.list?.map(({ title, link }, index) => (
                <a
                    key={index}
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`relative w-fit hover:after:w-full focus:outline-none 
                    after:block after:h-[1px] after:w-0 after:bg-[--footer-link] after:transition-all after:ease-in-out after:${transitionDurationClass}`}
                >
                    {title}
                </a>
            ))}
        </div>
    );
};

const SocialMenu = (props) => {
    const { socials, style } = props;
    const { transitionDurationClass } = constantsJSON;

    return (
        <div className={`flex flex-col gap-2.5 ${style}`}>
            {socials?.list?.map(({ title, link }, index) => (
                <a
                    key={index}
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`relative w-fit hover:after:w-full focus:outline-none 
                    after:block after:h-[1px] after:w-0 after:bg-[--footer-link] after:transition-all after:ease-in-out after:${transitionDurationClass}`}
                >
                    {title}
                </a>
            ))}
        </div>
    );
};

const InspirationsGrid = (props) => {
    const { inspirations, style } = props;
    const { transitionDurationClass } = constantsJSON;

    const midIndex = Math.ceil(inspirations?.resources?.length / 2);
    const firstHalf = inspirations?.resources?.slice(0, midIndex);
    const secondHalf = inspirations?.resources?.slice(midIndex);

    return (
        <>
            {[firstHalf, secondHalf].map((half, idx) => (
                <div key={idx} className={`flex flex-col gap-2.5 ${style}`}>
                    {half?.map(({ title, link }, index) => (
                        <a
                            key={index}
                            href={link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={`relative w-fit hover:after:w-full focus:outline-none 
                            after:block after:h-[1px] after:w-0 after:bg-[--footer-link] after:transition-all after:ease-in-out after:${transitionDurationClass}`}
                        >
                            {title}
                        </a>
                    ))}
                </div>
            ))}
        </>
    );
};

const Footer = () => {
    const { sidebarWidthPx, transitionDurationClass, transitionDurationMs } = constantsJSON;
    const { version, updatedAt, socials, projects, inspirations, profile } = footerJSON;
    const { name, email, tagline } = profile;

    const { sidebarState, goFullScreen } = useContext(SidebarContext);

    const iconMap = { FaInstagram, FaTwitter, FaGithub, FaLinkedin };

    return (
        <footer
            style={{ width: goFullScreen ? '100%' : (sidebarState ? `calc(100% - ${sidebarWidthPx})` : '100%') }}
            className='w-full text-[--footer-link] bg-[--primary-bg] px-6 pt-4'
        >
            <div className='grid grid-cols-2 md:grid-cols-11'>
                <div className='col-span-3 grid grid-cols-8 md:block items-end mb-4 md:mb-0'>
                    <Logo style='col-span-3 w-[45.075px] md:w-[62.513px] !ml-0 mb-2' />
                    <p
                        dangerouslySetInnerHTML={{ __html: tagline }}
                        className='col-span-5 md:hidden text-5xl font-bold text-[--tertiary-text]'
                    />
                    <div className='col-span-3 md:hidden'>
                        <span className='text-xs font-medium text-[--tertiary-text] bg-[--footer-ver-bg] px-4 py-1.5 border-2 border-[--tertiary-text] rounded-full'>
                            {version}
                        </span>
                    </div>
                    <a
                        href={`mailto:${email}`}
                        className={`md:hidden relative w-fit text-md font-medium text-[--footer-link] mt-2 hover:after:w-full focus:outline-none 
                        after:block after:h-[1px] after:w-0 after:bg-[--footer-link] after:transition-all after:ease-in-out after:${transitionDurationClass}`}
                    >
                        {email}
                    </a>
                    <div className='col-span-full hidden md:flex md:gap-4 items-center mt-4 mb-[1.375rem] md:mb-0 md:mt-6'>
                        <span className='py-1.5 px-4 text-xs font-medium text-[--tertiary-text] bg-[--footer-ver-bg] border-2 border-[--tertiary-text] rounded-full'>
                            {version}
                        </span>
                        <span className='text-sm font-medium text-[--tertiary-text]'>
                            {updatedAt}
                        </span>
                    </div>
                </div>

                <div className='col-span-2 md:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-x-12 md:gap-x-0 md:pt-8'>
                    <p className='col-span-1 text-lg font-medium text-[--tertiary-text] mt-4 md:mt-0 mb-4'>
                        {projects.heading}
                    </p>
                    <p className='col-span-1 md:hidden text-lg font-medium text-[--tertiary-text] mt-4 md:mt-0 mb-4'>
                        {socials.heading}
                    </p>
                    <ProjectMenu
                        projects={projects}
                        style='md:hidden'
                    />
                    <SocialMenu
                        socials={socials}
                        style='md:hidden'
                    />
                    <p className='col-span-2 text-lg font-medium text-[--tertiary-text] mt-8 md:mt-0 mb-4'>
                        {inspirations.heading}
                    </p>
                    <ProjectMenu
                        projects={projects}
                        style='hidden md:flex'
                    />
                    <InspirationsGrid
                        inspirations={inspirations}
                    />
                </div>

                <div className='col-span-3 hidden md:flex flex-col gap-3 md:pt-8'>
                    <p
                        dangerouslySetInnerHTML={{ __html: tagline }}
                        className='text-5xl font-bold text-[--tertiary-text]'
                    />
                    <a
                        href={`mailto:${email}`}
                        className={`relative w-fit hover:after:w-full focus:outline-none 
                        after:block after:h-[1px] after:w-0 after:bg-[--footer-link] after:transition-all after:ease-in-out after:${transitionDurationClass}`}
                    >
                        {email}
                    </a>
                </div>
            </div>
            <div className='w-full mt-8'>
                <div className='border-[1px] border-[--footer-divider]' />
                <div className='flex justify-between items-center py-8'>
                    <div className='flex flex-col'>
                        <p>
                            &copy;{new Date().getFullYear()} {name}
                        </p>
                        <p className='flex gap-1.5 items-center'>
                            Made with <FaHeart className='text-[--footer-heart] size-5' />
                        </p>
                    </div>
                    <div className='hidden md:flex gap-6'>
                        {socials?.list?.map(({ icon, link }, index) => {
                            const IconComponent = iconMap[icon];

                            return (
                                <a
                                    key={index}
                                    href={link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    style={{ transitionDuration: transitionDurationMs }}
                                    className={`text-2xl p-3 border-[1px] border-[--footer-icon] rounded-full 
                                    cursor-pointer transition-all 
                                    hover:text-[--footer-icon-hover] hover:border-[--footer-icon-hover] hover:scale-105`}
                                >
                                    <IconComponent />
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
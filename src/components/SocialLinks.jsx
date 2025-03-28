// importing icons
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
// importing config
import navbarJSON from '../config/navbar.config.json';
import constantsJSON from '../config/constants.config.json';

const SocialLinks = () => {
    const { transitionDurationMs } = constantsJSON;
    const { socialLinks } = navbarJSON;

    const iconMap = { FaGithub, FaTwitter, FaInstagram, HiOutlineMail };

    return (
        <div className='hidden sm:flex flex-col fixed top-[35%] right-0 z-30 text-[--primary-text] cursor-pointer select-none'>
            <ul>
                {socialLinks.map(({ title, icon, href, download }, index) => {
                    const IconComponent = iconMap[icon];

                    return (
                        <li
                            key={index}
                            style={{ transitionDuration: transitionDurationMs }}
                            className={`h-14 w-[180px] flex justify-between items-center bg-white/70 dark:bg-violet-700/10 px-4 mr-[-120px] 
                            ${index === 0 ? 'rounded-tl-md' : (index === socialLinks.length - 1 ? 'rounded-bl-md' : '')}
                            transition-[margin-left] hover:ml-[-105px] hover:rounded-md`}
                        >
                            <a
                                href={href}
                                className='flex justify-between items-center w-full font-medium pr-5 focus:outline-none'
                                download={download}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <IconComponent size={30} />{title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SocialLinks;
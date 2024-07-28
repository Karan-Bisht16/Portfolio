import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
    const links = [
        {
            icon: <FaLinkedin size={30} />,
            child: (<><FaLinkedin size={30} />LinkedIn</>),
            href: "https://www.linkedin.com/in/karan-bisht1603/",
            style: "rounded-tl-md",
        },
        {
            icon: <FaGithub size={30} />,
            child: (<><FaGithub size={30} />GitHub</>),
            href: "https://github.com/Karan-Bisht16",
        },
        {
            icon: <HiOutlineMail size={30} />,
            child: (<><HiOutlineMail size={30} />Mail</>),
            href: "mailto:karan161003@gmail.com",
        },
        {
            icon: <BsFillPersonLinesFill size={30} />,
            child: (<><BsFillPersonLinesFill size={30} />Resume</>),
            href: "../src/assets/Karan Bisht - Resume.pdf",
            style: "rounded-bl-md",
            download: true,
        },
    ];

    return (
        <>
            <div className="hidden sm:flex flex-col top-[35%] right-0 fixed z-30 text-slate-800 dark:text-white">
                <ul>
                    {links.map(({ child, href, style, download }, index) => (
                        <li
                            key={index}
                            className={
                                "flex justify-between items-center w-40 h-14 px-4 mr-[-100px] bg-white/70 dark:bg-violet-700/10 hover:ml-[-85px] hover:rounded-md " + style
                            }
                        >
                            <a
                                href={href}
                                className="flex justify-between items-center pr-5 w-full font-medium "
                                download={download}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {child}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="sm:hidden w-full h-24 pb-4 flex gap-2 justify-center items-end absolute bottom-0 z-30 text-slate-800 dark:text-white bg-gradient-to-b from-transparent to-violet-200 dark:to-black">
                {links.map(({ icon, href, download }, index) => (
                    <a
                        key={index}
                        href={href}
                        download={download}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {icon}
                    </a>
                ))}
            </div>
        </>
    );
};

export default SocialLinks;

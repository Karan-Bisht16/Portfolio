import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
    const links = [
        {
            id: 1,
            child: (
                <><FaLinkedin size={30} />LinkedIn</>
            ),
            href: "https://www.linkedin.com/in/karan-bisht1603/",
            style: "rounded-tl-md",
        },
        {
            id: 2,
            child: (
                <><FaGithub size={30} />GitHub</>
            ),
            href: "https://github.com/Karan-Bisht16",
        },
        {
            id: 3,
            child: (
                <><HiOutlineMail size={30} />Mail</>
            ),
            href: "mailto:karan161003@gmail.com",
        },
        {
            id: 4,
            child: (
                <><BsFillPersonLinesFill size={30} />Resume</>
            ),
            href: "../src/assets/Karan Bisht - Resume.pdf",
            style: "rounded-bl-md",
            download: true,
        },
    ];

    return (
        <div className="hidden sm:flex flex-col top-[35%] right-0 fixed text-slate-800 dark:text-white">
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li
                        key={id}
                        className={
                            "flex justify-between items-center w-40 h-14 px-4 mr-[-100px] bg-white/70 dark:bg-violet-600/10 hover:ml-[-85px] hover:rounded-md " + style
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
    );
};

export default SocialLinks;

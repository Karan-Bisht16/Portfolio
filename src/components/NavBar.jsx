import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import ToggleTheme from "./subComponents/ToggleTheme";

const NavBar = (props) => {
    const { theme, handleToggleTheme } = props;
    // State to manage the navigation menu (open/close)
    const [nav, setNav] = useState(false);
    // Array of page navigation links
    const pageNavigationLinks = [
        { link: "about" },
        { link: "projects" },
        { link: "tech stack" },
    ];
    // Array of social media links with icons and URLs
    const socialLinks = [
        {
            icon: "https://cdn.lordicon.com/mqwitsmv.json",
            href: "https://www.linkedin.com/in/karan-bisht1603/",
            text: "LinkedIn"
        },
        {
            icon: "https://cdn.lordicon.com/wzwygmng.json",
            href: "./assets/Karan Bisht - Resume.pdf",
            text: "Resume",
            download: true
        }
    ];

    return (
        <div className="select-none flex justify-between items-center w-full h-20 px-4 fixed text-slate-800 dark:text-white bg-gradient-to-b from-slate-300 to-transparent dark:from-black dark:to-transparent">
            <div className="text-3xl sm:text-5xl ml-2 p-2 rounded-xl bg-white select-none flex align-middle">
                <span className="font-bold text-black">K
                    <span className="font-extrabold text-violet-700">.</span>
                </span>
            </div>

            <div className="hidden md:inline-flex items-center gap-4">
                <div role="group">
                    <Link to="about" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-2 border-gray-900 rounded-s-full cursor-pointer hover:bg-slate-800 hover:text-white focus:z-10 focus:bg-slate-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-slate-600 dark:focus:bg-gray-700">
                        About
                    </Link>
                    <Link to="projects" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t-2 border-b-2 border-gray-900 cursor-pointer hover:bg-slate-800 hover:text-white focus:z-10 focus:bg-slate-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-slate-600 dark:focus:bg-gray-700">
                        Projects
                    </Link>
                    <Link to="tech stack" type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-2 border-gray-900 rounded-e-full cursor-pointer hover:bg-slate-800 hover:text-white focus:z-10 focus:bg-slate-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-slate-600 dark:focus:bg-gray-700">
                        Tech Stack
                    </Link>
                </div>
                {socialLinks.map(({ href, icon, text, download }, index) => (
                    <a key={index} href={href} download={download} target="_blank" rel="noreferrer" className="font-semibold flex items-center gap-1.5 ml-3">
                        {text}
                        {theme === "dark" ?
                            <lord-icon src={icon} trigger="loop-on-hover" stroke="bold" colors="primary:white,secondary:white" style={{ height: "20px", width: "20px" }} />
                            :
                            <lord-icon src={icon} trigger="loop-on-hover" stroke="bold" colors="primary:#0f172a,secondary:#0f172a" style={{ height: "20px", width: "20px" }} />
                        }
                    </a>
                ))}
                <ToggleTheme mobile={false} theme={theme} handleToggleTheme={handleToggleTheme} />
            </div>

            <div onClick={() => setNav(!nav)} className="cursor-pointer mr-4 z-20 md:hidden">
                {nav ? <FaTimes size={20} className="text-violet-700" /> : <FaBars size={20} />}
            </div>
            {nav && (
                <ul className="flex md:hidden flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-500 via-slate-300 to-slate-100 dark:bg-gradient-to-b dark:from-gray-950 dark:via-slate-950 dark:to-slate-800">
                    {pageNavigationLinks.map(({ link }, index) => (
                        <li key={index} className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-violet-700 hover:scale-125">
                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={200}>
                                {link}
                            </Link>
                        </li>
                    ))}
                    {socialLinks.map(({ href, icon, text, download }, index) => (
                        <a key={index} href={href} download={download} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-4 cursor-pointer capitalize py-6 text-4xl hover:text-violet-700 hover:scale-125">
                            {text}
                            {theme === "dark" ?
                                <lord-icon src={icon} trigger="loop-on-hover" stroke="bold" colors="primary:white,secondary:white" style={{ height: "40px", width: "40px" }} />
                                :
                                <lord-icon src={icon} trigger="loop-on-hover" stroke="bold" colors="primary:#0f172a,secondary:#0f172a" style={{ height: "40px", width: "40px" }} />
                            }
                        </a>
                    ))}
                    <li key={pageNavigationLinks.length + socialLinks.length} className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-violet-700 hover:scale-125">
                        <Link onClick={() => setNav(!nav)} to="contact" smooth duration={200}>
                            Contact
                        </Link>
                    </li>
                    <ToggleTheme mobile={true} theme={theme} handleToggleTheme={handleToggleTheme} />
                </ul>
            )}
        </div>
    );
}
export default NavBar;
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import ToggleTheme from "./ToggleTheme";

function NavBar(props) {
    const { theme, handleToggleTheme } = props;
    const [nav, setNav] = useState(false);

    const links = [
        { id: 1, link: "home" },
        { id: 2, link: "about" },
        { id: 3, link: "portfolio" },
        { id: 4, link: "tech stack" },
        { id: 5, link: "contact" },
    ];  

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 z-10 fixed bg-transparent text-slate-800 dark:text-white">
            <h1 className="text-3xl sm:text-5xl font-extrabold ml-2 mb-2 select-none">
                &lt;
                <span className="font-light">Karan</span>
                <span className="font-medium text-violet-700">/</span>
                &gt;
            </h1>

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium select-none transition ease-in-out duration-200 hover:text-violet-700 hover:scale-125"
                    >
                        <Link to={link} smooth duration={200}>
                            {link}
                        </Link>
                    </li>
                ))}
                <ToggleTheme mobile={false} theme={theme} handleToggleTheme={handleToggleTheme} />
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-20 md:hidden"
            >
                {nav ? <FaTimes size={20} className="text-violet-700" /> : <FaBars size={20} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-violet-200 via-violet-100 to-white dark:bg-gradient-to-b dark:from-black dark:to-violet-950">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-violet-700 hover:scale-125"
                        >
                            <Link
                                onClick={() => setNav(!nav)}
                                to={link}
                                smooth duration={200}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                    <ToggleTheme mobile={true} theme={theme} handleToggleTheme={handleToggleTheme} />
                </ul>
            )}
        </div>
    );
};

export default NavBar;

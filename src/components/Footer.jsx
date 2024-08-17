import { FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
    // Array of social media links with icons and URLs
    const socialLinks = [
        {
            icon: <FaInstagram />,
            href: "https://instagram.com/karan_b1603"
        },
        {
            icon: <FaTwitter />,
            href: "https://twitter.com/karan_b1603"
        },
        {
            icon: <FaGithub />,
            href: "https://github.com/Karan-Bisht16"
        },
        {
            icon: <FaLinkedin />,
            href: "https://www.linkedin.com/in/karan-bisht-583918254/"
        },
    ];

    return (
        <footer className="select-none px-6 pt-6 pb-8 w-full text-slate-800 dark:text-white bg-gradient-to-t from-slate-400 to-gray-100 dark:from-black dark:to-indigo-950">
            <div className="flex justify-between items-end">
                <div>
                    <div className="w-[45.075px] sm:w-[62.513px] text-3xl sm:text-5xl p-2 mb-1 rounded-xl bg-white select-none flex align-middle">
                        <span className="font-bold text-black">K
                            <span className="font-extrabold text-violet-700">.</span>
                        </span>
                    </div>
                    <p>&copy; {new Date().getFullYear()} Karan Bisht</p>
                    <p className="flex gap-1 items-center">Made with <FaHeart className="text-red-700" /></p>
                </div>
                <div className="flex flex-col gap-1.5 sm:gap-2">
                    <p className="text-xl sm:text-3xl font-semibold text-right">Contact</p>
                    <div className="flex gap-2 sm:gap-2.5">
                        {socialLinks.map(({ icon, href }, index) => (
                            <a key={index} href={href} target="_blank" rel="noreferrer" className="text-3xl sm:text-4xl">
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
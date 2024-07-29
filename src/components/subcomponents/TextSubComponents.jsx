import { motion } from "framer-motion";

export const Heading = ({ title }) => {
    return (
        <motion.h3
            initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}
            className="font-semibold mb-4 select-none text-4xl sm:text-5xl pt-1 sm:pt-0"
        >
            {title}
        </motion.h3>
    );
};

export const Paragraph = ({ content }) => {
    return (
        <motion.p
            initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}
            className="max-w-screen-xl my-2 text-xl font-normal select-none text-gray-600 dark:text-gray-400"
        >
            {content}
        </motion.p>
    );
};

export const ButtonLink = ({ link, text }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="w-1/2 px-6 my-3 text-center hover:text-violet-700">
            {text}
        </a>
    );
}

export const ButtonIcon = ({ link, text, icon, sx }) => {
    return (
        <div className="group/link relative">
            <a href={link} target="_blank" rel="noreferrer">
                <div className="scale-150 text-white bg-violet-800 hover:bg-violet-950 rounded-full p-2">
                    {icon}
                </div>
            </a>
            <div className={`hidden w-max absolute ${sx} group-hover/link:block`}>
                <div className="w-0 h-0 mt-2 mx-auto border-l-[5px] border-l-transparent border-b-[7.5px] border-b-gray-700 border-r-[5px] border-r-transparent"></div>
                <div className="px-2 rounded-lg bg-gray-700">
                    {text}
                </div>
            </div>
        </div>
    );
}
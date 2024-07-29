import { motion } from "framer-motion";
import { MdWeb } from "react-icons/md";
import { ButtonIcon } from "./TextSubComponents";
import { FaCode } from "react-icons/fa";

function ProjectCard({ portfolio }) {
    const { src, websiteLink, githubRepositoryLink, content } = portfolio;

    return (
        <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="select-none border-2 border-slate-800 rounded-lg shadow-md hover:shadow-[0px_0px_20px_2.5px_#00000024]"
        >
            <div className="group/card relative">
                <img
                    src={src} alt=""
                    className="relative z-10 rounded-md rounded-tr-md border-slate-800"
                />
                <div className="absolute top-0 left-0 z-20 w-full h-full flex gap-10 justify-center items-center bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-75">
                    <ButtonIcon link={websiteLink} text="Website Demo" icon={<MdWeb />} sx="-left-[44px]" />
                    <ButtonIcon link={githubRepositoryLink} text="GitHub Repository" icon={<FaCode />} sx="-left-[57px]" />
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    className="absolute top-0 left-0 w-full h-full hidden p-2 bg-gradient-to-b from-gray-200 to-violet-400 dark:from-slate-800 dark:to-black
                    sm:rounded-tr-lg sm:rounded-bl-none
                    rounded-bl-lg rounded-br-lg 
                    sm:group-hover/card:translate-x-full 
                    group-hover/card:block group-hover/card:z-30 
                    sm:group-hover/card:hidden 
                    sm:group-hover/card:translate-y-0 
                    group-hover/card:translate-y-[98%]"
                >
                    {content}
                </motion.div>
            </div>
        </motion.div >
    );
};

export default ProjectCard;
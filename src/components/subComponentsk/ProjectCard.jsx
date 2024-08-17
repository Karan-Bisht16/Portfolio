import { motion } from "framer-motion";
import { ButtonIcon } from "./TextSubComponents";

const ProjectCard = ({ project }) => {
    const { title, date, src, websiteLink, githubRepositoryLink, content } = project;

    return (
        <motion.div
            initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-4 border-2 border-slate-800 rounded-lg my-2 sm:my-0 lg:my-4"
        >
            <div className="relative flex lg:hidden flex-col justify-center bg-gray-50 rounded-lg">
                <div className="absolute inset-0 bg-center rounded-lg dark:bg-black"></div>
                <div className="group/card relative m-0 flex h-full w-full shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                    <div className="z-10 h-full w-full overflow-hidden opacity-7 transition duration-300 ease-in-out group-hover:opacity-90 dark:opacity-70">
                        <img src={src} alt="project img" className="object-cover min-h-full relative z-10 rounded-lg rounded-tr-md lg:rounded-tr-none lg:rounded-br-none border-slate-800" />
                        <div className="group/subCard absolute top-0 left-0 z-20 w-full h-full flex gap-6 justify-center items-center bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-95">
                            <ButtonIcon link={websiteLink} text="Website Demo" icon={
                                <lord-icon
                                    src="https://cdn.lordicon.com/jdsvypqr.json"
                                    trigger="loop-on-hover"
                                    stroke="bold"
                                    colors="primary:#ffffff,secondary:#7c3aed"
                                    style={{ width: "32px", height: "32px" }}
                                />
                            } sx="-left-[32px]" />
                            <ButtonIcon link={githubRepositoryLink} text="GitHub Repository" icon={
                                <lord-icon
                                    src="https://cdn.lordicon.com/kqvibaec.json"
                                    trigger="loop-on-hover"
                                    stroke="bold"
                                    colors="primary:#ffffff,secondary:#7c3aed"
                                    style={{ width: "40px", height: "40px" }}
                                />
                            } sx="-left-[46px]" />
                        </div>
                    </div>
                    <div className="absolute bottom-0 z-20 m-0 pb-2 ps-4 transition duration-300 ease-in-out group-hover/card:-translate-y-1 group-hover/card:translate-x-1 group-hover/card:scale-110">
                        <h1 className="font-serif text-xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">{title}</h1>
                        <h1 className="text-xs font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">{date}</h1>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.1 }}
                        className="hidden text-md sm:text-lg md:text-xl absolute bottom-0 left-0 w-full h-auto pt-2 p-3 bg-slate-300 dark:bg-slate-950
                                rounded-bl-lg rounded-br-lg  group-hover/card:block group-hover/card:z-50  group-hover/card:translate-y-[98%]">
                        {content}
                    </motion.div>
                </div>
            </div>
            <div className="hidden lg:block select-none border-2 border-slate-800 rounded-lg md:border-none shadow-md hover:shadow-[0px_0px_20px_2.5px_#00000024]">
                <div className="group/card relative">
                    <img src={src} alt="project img" className="relative z-10 rounded-md rounded-tr-md lg:rounded-tr-none lg:rounded-br-none border-slate-800" />
                    <div className="absolute top-0 left-0 z-20 w-full h-full flex gap-6 justify-center items-center bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-95">
                        <ButtonIcon link={websiteLink} text="Website Demo" icon={
                            <lord-icon
                                src="https://cdn.lordicon.com/jdsvypqr.json"
                                trigger="loop-on-hover"
                                stroke="bold"
                                colors="primary:#ffffff,secondary:#7c3aed"
                                style={{ width: "32px", height: "32px" }}
                            />
                        } sx="-left-[32px]" />
                        <ButtonIcon link={githubRepositoryLink} text="GitHub Repository" icon={
                            <lord-icon
                                src="https://cdn.lordicon.com/kqvibaec.json"
                                trigger="loop-on-hover"
                                stroke="bold"
                                colors="primary:#ffffff,secondary:#7c3aed"
                                style={{ width: "40px", height: "40px" }}
                            />
                        } sx="-left-[46px]" />
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex col-span-3 items-center px-4 border-l-2 border-slate-800 rounded-tr-md rounded-br-md bg-slate-300 dark:bg-[#263345]">
                <div>
                    <p className="lg:text-lg xl:text-2xl font-semibold">{title}</p>
                    <p className="lg:text-sm xl:text-lg font-normal">{date}</p>
                    <p className="lg:text-xs xl:text-sm">{content}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
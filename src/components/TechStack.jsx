import { FaNodeJs, FaHtml5, FaJs, FaCss3Alt, FaReact, FaJava, FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa";
import { SiExpress, SiVercel, SiMongodb, SiRedux, SiReactrouter, SiJquery } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Dot from "./subComponents/Dot";
import SkillCard from "./subComponents/SkillCard";
import { Heading, Paragraph } from "./subComponents/TextSubComponents";

const TechStack = () => {
    // Array of tech skills with icons, titles, and styles
    const techs = [
        { src: <FaHtml5 />, title: "HTML", color: "text-orange-500", shadow: "shadow-orange-500" },
        { src: <FaCss3Alt />, title: "CSS", color: "text-[#214ce5]", shadow: "shadow-[#214ce5]" },
        { src: <FaJs />, title: "JavaScript", color: "text-yellow-400", shadow: "shadow-yellow-400" },
        { src: <FaBootstrap />, title: "Bootstrap", color: "text-[#8d1aff]", shadow: "shadow-[#8d1aff]" },
        { src: <SiMongodb />, title: "MongoDB", color: "text-green-500", shadow: "shadow-green-500" },
        { src: <SiExpress />, title: "Express", color: "text-gray-300", shadow: "shadow-gray-300" },
        { src: <FaReact />, title: "React", color: "text-[#58d2f3]", shadow: "shadow-[#58d2f3]" },
        { src: <FaNodeJs />, title: "Node JS", color: "text-[#7fc728]", shadow: "shadow-[#7fc728]" },
        { src: <SiVercel />, title: "Vercel", color: "text-white", shadow: "shadow-white" },
        { src: <FaGitAlt />, title: "Git", color: "text-[#f05639]", shadow: "shadow-[#f05639]" },
        { src: <FaGithub />, title: "GitHub", color: "text-black", shadow: "shadow-black" },
        { src: <RiTailwindCssFill />, title: "Tailwind CSS", color: "text-[#3ebff8]", shadow: "shadow-[#3ebff8]" },
        { src: <SiJquery />, title: "jQuery", color: "text-[#0f77b6]", shadow: "shadow-[#0f77b6]" },
        { src: <SiRedux />, title: "React Redux", color: "text-[#7a50be]", shadow: "shadow-[#7a50be]" },
        { src: <SiReactrouter />, title: "React Router", color: "text-[#f54855]", shadow: "shadow-[#f54855]" },
        { src: <FaJava />, title: "JAVA", color: "text-[#ed272c]", shadow: "shadow-[#ed272c]" },
    ];

    return (
        <li name="tech stack" className="select-none pt-4 sm:pt-16 mb-4 ms-4">
            <Dot />
            <div className="relative -top-4">
                <Heading title="Tech Stack" />
                <Paragraph content=
                    {`These are the technologies I've worked with:`}
                />
                <div className="max-w-screen-lg mx-auto w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ src, title, color, shadow }, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}
                            className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${shadow}`}
                        >
                            <SkillCard title={title} src={src} color={color} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </li>
    );
};

export default TechStack;

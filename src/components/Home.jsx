import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaLongArrowAltDown } from "react-icons/fa";
import Dot from "./subComponents/Dot";
import profileImage from "../assets/img-profile-image.png";

const Home = (props) => {
    const { theme } = props;
    const letters = `!#$%&0123456789?@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz|`;
    const values = ["websites", "ui/ux", "web apps"];
    const [valueIndex, setValueIndex] = useState(0);
    const maxLengthOfValue = values[valueIndex].length;
    const paceOfRandomWords = 40;
    const frequencyInterval = 5;
    const spacingBetweeenValues = maxLengthOfValue * paceOfRandomWords * frequencyInterval * 1.5;

    useEffect(() => {
        // Change valueIndex at intervals to rotate through values array
        const interval = setInterval(() => {
            setValueIndex((valueIndex + 1) % values.length);
        }, spacingBetweeenValues);
        return () => clearInterval(interval);
    }, [valueIndex, values.length, spacingBetweeenValues]);

    // Scramble text effect for element with id "scrambledText"
    useEffect(() => {
        const element = document.querySelector("#scrambledText");
        let iteration = 0;
        const interval = setInterval(() => {
            element.innerText = values[valueIndex].split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return values[valueIndex][index];
                    }
                    return letters[Math.floor(Math.random() * letters.length)]
                }).join("");
            if (iteration >= values[valueIndex].length) {
                clearInterval(interval);
            }
            iteration += 1 / frequencyInterval;
        }, paceOfRandomWords);
    });

    // Default animation configuration for container elements
    const animateContainer = (delay) => ({
        hidden: { x: -20, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
    });

    return (
        <li className="mb-10 ms-4">
            <Dot />
            <div name="home" className="lg:grid lg:grid-cols-3 lg:gap-16 select-none">
                <div className="col-span-2">
                    <time className="text-md font-normal leading-none text-gray-800 dark:text-gray-400">&lt;start/&gt;</time>
                    <motion.h3 variants={animateContainer(0)} initial="hidden" animate="visible" className="text-4xl sm:text-5xl font-semibold">
                        Hi, my name is
                        <span className="text-5xl sm:text-6xl font-bold text-violet-700"> Karan Bisht</span>
                    </motion.h3>
                    <motion.p variants={animateContainer(0.25)} initial="hidden" animate="visible" className="mt-2 text-xl sm:text-3xl font-normal text-gray-600 dark:text-gray-400">
                        I <i>design</i> and develop <span id="scrambledText" className="font-bold text-2xl sm:text-4xl text-slate-800 dark:text-white">Websites</span>
                    </motion.p>
                    <motion.p variants={animateContainer(0.5)} initial="hidden" animate="visible" className="text-md sm:text-2xl font-normal text-gray-600 dark:text-gray-400">
                        I am passionate about creating beautiful products and data driven experiences that <b>empower</b> people
                        <br />
                        Let me show <i><b>you</b></i>...
                    </motion.p>
                    <motion.div variants={animateContainer(0.75)} initial="hidden" animate="visible" className="flex items-center mt-4 sm:mt-8 mb-4">
                        <Link to="about" className="cursor-pointer flex items-center gap-2 text-sm text-white font-medium pl-5 pr-4 rounded-full bg-gray-800 hover:bg-gray-900 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700">
                            <span className="pt-2 pb-2.5">About me</span>
                            <FaLongArrowAltDown size={20} />
                        </Link>
                    </motion.div>
                </div>
                <div className="hidden lg:flex justify-center items-center">
                    {theme === "dark" ?
                        <lord-icon src="https://cdn.lordicon.com/vlycxjwx.json" trigger="loop" delay="1000" stroke="bold" colors="primary:white,secondary:white" style={{ width: "300px", height: "300px" }} />
                        :
                        <lord-icon src="https://cdn.lordicon.com/vlycxjwx.json" trigger="loop" delay="1000" stroke="bold" colors="primary:#1e293b,secondary:#1e293b" style={{ width: "300px", height: "300px" }} />
                    }
                </div>
                <motion.img
                    initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0 }}
                    src={profileImage} alt="my profile"
                    className="lg:hidden rounded-2xl resize-none mx-auto w-3/4 lg:w-72 xl:w-96"
                />
            </div>
        </li>
    );
};

export default Home;
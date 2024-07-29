import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Dot from "./subcomponents/Dot";
import profileImage from "../assets/img-profile-image.png";

function Home() {
    const letters = `!#$%&0123456789?@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz|`;
    const values = ["websites", "ui/ux", "web apps"];
    const [valueIndex, setValueIndex] = useState(0);
    const maxLengthOfValue = values[valueIndex].length;
    const paceOfRandomWords = 40;
    const frequencyInterval = 5;
    const spacingBetweeenValues = maxLengthOfValue * paceOfRandomWords * frequencyInterval * 1.5;

    useEffect(() => {
        const interval = setInterval(() => {
            setValueIndex((valueIndex + 1) % values.length);
        }, spacingBetweeenValues);
        return () => clearInterval(interval);
    }, [valueIndex, values.length, spacingBetweeenValues]);

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

    const animateContainer = (delay) => ({
        hidden: { x: -20, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
    });

    return (
        <li className="py-4 mb-10 ms-4">
            <Dot />
            <div name="home" className="md:flex md:gap-16 xl:gap-72 select-none">
                <div>
                    <time className="text-md font-normal leading-none text-gray-800 dark:text-gray-400">&lt;start/&gt;</time>
                    <motion.h3 variants={animateContainer(0)} initial="hidden" animate="visible" className="text-4xl sm:text-5xl font-semibold">
                        Hi, my name is
                        <span className="text-5xl sm:text-6xl font-bold text-violet-700"> Karan Bisht</span>
                    </motion.h3>
                    <motion.p variants={animateContainer(0.25)} initial="hidden" animate="visible" className="mt-2 text-xl sm:text-3xl font-normal text-gray-600 dark:text-gray-400">
                        I <i>design</i> and develop <span id="scrambledText" className="font-bold text-2xl sm:text-4xl text-slate-800 dark:text-white">Websites</span>
                    </motion.p>
                    <motion.p variants={animateContainer(0.5)} initial="hidden" animate="visible" className="mb-8 text-md sm:text-2xl font-normal text-gray-600 dark:text-gray-400">
                        Let me show <i className="font-bold">you</i>...
                    </motion.p>
                </div>
                <motion.img
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    src={profileImage}
                    alt="my profile"
                    className="rounded-2xl resize-none mx-auto w-11/12 md:w-72 xl:w-96"
                />
            </div>
        </li>

    );
};

export default Home;
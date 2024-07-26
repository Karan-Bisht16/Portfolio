import { useEffect, useState } from "react";
import Dot from "./Dot";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";
import profileImage from "../assets/img-profile-image.png";

function Home() {
    const letters = `!#$%&0123456789?@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz|`;
    const values = ["websites", "ui/ux", "web apps"];
    const [valueIndex, setValueIndex] = useState(0);
    const maxLengthOfValue = values[valueIndex].length;
    const paceOfRandomWords = 40;
    const frequencyInterval = 3;
    const spacingBetweeenValues = maxLengthOfValue * paceOfRandomWords * frequencyInterval * 2;

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

    return (
        <li className="mb-10 ms-4">
            <Dot />
            <div name="home" className="md:flex md:gap-16 xl:gap-72">
                <div>
                    <time className="text-md font-normal leading-none text-gray-800 dark:text-gray-400">&lt;start/&gt;</time>
                    <h3 className="text-4xl sm:text-5xl font-semibold">
                        Hi, my name is
                        <span className="text-5xl sm:text-6xl font-bold text-violet-700"> Karan Bisht</span>
                    </h3>
                    <p className="mt-2 mb-8 text-xl sm:text-3xl font-normal text-gray-600 dark:text-gray-400">
                        I <i>design</i> and develop <span id="scrambledText" className="font-bold text-2xl sm:text-4xl text-slate-800 dark:text-white">Websites</span>
                    </p>
                </div>
                <img
                    src={profileImage}
                    alt="my profile"
                    className="rounded-2xl resize-none mx-auto w-11/12 md:w-72 xl:w-96"
                />
            </div>
        </li>

    );
};

export default Home;
// <div
//     name="home"
//     className="h-screen w-full mt-20 dark:bg-gradient-to-b dark:from-black dark:to-violet-950"
// >
//     <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
//         <div className="flex flex-col justify-center h-full">
//             <h2 className="text-4xl sm:text-7xl font-bold text-white">
//                 I'm a Full Stack Developer
//             </h2>
//             <p className="text-gray-500 py-4 max-w-md">
//                 I have 8 years of experience building and desgining software.
//                 Currently, I love to work on web application using technologies like
//                 React, Tailwind, Next JS and GraphQL.
//             </p>

//             <div>
//                 <Link
//                     to="portfolio"
//                     smooth
//                     duration={500}
//                     className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
//                 >
//                     Portfolio
//                     <span className="group-hover:rotate-90 duration-300">
//                         <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
//                     </span>
//                 </Link>
//             </div>
//         </div>

//         <div>
//             <img
//                 src={profileImage}
//                 alt="my profile"
//                 className="rounded-2xl mx-auto sm:w-1/2"
//             />
//         </div>
//     </div>
// </div>

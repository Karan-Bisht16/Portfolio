import { motion } from "framer-motion";
import Dot from "./subComponents/Dot";
import { Paragraph } from "./subComponents/TextSubComponents";
import profileImage from "../assets/img-profile-image.png";

const About = () => {
    return (
        <li name="about" className="select-none pt-4 sm:pt-16 mb-4 ms-4">
            <Dot />
            <div className="lg:grid lg:grid-cols-3 lg:gap-16">
                <div className="relative -top-4 lg:col-span-2 lg:text-right">
                    <h3 className="font-semibold mb-4 select-none text-4xl sm:text-5xl pt-1 sm:pt-0">
                        This is my Story
                    </h3>
                    <Paragraph content=
                        {<span>
                            Alright, let's do this one last time...
                            <br />
                            My name is <span className="text-violet-700 dark:text-white">Karan Bisht</span>. I am a full-stack Web Developer. I thrive on inviting challenges and consistently strive for excellence, as reflected in my academic achievements. My passion for art and music deeply influences my work, allowing me to infuse creativity into every project I undertake.
                            <br /><br />
                            I believe that the best way to grow is by constantly learning and adapting, which is why I continuously seek new knowledge and skills. I like to combine my technical expertise with my artistic flair, using my websites as a canvas for my creativity.
                            <br /><br />
                            Whether it's through designing visually appealing interfaces or crafting seamless user experiences, I aim to create digital solutions that are both functional and inspiring.
                        </span>}
                    />
                </div>
                <motion.img
                    initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0 }}
                    src={profileImage} alt="my profile"
                    className="hidden lg:flex rounded-2xl resize-none mx-auto w-3/4 md:w-72 xl:w-96"
                />
            </div>
        </li>
    );
};

export default About;
import Dot from "./subComponents/Dot";
import { Heading, Paragraph } from "./subComponents/TextSubComponents";
import backgroundImage from "../assets/img-background.avif"

const Contact = () => {
    return (
        <li name="contact" className="select-none pt-4 sm:pt-16 mb-4 ms-4">
            <Dot />
            <div className="relative -top-4">
                <Heading title="Contact" />
                <Paragraph content=
                    {"Submit the form below to get in touch with me"}
                />
                <div className="flex flex-col p-4 justify-center max-w-screen-xl mx-auto h-full">
                    <div className=" flex justify-center items-center">
                        <form
                            action="https://getform.io/f/aolgzxdb"
                            method="POST"
                            className=" flex flex-col w-full md:w-1/2"
                        >
                            <input
                                type="text" name="name" placeholder="Enter your name" required autoComplete="off"
                                className="p-2 bg-transparent selection:bg-slate-700 border-2 border-slate-700 dark:border-gray-400 rounded-md focus:outline-none"
                            />
                            <input
                                type="email" name="email" placeholder="Enter your email" required autoComplete="off"
                                className="my-4 p-2 bg-transparent selection:bg-slate-700 border-2 border-slate-700 dark:border-gray-400 rounded-md focus:outline-none"
                            />
                            <textarea
                                name="message" placeholder="Enter your message" rows="10" required
                                className="p-2 bg-transparent border-2 selection:bg-slate-700 border-slate-700 dark:border-gray-400 rounded-md focus:outline-none"
                            />
                            <button className="text-xl text-white px-4 py-3 my-8 mx-auto flex items-center rounded-md border-2 bg-slate-700 dark:bg-slate-900 border-slate-700 dark:border-gray-400 hover:border-slate-800 hover:dark:border-slate-900 hover:bg-slate-800 hover:dark:bg-slate-900">
                                Let's connect
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center sm:mt-16">
                <img src={backgroundImage} alt="my profile" className="rounded-2xl resize-none mx-auto w-11/12" />
                <p className="text-xl font-semibold">Thanks for stopping by !</p>
            </div>
            <Dot />
            <time className="text-md font-normal leading-none text-gray-800 dark:text-gray-400">&lt;end/&gt;</time>
        </li>
    );
};

export default Contact;

import Dot from "./subcomponents/Dot";
import { Heading, Paragraph } from "./subcomponents/TextSubComponents";

function Contact() {
    return (
        <li className="ms-4 select-none sm:pt-16 mb-16 sm:mb-10">
            <Dot />
            <div name="contact" className="relative -top-4">
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
                                className="p-2 bg-transparent border-2 border-slate-700 dark:border-gray-400 rounded-md focus:outline-none"
                            />
                            <input
                                type="email" name="email" placeholder="Enter your email" required autoComplete="off"
                                className="my-4 p-2 bg-transparent border-2 border-slate-700 dark:border-gray-400 rounded-md focus:outline-none"
                            />
                            <textarea
                                name="message" placeholder="Enter your message" rows="10" required
                                className="p-2 bg-transparent border-2 border-slate-700 dark:border-gray-400 rounded-md focus:outline-none"
                            />
                            <button className="text-xl text-white px-4 py-3 my-8 mx-auto flex items-center rounded-md border-2 bg-slate-700 dark:bg-slate-800 border-slate-700 dark:border-gray-400 hover:text-slate-700 hover:dark:text-gray-900 hover:bg-white hover:dark:bg-gray-400">
                                Let's connect
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Dot />
            <time className="text-md font-normal leading-none text-gray-800 dark:text-gray-400">&lt;end/&gt;</time>
        </li>
    );
};

export default Contact;

import Dot from "./subcomponents/Dot";
import ProjectCard from "./subcomponents/ProjectCard";
import { Heading } from "./subcomponents/TextSubComponents";
import syncspace from "../assets/projects/img-syncspace.jpg";
import sevakrit from "../assets/projects/img-sevakrit.jpg";
import quicklist from "../assets/projects/img-quicklist.jpg";
import keeperNotesApp from "../assets/projects/img-keeper-notes-app.jpg"
import reactToDoList from "../assets/projects/img-react-to-do-list.jpg";
import pietModrian from "../assets/projects/img-piet-mondrian.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";

const Portfolio = () => {
    const portfolios = [
        {
            src: syncspace, websiteLink: "https://syncspace-karan-bishts-projects.vercel.app/", githubRepositoryLink: "https://github.com/Karan-Bisht16/SyncSpace",
            content: <span>SyncSpace is a Reddit-like website built using the <b>MERN</b> stack (MongoDB, Express.js, React.js, Node.js).<br />It allows users to create & join communities, known as subspaces, where they can post content, comment, & interact with others.</span>
        },
        {
            src: sevakrit, websiteLink: "https://sevakritv3-karan-bishts-projects.vercel.app/", githubRepositoryLink: "https://github.com/Karan-Bisht16/Sevakrit_v3",
            content: <span>A web app to connect potential donors to nearby NGOs for tackling wastage of resources; using <b>Node.js</b>, <b>Express.js</b> & <b>MongoDB</b>.<br />Integrated an interactive map using <b>Leaflet JS library</b> & <b>OpenStreetMap API</b>. Implemented features for admins to monitor & verify NGOs.</span>
        },
        {
            src: quicklist, websiteLink: "https://expressjs-to-do-list-karan-bishts-projects.vercel.app/", githubRepositoryLink: "https://github.com/Karan-Bisht16/expressjs-To_Do_List",
            content: <span>A simple <b>To-Do List</b> project to try & implement Node.js, Express.js alongside MongoDB to my previous project:<a href="https://karan-bisht16.github.io/js-To_Do_List/" target="_blank" rel="noreferrer" className="flex items-center gap-1 font-bold ml-4">js-To_Do_List <FaExternalLinkAlt size={10} />.</a>Implemented user authentication system with <b>bycrpt</b> for data security & <b>connect-mongo</b> & <b>cookies</b> to store user sessions.</span>
        },
        {
            src: keeperNotesApp, websiteLink: "https://react-keeper-notes-app-karan-bishts-projects.vercel.app/", githubRepositoryLink: "https://github.com/Karan-Bisht16/react-Keeper_Notes_App",
            content: <span>A basic <b>To-Do List</b> made strictly using <b>React.js</b> & doesn't employ Node.js, Express.js or MongoDB connectivity.</span>
        },
        {
            src: reactToDoList, websiteLink: "https://react-to-do-list-karan-bishts-projects.vercel.app/", githubRepositoryLink: "https://github.com/Karan-Bisht16/react-To_Do_List",
            content: <span>A basic <b>To-Do List</b> project made using <b>React.js</b>. This is part of my <b>The Complete 2024 Web Development Bootcamp course</b>.</span>
        },
        {
            src: pietModrian, websiteLink: "https://karan-bisht16.github.io/css-Piet_Mondrian/", githubRepositoryLink: "https://github.com/Karan-Bisht16/css-Piet_Mondrian",
            content: <span>A simple website made only using HTML, CSS & <b>Bootstrap</b>, focusing on Piet Mondrian. This project implements his neoplastic artworks using the <b>CSS grid layout</b>.<br />The website serves as both a tribute and a practical exercise in web design and layout techniques.</span>
        },
    ];

    return (
        <li className="sm:pt-16 mb-10 ms-4">
            <Dot />
            <div name="portfolio" className="relative -top-4">
                <Heading title="Portfolio" />
                {/* <div className="max-w-4xl grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0"> */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-1 sm:px-0">
                    {portfolios.map((portfolio, index) => (
                        <ProjectCard key={index} portfolio={portfolio} />
                    ))}
                </div>
            </div>
        </li>
    );
};

export default Portfolio;
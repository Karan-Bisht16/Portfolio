import Dot from "./subcomponents/Dot";
import syncspace from "../assets/projects/img-syncspace.jpg";
import sevakrit from "../assets/projects/img-sevakrit.jpg";
import quicklist from "../assets/projects/img-quicklist.jpg";
import keeperNotesApp from "../assets/projects/img-keeper-notes-app.jpg"
import reactToDoList from "../assets/projects/img-react-to-do-list.jpg";
import pietModrian from "../assets/projects/img-piet-mondrian.jpg";
import { Heading } from "./subcomponents/TextSubComponents";
import ProjectCard from "./subcomponents/ProjectCard";

const Portfolio = () => {
    const portfolios = [
        { src: syncspace, websiteLink: "https://syncspace-karan-bishts-projects.vercel.app/", githubRepositoryLink: "https://github.com/Karan-Bisht16/SyncSpace" },
        { src: sevakrit, websiteLink: "https://sevakritv3-karan-bishts-projects.vercel.app/", githubRepositoryLink: "https://github.com/Karan-Bisht16/Sevakrit_v3" },
        { src: quicklist, websiteLink: "https://expressjs-to-do-list-karan-bishts-projects.vercel.app/", githubRepositoryLink: "https://github.com/Karan-Bisht16/expressjs-To_Do_List" },
        { src: keeperNotesApp, websiteLink: "https://react-keeper-notes-app-karan-bishts-projects.vercel.app/", githubRepositoryLink: "https://github.com/Karan-Bisht16/react-Keeper_Notes_App" },
        { src: reactToDoList, websiteLink: "https://react-to-do-list-karan-bishts-projects.vercel.app/", githubRepositoryLink: "https://github.com/Karan-Bisht16/react-To_Do_List" },
        { src: pietModrian, websiteLink: "https://karan-bisht16.github.io/css-Piet_Mondrian/", githubRepositoryLink: "https://github.com/Karan-Bisht16/css-Piet_Mondrian" },
    ];

    return (
        <li className="sm:pt-16 mb-10 ms-4">
            <Dot />
            <div name="portfolio" className="relative -top-4">
                <Heading title="Portfolio" />
                {/* <div className="max-w-4xl grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0"> */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map((portfolio, index) => (
                        <ProjectCard key={index} portfolio={portfolio} />
                    ))}
                </div>
            </div>
        </li>
    );
};

export default Portfolio;
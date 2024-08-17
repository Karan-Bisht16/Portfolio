import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
    // State to manage the theme (dark or light mode)
    const [theme, setTheme] = useState(localStorage.getItem("portfolio-theme"));
    useEffect(() => {
        // Retrieve theme from local storage on initial load
        const localStorageTheme = localStorage.getItem("portfolio-theme");
        if (localStorageTheme) {
            setTheme(localStorageTheme);
        } else {
            // If no theme in local storage, check user's system preference
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setTheme("dark");
            } else {
                setTheme("light")
            }
        }
    }, []);

    useEffect(() => {
        // Update the classList of the document element based on theme changes
        if (theme === "dark") { document.documentElement.classList.add("dark") }
        else if (theme === "light") { document.documentElement.classList.remove("dark") }
    }, [theme]);

    function handleToggleTheme() {
        const tempTheme = theme;
        setTheme(theme === "light" ? "dark" : "light");
        localStorage.setItem("portfolio-theme", tempTheme === "dark" ? "light" : "dark");
    }

    // Add scroll event listener to animate header on scroll
    useEffect(() => {
        let lastScrollTop;
        const navbarContainer = document.getElementById("navbarContainer");
        window.addEventListener("scroll", function () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                navbarContainer.style.top = "-80px";
            } else {
                navbarContainer.style.top = "0";
            }
            lastScrollTop = scrollTop;
        });
    });

    return (
        <div className={theme}>
            <div id="navbarContainer" className="fixed top-0 left-0 z-10">
                <NavBar theme={theme} handleToggleTheme={handleToggleTheme} />
            </div>
            <div className="bg-slate-300 dark:bg-black">
                <div className="pt-24 sm:pt-18 mx-4 sm:mx-20 text-slate-800 dark:text-white">
                    <ol className="relative border-s-2 pb-2 lg:py-24 border-violet-700">
                        <Home theme={theme} />
                    </ol>
                </div>
            </div>
            <div className="flex justify-center align-middle relative z-0 bg-gradient-to-b from-gray-200 to-gray-100 dark:from-gray-900 dark:to-indigo-950">
                <div className="mx-4 sm:mx-20 w-screen text-slate-800 dark:text-white">
                    <ol className="pt-4 relative border-s-2 border-violet-700">
                        <About />
                        <Projects />
                        <TechStack />
                        <Contact />
                    </ol>
                </div>
                <SocialLinks />
            </div>
            <Footer />
            <Analytics />
        </div>
    );
}

export default App;
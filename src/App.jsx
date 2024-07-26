import { useState, useEffect } from "react";
import { Analytics } from '@vercel/analytics/react';
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Home from "./components/Home";

function App() {
    const [theme, setTheme] = useState(localStorage.getItem("portfolio-theme"));
    useEffect(() => {
        // check in local storage;
        const localStorageTheme = localStorage.getItem("portfolio-theme");
        if (localStorageTheme) {
            setTheme(localStorageTheme);
        } else {
            // else check preffered
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setTheme("dark");
            } else {
                setTheme("light")
            }
        }
    }, []);
    useEffect(() => {
        if (theme === "dark") { document.documentElement.classList.add("dark") }
        else if (theme === "light") { document.documentElement.classList.remove("dark") }
    }, [theme]);
    function handleToggleTheme() {
        const tempTheme = theme;
        setTheme(theme === "light" ? "dark" : "light");
        // set localStorage item
        localStorage.setItem("portfolio-theme", tempTheme === "dark" ? "light" : "dark");
    }

    return (
        <div className={theme}>
            <NavBar theme={theme} handleToggleTheme={handleToggleTheme} />
            <div className="flex justify-center align-middle h-screen relative z-0  bg-gradient-to-b from-violet-200 via-violet-100 to-white dark:bg-gradient-to-b dark:from-black dark:to-violet-950">
                <div className="mt-20 sm:mt-40 mx-4 sm:mx-20 text-slate-800 dark:text-white">
                    <ol className="relative border-s-2 border-violet-700">
                        <Home />
                    </ol>
                </div>
                <SocialLinks />
            </div>
            <Analytics />
        </div>
    );
}

export default App;
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light");
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme)
    }, [theme])
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return (
        <div>
            <button onClick={toggleTheme} className="btn btn-sm lg:btn bg-indigo-500 lg:bg-indigo-500">
                {theme === "light" ? "🌙": "☀️"}
            </button>
        </div>
    );
};

export default ThemeToggle;
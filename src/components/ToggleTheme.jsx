import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

function ToggleTheme(props) {
    const { size, theme, handleToggleTheme, sx } = props;

    return (
        <div onClick={handleToggleTheme} className={`cursor-pointer w-10 justify-center flex ${sx}`}>
            {theme === "dark" ?
                <IoMoonOutline className={`size-${size} transition ease-in-out hover:text-gray-400 hover:scale-125`} />
                :
                <IoSunnyOutline className={`size-${size} scale-125 transition ease-in-out hover:text-yellow-300 hover:scale-150`} />
            }
        </div>
    );
};

export default ToggleTheme;
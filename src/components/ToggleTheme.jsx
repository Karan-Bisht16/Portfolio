import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

function ToggleTheme(props) {
    const { mobile, theme, handleToggleTheme } = props;

    return (
        <div onClick={handleToggleTheme} className={`cursor-pointer w-10 justify-center flex ${mobile ? "py-6" : ""}`}>
            {theme === "dark" ?
                <IoMoonOutline size={mobile ? 48 : 24} className={"transition ease-in-out hover:text-gray-400 hover:scale-125"} />
                :
                <IoSunnyOutline size={mobile ? 48 : 24} className={"scale-125 transition ease-in-out hover:text-yellow-300 hover:scale-150"} />
            }
        </div>
    );
};

export default ToggleTheme;
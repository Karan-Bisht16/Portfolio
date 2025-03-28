import { useContext } from 'react';
// importing icons
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
// importing contexts
import { ThemeContext } from '../../contexts/theme.context';

const ToggleTheme = (props) => {
    const { mobile } = props;
    const { theme, handleToggleTheme } = useContext(ThemeContext);

    return (
        <div onClick={handleToggleTheme} className='flex justify-center w-10 cursor-pointer'>
            {theme === 'dark' ?
                <IoMoonOutline
                    size={mobile ? 40 : 24}
                    className='transition ease-in-out hover:text-[--theme-btn-text] hover:scale-105'
                />
                :
                <IoSunnyOutline
                    size={mobile ? 40 : 24}
                    className='scale-125 transition ease-in-out hover:text-[--theme-btn-text] hover:scale-[1.3]'
                />
            }
        </div>
    );
};

export default ToggleTheme;
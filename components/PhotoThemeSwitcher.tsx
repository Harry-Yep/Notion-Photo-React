import { useTheme } from 'next-themes';

import { BsSunFill, BsMoonFill } from 'react-icons/bs';

const PhotoThemeSwither = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div id='notion-photo-theme-switcher' className='my-3 flex items-center justify-center'>
            <div className='flex rounded border-2 p-1 transition duration-500 ease-in-out hover:bg-[#23272d] hover:text-[#adbac7] hover:ring-2 dark:hover:bg-white dark:hover:text-[#23272d]'>
                {theme === 'dark' ? (
                    <button onClick={() => setTheme('light')} aria-label='light mode'>
                        <BsSunFill />
                    </button>
                ) : (
                    <button onClick={() => setTheme('dark')} aria-label='dark mode'>
                        <BsMoonFill />
                    </button>
                )}
            </div>
        </div>
    );
};

export default PhotoThemeSwither;

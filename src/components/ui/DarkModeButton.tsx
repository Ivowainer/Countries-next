import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { BsMoon, BsFillMoonFill } from 'react-icons/bs'

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="flex items-center cursor-pointer text-black dark:text-white">
      {theme === 'light' ? (
        <BsMoon />
      ) : (
        <BsFillMoonFill />
      )}
      <p className='ml-2 font-semibold '>Dark Mode</p>
    </button>
  )
}

export default DarkModeButton
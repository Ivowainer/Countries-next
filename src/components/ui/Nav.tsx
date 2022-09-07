import Link from 'next/link'
import { BsMoon } from 'react-icons/bs'
import DarkModeButton from './DarkModeButton'

const Nav: React.FC = () => {
  return (
    <nav className='px-4 md:px-20 py-4 dark:bg-gray-800 bg-white shadow flex flex-col md:flex-row justify-between items-center'>
      <Link href="/">
        <a className="font-bold text-2xl text-black dark:text-white">Where in the world?</a>
      </Link>
      {/* <div className="flex items-center cursor-pointer text-black dark:text-white">
        <BsMoon />
        <p className='ml-2 font-semibold '>Dark Mode</p>
      </div> */}
      <DarkModeButton />
    </nav>
  )
}

export default Nav
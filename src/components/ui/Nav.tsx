import Link from 'next/link'
import { BsMoon } from 'react-icons/bs'

const Nav: React.FC = () => {
  return (
    <nav className='px-4 md:px-20 py-4 bg-white shadow flex flex-col md:flex-row justify-between items-center'>
      <Link href="/">
        <a className="font-bold text-2xl">Where in the world?</a>
      </Link>
      <div className="flex items-center cursor-pointer">
        <BsMoon />
        <p className='ml-2 font-semibold'>Dark Mode</p>
      </div>
    </nav>
  )
}

export default Nav
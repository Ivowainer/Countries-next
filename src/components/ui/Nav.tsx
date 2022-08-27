import { BsMoon } from 'react-icons/bs'

const Nav: React.FC = () => {
  return (
    <nav className='px-16 py-4 bg-white shadow flex justify-between items-center'>
      <h1 className="font-bold text-2xl">Where in the world?</h1>
      <div className="flex items-center cursor-pointer">
        <BsMoon />
        <p className='ml-2 font-semibold'>Dark Mode</p>
      </div>
    </nav>
  )
}

export default Nav
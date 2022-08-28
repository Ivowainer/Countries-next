import { BiSearch } from 'react-icons/bi'

const SearchBar: React.FC = () => {
  return (
    <div className='w-full md:w-1/3 text-base bg-white flex items-center pl-3 md:px-5 py-3 shadow rounded-sm'>
        <label className='text-gray-400 mr-5 text-lg' htmlFor="search"><BiSearch /></label>
        <input id="search" type="text" className='outline-none' placeholder="Search for a country..."/>
    </div>
  )
}

export default SearchBar

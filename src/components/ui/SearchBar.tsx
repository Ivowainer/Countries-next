import { BiSearch } from 'react-icons/bi'

interface SearchBarProps {
  searchContent: string;
  setSearchContent: any;
}

const SearchBar: React.FC<SearchBarProps> = ({setSearchContent, searchContent}) => {
  return (
    <div className='w-full md:w-1/3 text-base dark:bg-slate-800 bg-white flex items-center pl-3 md:px-5 py-3 shadow rounded-sm'>
        <label className='text-gray-400 mr-5 text-lg' htmlFor="search"><BiSearch /></label>
        <input 
          id="search" 
          type="text" 
          className='outline-none text-gray-400 dark:text-white dark:bg-slate-800 w-full' 
          placeholder="Search for a country..."
          onChange={(e) => setSearchContent(e.target.value)}
          value={searchContent}
        />
    </div>
  )
}

export default SearchBar

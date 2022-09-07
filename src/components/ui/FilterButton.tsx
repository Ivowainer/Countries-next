import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

interface FilterButtonProps {
    filterButton: boolean;
    setFilterButton: any;
    contentFilter: string;
    setContentFilter: any;
}

const REGION = {
    America: "America",
    Asia: "Asia",
    Europe: "Europe",
    Oceania: "Oceania",
}


const FilterButton: React.FC<FilterButtonProps> = ({ filterButton, setFilterButton, contentFilter, setContentFilter }) => {

    const verifyClicked = (region: string) => {
        if(region === contentFilter) return contentFilter && region == ''
    
        setContentFilter(region)
    }

    return (
    <div 
        className="relative shadow-sm flex justify-center gap-7 items-center w-full md:w-48 py-3 text-gray-600 dark:text-gray-200 bg-white dark:bg-slate-800 font-semibold rounded-md cursor-pointer"
        onClick={() => setFilterButton(!filterButton)}
    >
        <p className="text-sm">Filter by Region</p>
        <div className="">
            {filterButton ? (
                <IoIosArrowDown />
            ): (
                <IoIosArrowUp />
            )}
        </div>
        <div className={`${filterButton ? 'flex' : 'hidden'} flex-col shadow-md absolute top-14 w-full z-10 gap-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 font-semibold rounded-md items-start pl-5 py-3`}>
            {/* <div onClick={() => setContentFilter} className="hover:dark:text-gray-400 hover:text-gray-400 transition-colors duration-200 w-full">Africa</div>
            <div className="hover:dark:text-gray-400 hover:text-gray-400 transition-colors duration-200 w-full">America</div>
            <div className="hover:dark:text-gray-400 hover:text-gray-400 transition-colors duration-200 w-full">Asia</div>
            <div className="hover:dark:text-gray-400 hover:text-gray-400 transition-colors duration-200 w-full">Europe</div>
            <div className="hover:dark:text-gray-400 hover:text-gray-400 transition-colors duration-200 w-full">Oceania</div> */}
            {Object.keys(REGION).map(region => (
                <div
                    key={region}
                    className="hover:dark:text-gray-400 hover:text-gray-400 transition-colors duration-200 w-full"
                    onClick={() => verifyClicked(region)}
                >{region}</div>
            ))}
        </div>
    </div>
  )
}

export default FilterButton
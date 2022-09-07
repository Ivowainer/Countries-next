import { CountriesSmall } from '../../interfaces/CountriesAll'
import Card from './Card'

interface CardContainerProps {
  countries: CountriesSmall[];
  searchContent: string;
  contentFilter: string;
}

const CardContainer: React.FC<CardContainerProps> = ({ countries, contentFilter, searchContent }) => {
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10 gap-x-20 gap-y-10">
            {countries.filter((val) => {
              if(searchContent === ''){
                return val
              } else if (val.name.official.toLowerCase().includes(searchContent.toLowerCase())) {
                return val
              }
            }).filter((val) => {
              if(contentFilter === ''){
                return val
              } else if(val.region.toLowerCase().includes(contentFilter.toLowerCase())) {
                return val
              }
            }).map(country => (
              <Card flags={country.flags} capital={country.capital} name={country.name} population={country.population} region={country.region} key={country.name.official}/>
            ))}
        </div>
    </div>
  )
}

export default CardContainer

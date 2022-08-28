import { CountriesSmall } from '../../interfaces/CountriesAll'
import Card from './Card'

interface Props {
  countries: CountriesSmall[]
}

const CardContainer: React.FC<Props> = ({ countries }) => {
  return (
    <div>
        <div className="grid mt-10 grid-cols-4 gap-x-20 gap-y-10">
            {countries.map(country => (
              <Card flags={country.flags} capital={country.capital} name={country.name} population={country.population} region={country.region} key={country.name.official}/>
            ))}
        </div>
    </div>
  )
}

export default CardContainer

import Image from 'next/image'
import { Country } from '../../interfaces/CountriesAll'
import InfoCountry from './InfoCountry'

interface InfoContainerProps {
  country: Country
}

const InfoContainer: React.FC<InfoContainerProps> = ({ country }) => {
  const { name, flags } = country

  return (
    <div className="mt-14 sm:grid sm:grid-cols-1 lg:grid-cols-2 md:gap-24"> {/*  */}
      <Image src={flags?.svg || flags?.png || ""} width={450} height={270} layout="responsive" alt={`Image of the country ${name?.common}`}></Image>
      <InfoCountry country={country}/>
    </div>
  )
}

export default InfoContainer

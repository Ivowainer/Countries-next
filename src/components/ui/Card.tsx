import Image from "next/image"
import { CoatOfArms, CountriesSmall, Name } from '../../interfaces/CountriesAll';

interface Props {
  name: Name;
  population: number;
  capital: string[];
  region: string;
  flags: CoatOfArms;
}

const Card: React.FC<Props> = ({ name, population, region, capital, flags }) => {
  console.log(flags)
  return (
    <div className="rounded-md bg-white shadow">
        <Image src={flags.svg} width={250} height={150} layout="responsive" alt={`Flag of Country`} className="rounded-tr-md rounded-tl-md"/>
        <div className="px-6 pt-4 pb-10">
            <p className="font-bold text-xl my-3">{name.common}</p>
            <p className="font-bold text-sm mb-1">Populátion: <span className="font-light">{population}</span></p>
            <p className="font-bold text-sm mt-1">Region: <span className="font-light">{region}</span></p>
            <p className="font-bold text-sm mt-1">Capital: <span className="font-light">{capital}</span></p>
        </div>
    </div>
  )
}

export default Card

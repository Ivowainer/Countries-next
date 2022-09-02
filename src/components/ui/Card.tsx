import Image from "next/image"
import Link from "next/link";
import { CoatOfArms, CountriesSmall, Name } from '../../interfaces/CountriesAll';

interface Props {
  name: Name;
  population: number;
  capital: string[];
  region: string;
  flags: CoatOfArms;
}

const Card: React.FC<Props> = ({ name, population, region, capital, flags }) => {
  return (
    <Link href={`/country/${name.common}`}>
      <div className="rounded-md text-black dark:text-gray-300 dark:bg-slate-800 bg-white shadow cursor-pointer hover:shadow-2xl transition-shadow duration-700">
        <Image src={flags.svg} width={300} height={200} layout="responsive" alt={`Flag of Country`} className="rounded-tr-md rounded-tl-md"/>
        <div className="px-6 pt-4 pb-10">
          <p className="font-bold text-xl my-3">{name.common}</p>
          <p className="font-bold text-sm mb-1">Populátion: <span className="font-light">{population}</span></p>
          <p className="font-bold text-sm mt-1">Region: <span className="font-light">{region}</span></p>
          <p className="font-bold text-sm mt-1">Capital: <span className="font-light">{capital}</span></p>
        </div>
      </div>
    </Link>
  )
}

export default Card

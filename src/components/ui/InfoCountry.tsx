import Link from "next/link"
import { Country, Curren } from '../../interfaces/CountriesAll';

interface InfoCountryProps {
    country: Country
}

const InfoCountry: React.FC<InfoCountryProps> = ({ country }) => {
    /* const { name, capital, currencies, languages, population, region, subregion, tld, borders } = country */

    /* const curren = Object.keys(currencies!)[0] as Curren
    const coin = currencies![curren] */

    return (
        <div className="py-8">
            {/* <p className="text-3xl font-bold">{country.name?.common}</p> */}
            <div className="mt-7 flex flex-col sm:flex-row gap-2 sm:gap-20">
                {/* <div className="flex flex-col gap-2">
                    <p className="font-bold text-sm">Native Name: <span className="font-normal">{country.name?.nativeName[Object.keys(country.name?.nativeName)[0]]?.official }</span></p>
                    <p className="font-bold text-sm">Population: <span className="font-normal">{country.population ? country.population : "Undefined"}</span></p>
                    <p className="font-bold text-sm">Region: <span className="font-normal">{country.region ? country.region : "Undefined"}</span></p>
                    <p className="font-bold text-sm">Sub Region: <span className="font-normal">{country.subregion ? country.subregion : "Undefined"}</span></p>
                    <p className="font-bold text-sm">Capital: <span className="font-normal">{country.capital ? country.capital : "Undefined"}</span></p>
                </div> */}
                {/* <div className="flex flex-col gap-2">
                    <p className="font-bold text-sm">Top Level Domain: <span className="font-normal">{country.tld}</span></p>
                    <p className="font-bold text-sm">Currencies: <span className="font-normal">{currencies ? coin?.name : "Undefined"}</span></p> 
                    <p className="font-bold text-sm">Languages: <span className="font-normal">{country?.languages![Object.keys(country?.languages!)[0]] || "Undefined"}</span></p> 
                </div> */}
            </div>
            <div className="flex items-center mt-10">
                <p className="text-md font-semibold mr-5">Border Countries:</p>
                <div className="flex gap-5 items-center">
                    {/* country?.borders?.map(border => (
                        <>
                            <Link href={`/name/${border}`} key={border}>
                                <a className="border text-sm shadow bg-white px-6 py-1 rounded" key={border}>{border}</a>
                            </Link>
                        </>
                    )) */}
                </div>
            </div>
        </div>
    )
}

export default InfoCountry

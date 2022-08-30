import Link from "next/link"
import { Country } from "../../interfaces/CountriesAll"
import CountryB from "./CountryB"

interface InfoCountryProps {
    country: Country
}

const InfoCountry: React.FC<InfoCountryProps> = ({ country }) => {
    const { name, capital, currencies, languages, population, region, subregion, tld, borders } = country

    return (
        <div className="py-8">
            <p className="text-3xl font-bold" onClick={() => console.log(borders)}>{name?.common}</p>
            <div className="mt-7 flex flex-col sm:flex-row gap-2 sm:gap-20">
                <div className="flex flex-col gap-2">
                    <p className="font-bold text-sm">Native Name: <span className="font-normal">{name?.nativeName[Object.keys(name.nativeName)[0]].official }</span></p>
                    <p className="font-bold text-sm">Population: <span className="font-normal">{}</span></p>
                    <p className="font-bold text-sm">Region: <span className="font-normal">{region}</span></p>
                    <p className="font-bold text-sm">Sub Region: <span className="font-normal">{subregion}</span></p>
                    <p className="font-bold text-sm">Capital: <span className="font-normal">{capital}</span></p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-bold text-sm">Top Level Domain: <span className="font-normal">{tld}</span></p>
                    <p className="font-bold text-sm">Currencies: <span className="font-normal">{currencies[Object.keys(currencies)[0]].name}</span></p>
                    <p className="font-bold text-sm">Languages: <span className="font-normal">{languages[Object.keys(languages)[0]]}</span></p>
                </div>
            </div>
            <div className="flex items-center mt-10">
                <p className="text-md font-semibold mr-5">Border Countries:</p>
                <div className="flex gap-5 items-center">
                    {borders.map(border => (
                        <>
                            <Link href={`/country/${border}`}>
                                <a className="border text-sm shadow bg-white px-6 py-1 rounded" key={border}>{border}</a>
                            </Link>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default InfoCountry

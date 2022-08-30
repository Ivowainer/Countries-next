/* import unidecode from "unidecode"; */

import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next"
import { countriesApi } from "../../src/helpers/countriesApi"
import { CountriesAll } from '../../src/interfaces/CountriesAll';

type CountryNameProps = InferGetStaticPropsType<typeof getStaticProps>

const CountryName: NextPage<CountryNameProps> = ({ country }) => {

    const { name, capital, currencies, flags, languages, population, region, subregion, tld } = country

    return (
        <div>
            <h1>{country.name.common}</h1>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await countriesApi.get<CountriesAll[]>(`/all`)

    const countries = data.map((country) => country.name?.common )

    return {
        paths: countries.map(( name: string ) => ({
            params: { name }
        })),
        fallback: "blocking"
    }
}

export const getStaticProps = async ({ params }:GetStaticPropsContext) => {
    const { name } = params!

    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)

    if(!res.ok){
        return {
            props: {} as never,
            notFound: true
        }
    }

    const data = await res.json() as CountriesAll[]

    const country = {
        name: data[0].name || null,
        population: data[0].population || null,
        region: data[0].region || null,
        subregion: data[0].subregion || null,
        capital: data[0].capital || null,
        flags: data[0].flags || null,
        tld: data[0].tld || null,
        currencies: data[0].currencies || null,
        languages: data[0].languages || null
    }

    console.log(country)

    return {
        props: {
            country
        }
    }
}

export default CountryName

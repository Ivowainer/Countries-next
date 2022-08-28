import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { countriesApi } from "../../src/helpers/countriesApi"
import { CountriesAll, Country } from '../../src/interfaces/CountriesAll';

interface Props {
    country: Country[]
}

const countryName: NextPage<Props> = ({ country }) => {
    console.log(country)

    return (
        <div>
        
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await countriesApi.get(`/all`)

    const countries = data.map((country: CountriesAll) => country.name?.common )

    return {
        paths: countries.map(( name: string ) => ({
            params: { name: name }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { name } = params as { name: string }

    const { data } = await countriesApi.get(`/name/${name}`)

    const country = {
        name: data[0].name,
        population: data[0].population,
        region: data[0].region,
        subregion: data[0].subregion,
        capital: data[0].capital,
        flags: data[0].flags,
        tld: data[0].tld,
        currencies: data[0].currencies,
        languages: data[0].languages
    }

    console.log(country)

    return {
        props: {
            country
        }
    }
}

export default countryName

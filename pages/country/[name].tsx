/* import unidecode from "unidecode"; */

import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next"
import { countriesApi } from "../../src/helpers/countriesApi"
import { CountriesAll } from '../../src/interfaces/CountriesAll';

type CountryNameProps = InferGetStaticPropsType<typeof getStaticProps>

const CountryName: NextPage<CountryNameProps> = ({ country }) => {

    return (
        <div>
        
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

    const { data } = await countriesApi.get<CountriesAll[]>(`/name/${name}`)

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

    return {
        props: {
            country
        }
    }
}

export default CountryName

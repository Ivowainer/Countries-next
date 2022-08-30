import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next"
import MainLayout from "../../src/components/layouts/MainLayout";
import { countriesApi } from "../../src/helpers/countriesApi"
import { CountriesAll } from '../../src/interfaces/CountriesAll';

import { BsArrowLeftShort } from "react-icons/bs"
import InfoContainer from "../../src/components/ui/InfoContainer";

type CountryNameProps = InferGetStaticPropsType<typeof getStaticProps>

const CountryName: NextPage<CountryNameProps> = ({ country }) => {

    return (
        <MainLayout page={`${country.name.common} | Countries`}>
            <div className="px-8 py-8 md:px-20 md:py-12">
                <button 
                    className="px-12 py-2 rounded bg-white shadow-md hover:shadow-xl transition-shadow duration-700 flex justify-center items-center"
                >
                    <BsArrowLeftShort />Back
                </button>
                <InfoContainer country={country}/>
            </div>
        </MainLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await countriesApi.get<CountriesAll[]>(`/all`)

    const countries = data.map((country) => country.cca2 )

    return {
        paths: countries.map(( cca2: string ) => ({
            params: { cca2 }
        })),
        fallback: "blocking"
    }
}

export const getStaticProps = async ({ params }:GetStaticPropsContext) => {
    const { cca2 } = params!

    const res = await fetch(`https://restcountries.com/v3.1/name/${cca2}`)

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
        languages: data[0].languages || null,
        borders: data[0].borders || null,
    }

    return {
        props: {
            country
        }
    }
}

export default CountryName

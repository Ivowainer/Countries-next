import type { GetStaticProps, NextPage } from 'next'
import MainLayout from '../src/components/layouts/MainLayout'
import CardContainer from '../src/components/ui/CardContainer'
import SearchBar from '../src/components/ui/SearchBar'
import { countriesApi } from '../src/helpers/countriesApi'
import { CountriesAll, CountriesSmall } from '../src/interfaces/CountriesAll';

interface Props {
  countries: CountriesSmall[]
}

const Home: NextPage<Props> = ({ countries }) => {

  return (
    <>
      <MainLayout page={"Countries | Home"}>
        <div className="px-2 md:px-24 mt-10">
          <SearchBar />
          <CardContainer countries={countries}/>
        </div>
      </MainLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await countriesApi.get('/all')

  const countries = data.map((country: CountriesAll) => ({
    name: country.name,
    population: country.population,
    region: country.region,
    capital: country.capital || null,
    flags: country.flags
  }))

  console.log(countries)

  return {
    props: {
      countries
    }
  }
}

export default Home

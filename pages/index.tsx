import type { GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import MainLayout from '../src/components/layouts/MainLayout'
import CardContainer from '../src/components/ui/CardContainer'
import FilterButton from '../src/components/ui/FilterButton'
import SearchBar from '../src/components/ui/SearchBar'
import { countriesApi } from '../src/helpers/countriesApi'
import { CountriesAll, CountriesSmall } from '../src/interfaces/CountriesAll';

interface Props {
  countries: CountriesSmall[]
}

const Home: NextPage<Props> = ({ countries }) => {

  const [searchContent, setSearchContent] = useState<string>('')
  const [filterButton, setFilterButton] = useState<boolean>(false)
  const [contentFilter, setContentFilter] = useState<string>('')

  useEffect(() => {
    console.log(contentFilter)
  }, [contentFilter])

  return (
    <>
      <MainLayout page={"Home | Countries"}>
        <div className="px-6 pb-20 md:px-16 mt-10">
          <div className="flex flex-col gap-10 md:flex-row justify-between items-center">
            <SearchBar setSearchContent={setSearchContent} searchContent={searchContent}/>
            <FilterButton filterButton={filterButton} setFilterButton={setFilterButton} contentFilter={contentFilter} setContentFilter={setContentFilter} />
          </div>
          <CardContainer contentFilter={contentFilter} searchContent={searchContent} countries={countries}/>
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

  return {
    props: {
      countries
    }
  }
}

export default Home

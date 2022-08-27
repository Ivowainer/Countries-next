import type { NextPage } from 'next'
import MainLayout from '../src/components/layouts/MainLayout'
import Card from '../src/components/ui/Card'
import SearchBar from '../src/components/ui/SearchBar'

const Home: NextPage = () => {
  return (
    <>
      <MainLayout page={"Countries | Home"}>
        <div className="px-16 mt-10">
          <SearchBar />
          <Card />
        </div>
      </MainLayout>
    </>
  )
}

export default Home

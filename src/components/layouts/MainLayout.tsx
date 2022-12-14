import Head from 'next/head'
import Nav from '../ui/Nav';

interface Props {
  page: string;
}

const MainLayout: React.FC<React.PropsWithChildren<Props>> = ({ page, children }) => {
  return (
    <>
      <Head>
        <title>{page}</title>
      </Head>

      <div className='bg-gray-100 dark:bg-slate-800/75 min-h-screen'>
        <Nav />

        {children}
      </div>
    </>
  )
}

export default MainLayout
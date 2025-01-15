import Head from 'next/head';
import Layout from '../../components/Layout';
import PatformsBanner from '../../components/Contact_Banner';
import PopularArticles from '../../components/PopularArticles';
import PlatformsSection from '../../components/PlatformsSection';
import { platformBanner, platformArticles, platformData } from '../../constants/data';
export default function Platform() {
  return (
    <div>
      <Head>
        <title>Platforms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <PatformsBanner {...platformBanner} />
          <PlatformsSection {...platformData}/>
          <PopularArticles {...platformArticles}/>
        </main>
      </Layout>
    </div>
  );
}

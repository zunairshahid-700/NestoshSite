import Head from 'next/head';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import WhoWeAre from '../components/WhoWeAre';
import SalesforcePlatforms from '../components/SalesforcePlatforms';
import { heroData, Whoweare, ShopifyServices } from '../constants/data';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <HeroSection {...heroData} />
          <WhoWeAre {...Whoweare} />
          <SalesforcePlatforms {...ShopifyServices} />
        </main>
      </Layout>
    </div>
  );
}

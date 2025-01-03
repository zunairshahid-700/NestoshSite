import Head from 'next/head';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import WhoWeAre from '../components/WhoWeAre';
import SalesforcePlatforms from '../components/SalesforcePlatforms';
import Partners from '../components/Partners'
import Customers from '../components/Customers'
import PopularArticles from '../components/PopularArticles'
import { heroData, Whoweare, ShopifyServices, HomePartners, SalesforceServices, CustomersData, popuparArticles } from '../constants/data';
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
          <Partners {...HomePartners}/>
          <SalesforcePlatforms {...SalesforceServices} />
          <Customers {...CustomersData}/>
          <PopularArticles {...popuparArticles}/>
        </main>
      </Layout>
    </div>
  );
}

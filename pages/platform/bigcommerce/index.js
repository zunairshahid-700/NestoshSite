import Head from 'next/head';
import Layout from '../../../components/Layout';
import BigCommerceBanner from '../../../components/Contact_Banner';
import ServicesSection from '../../../components/ServicesSection';
import Customers from '../../../components/Customers'
import { magentoBanner,
  shopifyCustomers,
  partnersBigCommerceServices } from '../../../constants/data';
export default function Bigcommerce() {
  return (
    <div>
      <Head>
        <title>Bigcommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <BigCommerceBanner {...magentoBanner} />
            {/* To be continue... */}
          <ServicesSection {...partnersBigCommerceServices} />
          <Customers {...shopifyCustomers} />
          <div className='py-5 mb-5 mb-md-0'></div>
        </main>
      </Layout>
    </div>
  );
}

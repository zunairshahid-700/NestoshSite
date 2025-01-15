import Head from 'next/head';
import Layout from '../../../components/Layout';
import ShopifyBanner from '../../../components/Contact_Banner';
import ShopifySolution from '../../../components/ShopifySolution';
import ConnectorOMS from '../../../components/ConnectorOMS';
import ServicesSection from '../../../components/ServicesSection';
import Customers from '../../../components/Customers'
import { shopifyBanner, shopifySolutions, connectorOMS, partnersShopifyServices, shopifyCustomers } from '../../../constants/data';
export default function Shopify() {
  return (
    <div>
      <Head>
        <title>Shopify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <ShopifyBanner {...shopifyBanner} />
          <ShopifySolution shopifySolutions={shopifySolutions} />
          <ConnectorOMS {...connectorOMS} />
          <ServicesSection {...partnersShopifyServices} />
          <Customers {...shopifyCustomers} />
          <div className='py-5 mb-5 mb-md-0'></div>
        </main>
      </Layout>
    </div>
  );
}

import Head from 'next/head';
import Layout from '../../../components/Layout';
import MagentoBanner from '../../../components/Contact_Banner';
import PlatformContent from '../../../components/PlatformContent';
import ServicesSection from '../../../components/ServicesSection';
import { magentoBanner, partnersMagentoServices, magentoPlatform } from '../../../constants/data';
export default function Magento() {

  const firstSection = magentoPlatform.sections[0]; // Get the first section
  return (
    <div>
      <Head>
        <title>Magento</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <MagentoBanner {...magentoBanner} />
          <PlatformContent {...magentoPlatform}/>
          <ServicesSection {...partnersMagentoServices} />
        </main>
      </Layout>
    </div>
  );
}

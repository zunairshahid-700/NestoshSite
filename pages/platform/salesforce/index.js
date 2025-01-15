import Head from 'next/head';
import Layout from '../../../components/Layout';
import SalesforceBanner from '../../../components/Contact_Banner';
import ServicesSection from '../../../components/ServicesSection';
import Customers from '../../../components/Customers'
import ConnectorOMS from '../../../components/ConnectorOMS'
import { salesforceBanner,
  partnersSlaseforceServices,
  salesforceCustomers,
  salesforceWhyChose,
  salesforcePlatform,
  salesforceSolutions,
  salesforceConnectorOMS } from '../../../constants/data';
import SalesforceExpertise from '../../../components/SalesforceExpertise';
import PlatformContent from '../../../components/PlatformContent';
import SalesforceSolutions from '../../../components/SalesforceSolutions';
export default function Salesforce() {
  return (
    <div>
      <Head>
        <title>Salesforce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <SalesforceBanner {...salesforceBanner} />
          <PlatformContent {...salesforcePlatform}/>
          <SalesforceExpertise {...salesforceWhyChose} />
          <SalesforceSolutions {...salesforceSolutions} />
          <ConnectorOMS {...salesforceConnectorOMS} />
          <Customers {...salesforceCustomers} />
          <ServicesSection {...partnersSlaseforceServices} />
        </main>
      </Layout>
    </div>
  );
}

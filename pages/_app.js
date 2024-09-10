import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import HeroSection from "../components/HeroSection";
import WhoWeAre from "../components/WhoWeAre";
import Partners from "../components/Partners";
import PartnersDetails from "../components/PartnersDetails";
import SalesforcePlatforms from "../components/SalesforcePlatforms";
import SalesforceServices from "../components/Services";
import Customers from "../components/Customers";
import Client from "../components/Client";
import AllArticles from '../components/AllArticles';
import Article from '../components/Article';
import PopularArticles from '../components/PopularArticles';
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  banner: HeroSection,
  whoWeAre: WhoWeAre,
  PartnersSection: Partners,
  Partners: PartnersDetails,
  SalesforcePlatforms: SalesforcePlatforms,
  // Services: SalesforceServices,
  Customers: Customers,
  Client: Client,
  article: Article,
  'all-articles': AllArticles,
  PopularArticles: PopularArticles,
};

storyblokInit({
  accessToken: '9Hm4Ur9u135mh7pnF9E62gtt',
  use: [apiPlugin],
    components,
    apiOptions: {
      region: 'us'
    }
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

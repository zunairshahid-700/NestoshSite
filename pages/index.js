// import Head from "next/head";
// import {
//   useStoryblokState,
//   getStoryblokApi,
//   StoryblokComponent,
// } from "@storyblok/react";

// export default function Home({ story }) {
//   story = useStoryblokState(story);

//   return (
//     <div>
//       <Head>
//         <title>Nestosh LLC.</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <StoryblokComponent blok={story?.content} />
//     </div>
//   );
// }

// export async function getStaticProps() {
//   let slug = "home"; // Default to "home" or another fallback page

//   let sbParams = {
//     version: "draft", // or 'published'
//   };

//   const storyblokApi = getStoryblokApi();
//   let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

//   return {
//     props: {
//       story: data ? data.story : null,
//       key: data ? data.story.id : null,
//     },
//     revalidate: 3600, // Revalidate every hour
//   };
// }

import Head from 'next/head';

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from '@storyblok/react';
import Layout from '../components/Layout';

export default function Home({ story }) {
  story = useStoryblokState(story, {
    resolveRelations: ['popular-articles.articles'],
  });

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <StoryblokComponent blok={story.content} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  let slug = 'home';

  let sbParams = {
    version: 'draft', // or 'published'
    // resolve_relations: ['popular-articles.articles'],
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}

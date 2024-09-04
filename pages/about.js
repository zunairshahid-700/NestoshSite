// import React from 'react';
// import {
//     useStoryblokState,
//     getStoryblokApi,
//     StoryblokComponent,
//   } from '@storyblok/react';
// import Layout from '../components/Layout';
// import Head from 'next/head';

// // const About = () => {
// //   return (
// //     <Layout>
// //         <StoryblokComponent blok={story.content} />
// //       </Layout>
// //     // <div>about page</div>
// //   )
// // }

// // export default About


// export default function About({ story }) {
//     story = useStoryblokState(story, {
//     //   resolveRelations: ['popular-articles.articles'],
//     });
  
//     return (
//       <div>
//         <Head>
//           <title>Home</title>
//           <link rel="icon" href="/favicon.ico" />
//         </Head>
//         <Layout>
//           <StoryblokComponent blok={story.content} />
//         </Layout>
//       </div>
//     );
//   }
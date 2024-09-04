import React from 'react';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import SectionTitle from './global/SectionTitle';


const FeaturedArticles = ({blok}) => {
  return (
    <div {...storyblokEditable(blok)}> 
        <SectionTitle title={blok.Headline}/>
        {/* {blok.Client.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))} */}
    </div>
  )
}

export default FeaturedArticles
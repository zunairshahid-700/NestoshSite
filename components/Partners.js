import React from 'react';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import SectionTitle from './global/SectionTitle';


const Partners = ({blok}) => {
  return (
    <div {...storyblokEditable(blok)}> 
        <SectionTitle title={blok.Title}/>
        {blok.SubHeading}
        {blok.Partners.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}

export default Partners
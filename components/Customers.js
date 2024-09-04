import React from 'react';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import SectionTitle from './global/SectionTitle';


const Customers = ({blok}) => {
  return (
    <div {...storyblokEditable(blok)}> 
        <SectionTitle title={blok.Title}/>
        {blok.Client.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}

export default Customers
import React from 'react';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";


const SalesforcePlatforms = ({blok}) => {
  return (
    <div {...storyblokEditable(blok)}> 
        {blok.Heading}
        {blok.Services.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}

export default SalesforcePlatforms
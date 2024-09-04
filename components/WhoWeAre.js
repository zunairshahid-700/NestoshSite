import React from 'react';
import { storyblokEditable } from "@storyblok/react";
import SectionTitle from './global/SectionTitle';


const WhoWeAre = ({blok}) => {
  return (
    <div {...storyblokEditable(blok)}> 
        <SectionTitle title={blok.Title}/>
        {blok.SubHeading}
    </div>
  )
}

export default WhoWeAre
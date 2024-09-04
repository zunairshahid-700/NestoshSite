import React from 'react';
import { storyblokEditable } from "@storyblok/react";
import SectionTitle from './global/SectionTitle';


const PartnersDetails = ({blok}) => {
  return (
    <div {...storyblokEditable(blok)}> 
        {blok.Title} <br/>
        {blok.Details}<br/>
        <img src={blok.Image.filename} alt={blok.Title} />

    </div>
  )
}

export default PartnersDetails
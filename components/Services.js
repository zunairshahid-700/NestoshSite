import React from 'react';
import { storyblokEditable } from "@storyblok/react";


const SalesforceServices = ({blok}) => {
  return (
    <div {...storyblokEditable(blok)}> 
        {blok.Name} <br/>
        <img src={blok.Image.filename} alt={blok.Name} />

    </div>
  )
}

export default SalesforceServices
import React from 'react';
import { storyblokEditable } from "@storyblok/react";


const Client = ({blok}) => {
    return (
        <div {...storyblokEditable(blok)}> 
            {blok.URL.cached_url} <br/>
            {blok.Name}<br/>
            <img src={blok.Image.filename} alt={blok.Name} />
        </div>
      )
}

export default Client